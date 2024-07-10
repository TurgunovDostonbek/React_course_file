// style 
import "./Trips.css"
import { useState, useEffect} from "react"

function Trips() {
    const [trips, setTrips] = useState([]);
    const [url, setUrl] = useState("http://localhost:3000/trips")
    
    console.log(trips);

    useEffect(() => {
      fetch(url)
    .then((res) => res.json())
    .then((data) => setTrips(data));
    }, [url])



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
        <button onClick={() => setUrl("http://localhost:3000/trips?loc=Europe")} > Europe</button>
        <button onClick={() => setUrl("http://localhost:3000/trips")}>America</button>
    </div>
  )
}
export default Trips