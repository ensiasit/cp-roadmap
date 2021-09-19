export const parse = ({ entryLevel, levels }) => {
  const nodeIndex = {};
  const nodes = [];

  Object.entries(levels).forEach(([id, level]) => {
    const node = { ...level, id };

    nodes.push(node);
    nodeIndex[id] = node;
  });

  Object.entries(levels).forEach(([id, { next }]) => {
    nodeIndex[id].next = next.map((nextId) => nodeIndex[nextId]);
  });

  return nodeIndex[entryLevel];
};
