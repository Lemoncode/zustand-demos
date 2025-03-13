import { useShallow } from "zustand/shallow";
import { useCounter } from "../stores/counter.store";

export const CounterEditAliasComponent = () => {
  const { alias, setAlias } = useCounter(
    useShallow((state) => ({
      alias: state.alias,
      setAlias: state.setAlias,
    }))
  );

  return (
    <div>
      <input
        type="text"
        value={alias}
        onChange={(e) => setAlias(e.target.value)}
      />
    </div>
  );
};
