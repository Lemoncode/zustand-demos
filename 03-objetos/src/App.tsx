import "./App.css";
import { CounterDisplay, CounterIncrement } from "./components";
import { CounterEditAliasComponent } from "./components/counter-edit-alias.component";

function App() {
  return (
    <>
      <div></div>
      <h1>Simple counter</h1>
      <CounterEditAliasComponent />
      <CounterDisplay />
      <CounterIncrement />
    </>
  );
}

export default App;
