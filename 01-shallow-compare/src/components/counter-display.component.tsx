import { useCounter } from "../stores/counter.store";

export function CounterDisplay() {
  const { count } = useCounter();
  console.log("CounterDisplay rerender");
  return <h2>Current value: {count}</h2>;
}
