import SVG from "./components/SVG";
import MineSweeper from "./components/MineSweeper";
import "./App.css";

const App = () => {
  return (
    <SVG>
      <MineSweeper m={10} n={10}></MineSweeper>
    </SVG>
  );
};

export default App;
