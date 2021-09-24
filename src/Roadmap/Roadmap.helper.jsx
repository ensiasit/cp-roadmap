import short from 'short-uuid';
import RoadmapCell from './RoadmapCell';

const parse = ({ levels, rows, cols }) => {
  const nodeIndex = {};
  const gridNodes = Array.from({ length: rows }, () => Array.from({ length: cols }));

  Object.entries(levels).forEach(([id, level]) => {
    const node = { ...level, id, prev: [] };
    nodeIndex[id] = node;
    gridNodes[level.row][level.col] = node;
  });

  Object.entries(levels).forEach(([id, { next }]) => {
    nodeIndex[id].next = next.map((nextId) => nodeIndex[nextId]);
    next.forEach((nextId) => nodeIndex[nextId].prev.push(nodeIndex[id]));
  });

  return gridNodes;
};

export const buildGrid = (roadmap) => {
  const gridNodes = parse(roadmap);

  return (
    <table cellPadding={0} cellSpacing={0}>
      <tbody data-testid="grid">
        {Array.from({ length: roadmap.rows }, (_row, row) => (
          <tr key={short.generate()}>
            {Array.from({ length: roadmap.cols }, (_col, col) => (
              <td key={short.generate()}>
                <RoadmapCell gridNode={gridNodes[row][col]} row={row} col={col} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
