import { writable } from "svelte/store";

const createStore = () => {
  const { set, update, subscribe } = writable("/");
  return {
    subscribe,
    changePath: (path) => set(path),
  };
};

export const currentPath = createStore();
