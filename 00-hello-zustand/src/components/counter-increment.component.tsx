import { useCounter } from "../stores/counter.store";

export function CounterIncrement() {
  const { inc } = useCounter();
  return <button onClick={inc}>Increment</button>;
}
