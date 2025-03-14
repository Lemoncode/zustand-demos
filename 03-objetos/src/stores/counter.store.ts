import { create } from "zustand";

interface Counter {
  id: string;
  alias: string;
  count: number;
}

type Store = {
  counter: Counter;
  inc: () => void;
  setAlias: (alias: string) => void;
};

export const useCounter = create<Store>((set) => ({
  counter: {
    id: "125-3434-3432",
    alias: "Office",
    count: 0,
  },
  inc: () => set((state) => ({ counter: { ...state.counter, count: state.counter.count + 1 } })),
  setAlias: (alias: string) => set((state) => ({ counter: { ...state.counter, alias } })),
}));
