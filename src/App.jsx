// import useSwitch from "./UseSwitch";
// import useDate from "./UseDate";
import useCustomPointer from "./UseCustomPointer";

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

// function App() {

//   const currentDate = useDate();

//   return (
//     <div>
//       <h1>Data e ora attuali:</h1>
//       <p>{currentDate.toLocaleString()}</p>
//     </div>
//   );

// }


// ✅ Snack 3

function App() {
  const customPointer = useCustomPointer(<span style={{ fontSize: 50 }}>✈️</span>);

  return (
    <div>
      <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
      <span style={{ fontSize: 250 }}>🌏</span>
      {customPointer}
    </div>
  );
}


export default App;