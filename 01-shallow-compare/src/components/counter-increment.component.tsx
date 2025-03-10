import { useShallow } from "zustand/shallow";
import { useCounter } from "../stores/counter.store";

export function CounterIncrement() {
  const { inc } = useCounter(
    useShallow((state) => ({
      inc: state.inc,
    }))
  );
  console.log("CounterIncrement render");
  return <button onClick={inc}>Increment</button>;
}
