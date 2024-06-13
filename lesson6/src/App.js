import './App.css';

function App() {

  let name = "Dostonbek"

const handeleClick = () => {
  name = "BibiSora"
}

  return (
    <div className="App">
      <h1>
          My name is {name}
      </h1>

      <button onClick = {handeleClick}> Change name</button>
    </div>
  );
}

export default App;
