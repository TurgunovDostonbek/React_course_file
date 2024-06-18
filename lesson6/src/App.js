import './App.css';
import { useState } from "react"

function App() {
  let [name, setName] = useState("Dostonbek")
  const [events, setEvents] = useState([
    {title: "Dostonbek hello", id: 1 },
    {title: "Bibisora hello", id: 2 },
    {title: "Mohinabonu hello", id: 3 }
  ])
 

const handeleClick = () => {
  setName("Bibisora")
}

const handeleDelete = (id) => {
  // 1 - usul
  ///////////////////////////
  // const eventDelet = events.filter((event) =>{
  //   return event.id !== id
  // })
  // setEvents(eventDelet)
  
// 2 - usul 
///////////////////////////////

  setEvents((prev) => {
    return prev.filter((event) => {
      return event.id !== id
    })
  })
}

  return (
    <div className="App">

      <h1> My name is {name}</h1>
      <button onClick = {handeleClick}> Change name</button>

      {events.map((item) => {
        return (
          <div key={item.id} > 
            <h1>  {item.title}</h1>
            <button onClick={() =>  handeleDelete(item.id)}> Delete Me </button>
          </div>
        )
      })}
    </div>
  );
}

export default App;
