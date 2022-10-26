import "./App.css";
import Data from "./data/data.json";

function App() {
  return (
    <>
      <h1 className=" text-lg text-cyan-800">Hola</h1>
      {Data.map((dataJson) => {
        return (
          <>
            <p>{dataJson.name}</p>
            <img src={dataJson.src} alt={dataJson.name} />
            <br />
          </>
        );
      })}
    </>
  );
}

export default App;
