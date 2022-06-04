import { createContext, useContext } from "react";
import ProjectGridStore from "./projectGridStore";

interface Store {
    projectGridStore: ProjectGridStore
}

export const store: Store = {
    projectGridStore:  new ProjectGridStore()
}

export const storeContext = createContext(store);

export function useStore() {
   return useContext(storeContext);
}