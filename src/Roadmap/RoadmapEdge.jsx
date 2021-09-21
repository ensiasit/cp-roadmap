const getDegree = (node, adjacent) => {
  if (node.row === adjacent.row) {
    return node.col > adjacent.col ? 0 : 180;
  }

  return node.row > adjacent.row ? 90 : 270;
};

const getStyle = (node, adjacent) => ({
  width: 50,
  borderTop: "4px solid #acacac",
  borderBottom: "4px solid #acacac",
  position: "absolute",
  top: "calc(50% - 4px)",
  transformOrigin: "center right",
  transform: `rotate(${getDegree(node, adjacent)}deg)`
});

const RoadmapEdge = ({node, adjacent}) => {
  return <div data-testid="roadmap-edge" style={getStyle(node, adjacent)}/>;
}

export default RoadmapEdge;