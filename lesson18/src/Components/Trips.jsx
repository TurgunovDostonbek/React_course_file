// style 
import "./Trips.css"
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
// useCallback = functionlarni hotiraga saqlaydi.. (Manzilarini)

function Trips() {
    // const [trips, setTrips] = useState([])
    const [url, setUrl] = useState("http://localhost:3000/trips")
    // console.log(trips);

    const {data:trips} = useFetch(url)

    
    ///// useCallback hook ni => ishlatilishi....
    // const fetchTrips = useCallback(async () =>  {
    //   const req = await fetch(url)
    //   const data = await req.json();
    //   setTrips(data);
    // },[url]) 

    // useEffect(() => {
    //   fetchTrips()
    // //   fetch(url)
    // // .then((req) => req.json())
    // // .then((data) => setTrips(data))
    // } ,[fetchTrips])
    

  return (
    <div className="trips">
        {trips && trips.map((item) => {
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