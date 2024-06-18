import { useState } from 'react';
import './App.css';

function App() {
 let [name, setName] = useState("Dostonbek")
 let [name2, setName2] = useState("Donoxon")
 let [name3, setName3] = useState("Donoxon")

  
 const handeleClick = () =>{
  setName("Bibisora")
  setName2("Mohinabonu")
  setName3("Muhamad Yusuf")
 }

  return (
    <div className="App">
      <h1> My name is {name} </h1>
      <h2> My name is {name2} </h2>
      <h3> {name3}</h3>
      <button onClick={handeleClick} > Click Me </button>


      
    </div>
  );
}

export default App;
