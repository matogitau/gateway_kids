import BackDrop from "../BackDrop/BackDrop";
import Modal from "../Modal/Modal";
import reactDom from "react-dom";
import { useState } from "react";


const Overlays = (props) => {
  const [closeModal,setCloseModal] = useState(true);

  const setCloseModalHandler = setCloseModal(false)

  const portal = document.getElementById("portalOverlays")
  return (
    <>
    {reactDom.createPortal(<BackDrop onClose= {setCloseModalHandler}/>,portal)}
    {reactDom.createPortal(<Modal onClose= {setCloseModalHandler}>{props.children}</Modal>,portal)}
      
    </>
  );
};

export default Overlays;