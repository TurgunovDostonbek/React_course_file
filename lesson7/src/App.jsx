import './App.css';
import { useState } from "react"

function App() {
// const [name, setName] = useState("Logo")
  let [name, setName] = useState("Dostonbek")
  const [showContent, setShowContent] = useState(false)
  const [showAbout, setShowAbout] = useState(false)
  const [showContact, setShowContact] = useState(false)
  // console.log(showContent);
  // const [events, setEvents] = useState([
  //   {title: "Dostonbek hello", id: 1 },
  //   {title: "Bibisora hello", id: 2 },
  //   {title: "Mohinabonu hello", id: 3 }
  // ])
 

// // const handeleClick = () => {
// //   setName("Bibisora")
// // }



// // const handeleDelete = (id) => {
// //   // 1 - usul
// //   ///////////////////////////
// //   // const eventDelet = events.filter((event) =>{
// //   //   return event.id !== id
// //   // })
// //   // setEvents(eventDelet)
  
// // // 2 - usul 
// // ///////////////////////////////

// //   setEvents((prev) => {
// //     return prev.filter((event) => {
// //       return event.id !== id
// //     })
// //   })
// // }


const showAdd = () => {
  
}



  return (
    <div className="App">

      <nav className='navbar'>
        <div className="nav_logo">
          <a href="#">
            <h1>logo</h1>
          </a>
        </div>

        <div className="nav_links">
          <a onClick={() => setShowContent(true)} href="#">Home</a>
          <a onClick={() => setShowAbout(true)} href="#">About</a>
          <a onClick={() => setShowContact(true)} href="#">Contact</a>
        </div>

      </nav>
      
      {showContent &&  <div className="home">
        <h1>home</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In hic earum facilis odio omnis aperiam blanditiis tempore at nostrum reiciendis suscipit quaerat adipisci corporis quia, et repellendus fugit dolorem. Eius possimus, numquam atque necessitatibus aut adipisci soluta officia illo nostrum voluptate illum ipsam ipsa sit quis, nisi, repellat nihil expedita.</p>
        <button onClick={() => setShowContent(false)} > Delete </button>
      </div>},

      {showAbout &&  <div className='home'>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In hic earum facilis odio omnis aperiam blanditiis tempore at nostrum reiciendis suscipit quaerat adipisci corporis quia, et repellendus fugit dolorem. Eius possimus, numquam atque necessitatibus aut adipisci soluta officia illo nostrum voluptate illum ipsam ipsa sit quis, nisi, repellat nihil expedita.</p>
        <button onClick={() => setShowAbout(false)} > Delete </button>
        </div>}


        {showContact && <div className='home'>
          <h1>Contact</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In hic earum facilis odio omnis aperiam blanditiis tempore at nostrum reiciendis suscipit quaerat adipisci corporis quia, et repellendus fugit dolorem. Eius possimus, numquam atque necessitatibus aut adipisci soluta officia illo nostrum voluptate illum ipsam ipsa sit quis, nisi, repellat nihil expedita.</p>
        <button onClick={() => setShowContact(false)} > Delete </button>
        </div>
        
        }


















































      {/* <h1> My name is {name}</h1>
      <button onClick = {handeleClick}> Change name</button>

      <br/>
      <hr/>
      {showContent && <button onClick={() => setShowContent(false)} > Delete</button>}
      { !showContent && <button onClick={() => setShowContent(true)} > Add</button>} */}

      {/* {showContent &&  
        <div>
          {events.length === 0 && <h2> No content Ye :( </h2>}
    {events.map((item) => {
        return (
          <div key={item.id} > 
            <h1>  {item.title}</h1>
            <button onClick={() =>  handeleDelete(item.id)}> Delete Me </button>
          </div>
        )
      })}
        </div>
       } */}



    </div>
  );
}

export default App;
