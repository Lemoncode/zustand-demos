//import { useCounter } from "../stores/counter.store";

export function CounterDisplay() {
  //const { count, id } = useCounter();

  //const id = useCounter((state) => state.id);
  //const count = useCounter((state) => state.count);

  /*
  const { count, id } = useCounter(
    useShallow((state) => ({
      count: state.count,
      id: state.id,
    }))
  );
  */

  console.log(">> CounterDisplay render");

  return (
    <h2>
      {id} Current value: {count}
    </h2>
  );
}
