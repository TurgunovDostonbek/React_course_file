import "./Components/Table.css"
import './App.css';
import AddUser from './Components/AddUser';
import Modal from './Components/Modal';
import { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showTHead, setShowTHead] = useState(false)
  const [events, setEvents] = useState([])
  
  const newEvent = (item) =>{
      setEvents((prev) => {
          return[...prev, item]
      })
  }

  const deleteUser = () =>{
    if(setEvents.length === 0){
      setShowTHead(false)
    }else{
      setShowTHead(true)
    }
  }

  const handelDelete = (id) => {
    const filterDelet = events.filter((item) => {
      return item.id !== id
    })
    setEvents(filterDelet)
    deleteUser()
  }



  return (
    <div className="App">
      <AddUser setShowModal={setShowModal}/>
      <div className="table container">
            {showTHead && <thead> 
                <tr>
                    <th>SI no</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Password</th>
                    <th>Operation</th>
                </tr>
            </thead>}
            {events.map((event) => {
                return(
                    <tbody>
                <tr key={event.id}>
                    <th>{event.id}</th>
                    <th>{event.name}</th>
                    <th>{event.email}</th>
                    <th>{event.mobile}</th>
                    <th>{event.password}</th>
                    <th id="th_btn">
                        <button className="th_btn_first">Update</button>
                        <button  onClick={() => handelDelete(event.id) }  className="th_btn_second" >Delete</button>
                    </th>
                </tr>
            </tbody> 
                )
            }) }
        </div>
      {/* <Tabel showTHead={showTHead} /> */}
      {showModal && <Modal setShowTHead ={setShowTHead} newEvent={newEvent} setShowModal={setShowModal} />}
    </div>
  );
}

export default App;
