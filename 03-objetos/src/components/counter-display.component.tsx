import { useShallow } from "zustand/shallow";
import { useCounter } from "../stores/counter.store";

export function CounterDisplay() {
  const { count, id } = useCounter(
    useShallow((state) => ({
      count: state.counter.count,
      id: state.counter.id,
    }))
  );

  console.log(">> CounterDisplay render");

  return (
    <h2>
      {id} Current value: {count}
    </h2>
  );
}
