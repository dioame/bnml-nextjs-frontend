import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter} from "@nextui-org/react";

export default function ModalComponent(
    {
        isOpen,
        onClose,
        CustomModalContent,
    }:
    {
        isOpen:any,
        onClose:any
        CustomModalContent:any,
    }
) {


  return (
    <>
      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
               <CustomModalContent/>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
