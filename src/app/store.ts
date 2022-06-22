import { createContext, useContext } from "react";
import ModalStore from "./modalStore";
import ProjectGridStore from "./projectGridStore";

interface Store {
    projectGridStore: ProjectGridStore,
    modalStore: ModalStore
}

export const store: Store = {
    projectGridStore:  new ProjectGridStore(),
    modalStore: new ModalStore()
}

export const storeContext = createContext(store);

export function useStore() {
   return useContext(storeContext);
}