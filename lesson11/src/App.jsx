import "./App.css";
import React, { useState } from "react";
import Title from "./Components/Title";
import Modal from "./Components/Modal";
import EventList from "./Components/EventList";

function App() {
  const [showModal, setShowModal] = useState(false);
  let [name, setName] = useState("Dostonbek");
  const [showContent, setShowContent] = useState(false);
  // const [showAbout, setShowAbout] = useState(false);
  // const [showContact, setShowContact] = useState(false);

  const [events, setEvents] = useState([
    { title: "Dostonbek hello", id: 1 },
    { title: "Bibisora hello", id: 2 },
    { title: "Mohinabonu hello", id: 3 },
  ]);

  const handeleClick = () => {
    setName("Bibisora");
  };

  const handeleDelete = (id) => {
    //   // 1 - usul
    //   ///////////////////////////
    //   // const eventDelet = events.filter((event) =>{
    //   //   return event.id !== id
    //   // })
    //   // setEvents(eventDelet)

    // // 2 - usul
    // ///////////////////////////////

    setEvents((prev) => {
      return prev.filter((event) => {
        return event.id !== id;
      });
    });
  };

  /// toogle modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <Title
        title="Lorem, ipsum dolor."
        subTitle="Lorem ipsum dolor sit amet."
        showContent="Salom hammaga salom"
      />
      <h1> My name is {name}</h1>
      <button onClick={handeleClick}> Change name</button>
      <br />
      <hr />
      {showContent && (
        <button onClick={() => setShowContent(false)}> Delete</button>
      )}
      {!showContent && (
        <button onClick={() => setShowContent(true)}> Add</button>
      )}
      {showContent && <EventList events={events} handeleDelete={handeleDelete} />
        
      }
      {showModal && (
        <Modal closeModal={closeModal} isModModal={false  }>
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>Lorem, ipsum dolor.</p>
        </Modal>
      )}
      <br />
      <br />
      <button onClick={() => setShowModal(true)}>Show Modal</button>
    </div>
  );
}

export default App;
