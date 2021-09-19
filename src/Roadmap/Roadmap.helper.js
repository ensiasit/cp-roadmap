const parse = ({ entryLevel, levels, rows, cols }) => {
  const nodeIndex = {};
  const nodes = [];
  const gridNodes = Array.from({ length: rows }, () =>
    Array.from({ length: cols })
  );

  Object.entries(levels).forEach(([id, level]) => {
    const node = { ...level, id };
    nodes.push(node);
    nodeIndex[id] = node;
    gridNodes[level.row][level.col] = node;
  });

  Object.entries(levels).forEach(([id, { next }]) => {
    nodeIndex[id].next = next.map((nextId) => nodeIndex[nextId]);
  });

  return gridNodes;
};

export const buildGrid = (roadmap) => {
  const gridNodes = parse(roadmap);

  return (
    <table>
      <tbody data-testid="grid">
        {Array.from({ length: roadmap.rows }, (_, row) => (
          <tr key={`grid[${row}]`}>
            {Array.from({ length: roadmap.cols }, (_, col) => (
              <td key={`grid[${row}][${col}]`}>
                {gridNodes[row][col] && gridNodes[row][col].name}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
