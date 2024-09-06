import { useContext, useState } from "react";
import { UserContext } from "./Context/user/user";
import { Hrcontext } from "./Context/hr/indexhr";

export function App() {
  const val = useContext(UserContext);
  const val2 = useContext(Hrcontext);
  const [state, setState] = useState("Hello");
  console.log(useState());

  const getData = () => {
    setState("salom");
  };

  return (
    <div className="App">
      <h1>{val2}</h1>
      <h1>{val}</h1>
      <h1>{state}</h1>
      <button onClick={getData}>Add</button>
    </div>
  );
}

export default App;
