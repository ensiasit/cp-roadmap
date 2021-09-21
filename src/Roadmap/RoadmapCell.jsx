import short from "short-uuid";
import RoadmapEdge from "./RoadmapEdge";
import RoadmapNode from "./RoadmapNode";

const getParentStyle = (row, col) => ({
  width: 100,
  height: 100,
  backgroundColor: ["#EFEFEF", "white"][(row + col) & 1],
  position: "relative",
  overflow: "hidden",
});

const RoadmapCell = ({gridNode, row, col}) => {
  if (!gridNode) {
    return <div data-testid="roadmap-cell" style={getParentStyle(row, col)}/>;
  }

  return <div data-testid="roadmap-cell" style={getParentStyle(row, col)}>
    <RoadmapNode/>
    {gridNode.prev.map((parent) => <RoadmapEdge key={short.generate()} node={gridNode} adjacent={parent}/>)}
    {gridNode.next.map((next) => <RoadmapEdge key={short.generate()} node={gridNode} adjacent={next}/>)}
  </div>;
}

export default RoadmapCell;