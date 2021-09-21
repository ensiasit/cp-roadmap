import circle from "../assets/img/circle.png";

const style = {
  position: "absolute",
  top: "calc(50% - 25px)",
  left: "calc(50% - 25px)",
  zIndex: 99,
};

const RoadmapNode = () => {
  return <img src={circle} alt="level" style={style}/>
}

export default RoadmapNode;