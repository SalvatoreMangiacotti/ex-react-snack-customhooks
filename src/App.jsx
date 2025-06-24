// import useSwitch from "./UseSwitch";
import useDate from "./UseDate";

// function App() {

// ✅ Snack 1
// const [isOn, toggle] = useSwitch();

// return (
//   <div>
//     <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
//     <button onClick={toggle}>Cambia Stato</button>
//   </div>
// );
// }

// ✅ Snack 2

function App() {

  const currentDate = useDate();

  return (
    <div>
      <h1>Data e ora attuali:</h1>
      <p>{currentDate.toLocaleString()}</p>
    </div>
  );

}

export default App;