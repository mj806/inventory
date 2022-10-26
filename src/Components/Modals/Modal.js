import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Backdrop from "../Backdrop";


const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
        width: 200
    },
    visible: {
        y: "0",
        opacity: 1,
        width: 700,
        transition: {
          width: {
            delay: 0.5,
            stiffness: 700
          },
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500
        }
    },
    exit: {
        //y: "100vh",
        opacity: 0,
        width: 200,
        transition: {
          opacity: {
            delay: 1,
            duration: 0.5
          },
          y: {
            delay: 1.3
          },
          width: {
            delay: 0.5,
            stiffness: 700
          },
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500
        }
    },
  };


const Modal = props => {
  const { toggle, isShowing, children } = props;

  useEffect(() => {
    const handleEsc = event => {
      if (event.key === "Escape") {
        toggle();
      }
    };

    if (isShowing) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => window.removeEventListener("keydown", handleEsc);
  }, [isShowing, toggle]);

  if (!isShowing) {
    return null;
  }

  return (
    <Backdrop onClick={toggle}>
    <motion.div 
    className="modal for-comic"
    variants={dropIn}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
      <motion.button 
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {delay: 1}}}
      exit={{opacity: 0, transition: {delay: 1}}}
      whileHover={{scale: 1.1, backgroundColor: 'black', color: 'white'}}
      className="close-modal" onClick={toggle}>CLOSE</motion.button>
      {children}
    </motion.div>
    </Backdrop>
  );
};

export default Modal;
