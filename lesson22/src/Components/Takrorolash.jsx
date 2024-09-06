import { useState } from "react";
import "../Components/style.css";

function Takrorolash() {
  const [data, setData] = useState([
    { id: 1, year: 2000, price: "200$", name: "Damas" },
    { id: 2, year: 2002, price: "250$", name: "Nexia" },
    { id: 3, year: 2004, price: "230$", name: "Nexia 2" },
    { id: 4, year: 2001, price: "210$", name: "Tico" },
    { id: 5, year: 2001, price: "300$", name: "Cobalt" },
    { id: 6, year: 2010, price: "280$", name: "Spark" },
    { id: 7, year: 1999, price: "270$", name: "Laceti" },
    { id: 8, year: 2002, price: "310$", name: "Gentra" },
    { id: 9, year: 2001, price: "400$", name: "Malibu" },
  ]);
  const [info, setInfo] = useState(true);

  function deleted(id) {
    let filtered = data.filter((item) => {
      return item.id !== id;
    });
    setData(filtered);
  }

  return (
    <div className="box">
      {!info && <button onClick={() => setInfo(true)}>Add</button>}
      {info && <button onClick={() => setInfo(false)}>Remove</button>}
      <div className="wrapper">
        {info &&
          data.map((item) => {
            return (
              <div key={item.id} className="container">
                <h1>{item.name}</h1>
                <h3>{item.price}</h3>
                <h4>{item.year}</h4>
                <button onClick={() => deleted(item.id)}>Add</button>
              </div>
            );
          })}
        {data.length === 0 && <h1>no data</h1>}
      </div>
    </div>
  );
}

export default Takrorolash;
