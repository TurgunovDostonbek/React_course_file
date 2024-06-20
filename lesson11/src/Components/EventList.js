import React from 'react'
import style from "./EventList.module.css"

function EventList({events, handeleDelete} ) {
  return (
    <div className='eventList' >
          {events.length === 0 && <h2> No content Ye :( </h2>}
          {events.map((item) => {
            return (
              <div className={style.card} key={item.id}>
                <h1> {item.title}</h1>
                <button onClick={() => handeleDelete(item.id)}>
                  {" "}
                  Delete Me{" "}
                </button>
              </div>
            );
          })}
        </div>
  )
}

export default EventList