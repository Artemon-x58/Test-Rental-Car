import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import defaultImage from "./assets/autowp-ru-citroen-c5-27-a639e566.jpg";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <img src={defaultImage} alt="Pages image" />
      <h1>Vite + GH-Pages</h1>
    </>
  );
}

export default App;
