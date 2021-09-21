import {roadmap} from "./assets/roadmap";
import {buildGrid} from "./Roadmap/Roadmap.helper";

const App = () => {
  return buildGrid(roadmap);
};

export default App;
