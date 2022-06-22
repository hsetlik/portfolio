import { observer } from "mobx-react-lite";
import React from "react";
import { Modal } from "react-bootstrap";
import { useStore } from "../../app/store";

export default observer(function ModalContainer() {
    const {modalStore} = useStore();
    return (
        <Modal show={modalStore.component.open} onHide={modalStore.closeModal}>
           {modalStore.component.content !== null && (
            <Modal.Body>
                {modalStore.component.content}
            </Modal.Body>
           )}
        </Modal>
    )
})