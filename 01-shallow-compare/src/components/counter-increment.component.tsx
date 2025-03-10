import { useCounter } from "../stores/counter.store";

export function CounterIncrement() {
  const inc = useCounter((state) => state.inc);

  console.log("CounterIncrement render");
  return <button onClick={inc}>Increment</button>;
}
