import { makeAutoObservable } from "mobx";

interface Modal {
    open: boolean,
    content: JSX.Element | null
}

export default class ModalStore
{

    constructor() {
        makeAutoObservable(this);
    }

    component: Modal = {
        open: false,
        content: null
    }

    openModal = (body: JSX.Element) => {
            console.log('opening modal...');
            this.component.content = body;
            this.component.open = true;
    }

    closeModal = () => {
            this.component.content = null;
            this.component.open = false;
    }
}