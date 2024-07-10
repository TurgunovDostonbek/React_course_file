// style 
import "./Trips.css"
import { useState, useEffect, useCallback } from "react"

function Trips() {
    const [trips, setTrips] = useState([]);
    
    console.log(trips);

    useEffect(() => {
      fetch("http://localhost:3000/trips")
    .then((res) => res.json())
    .then((data) => setTrips(data));
    }, [])



  return (
    <div className="trips">
        {trips.map((item) => {
          return (
            <div key={item.id} className="trip-list">
            <h1>{item.title}</h1>
            <p>{item.price}</p>
          </div>
          )
        })}
        <button>Europe</button>
        <button>America</button>
    </div>
  )
}
export default Trips