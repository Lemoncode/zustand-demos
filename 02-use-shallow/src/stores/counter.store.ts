import { create } from "zustand";

type Store = {
  id: string;
  alias: string;
  count: number;
  inc: () => void;
  setAlias: (alias: string) => void;
};

/*
export const useCounter = create<Store>((set) => ({
  id: "125-3434-3432",
  alias: "Office",
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  setAlias: (alias: string) => set({ alias }),
}));
*/

//useStoreWithEqualityFn