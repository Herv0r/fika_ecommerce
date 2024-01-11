"use client";
import { useState } from "react";
import { Modal,Button } from "keep-react";
import { SidebarComponent } from "./Sidebar";
import Image from "next/image";
import hamburger from "/public/hamburger.svg"
import { X } from "@phosphor-icons/react";

export const ModalComponent = () => {
  const [showModalX, setShowModalX] = useState(false);

  const onClickTwo = () => {
    setShowModalX(!showModalX);
  };

  return (
    <>
      <Button onClick={onClickTwo} type='text-button'>
        <Image src={hamburger} alt="hamburger icon" width={24}/>
      </Button>
      <Modal
        size="sm"
        show={showModalX}
        onClose={onClickTwo}
        position="top-left"
      >
        <div className="flex justify-end m-0 p-0">
          <Button onClick={onClickTwo} type='text-button' className="text-gray-400"> 
            <X size={25} />
          </Button>
        </div>
        <Modal.Body>
          <SidebarComponent />
        </Modal.Body>
      </Modal> 
    </>
  );
}
