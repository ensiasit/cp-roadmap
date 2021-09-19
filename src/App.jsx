import { roadmap } from "./assets/roadmap";
import { parse } from "./Roadmap/Roadmap.helper";

const App = () => {
  const graph = parse(roadmap);

  return <div>Hello World</div>;
};

export default App;
