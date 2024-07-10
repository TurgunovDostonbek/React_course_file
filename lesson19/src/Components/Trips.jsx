// style 
import "./Trips.css"
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

function Trips() {
    const [url, setUrl] = useState("http://localhost:3000/trips")
    const {data:trips, isPending, error} = useFetch(url)
    // console.log(trips);

  return (
    <div className="trips">
      <h1>Trip_List</h1>
      {isPending && <h4>Loading.....</h4>}
      {error && <h4>{error} </h4>}
        {trips && trips.map((item) => {
          return (
            <div key={item.id} className="trip-list">
            <h2>{item.title}</h2>
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