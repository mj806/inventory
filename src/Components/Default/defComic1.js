import React from "react";
import "../Styles/ComicsPage.css";
import { motion } from "framer-motion";
import Modal from "../Modals/Modal";
import useModal from "../Modals/useModal";

export const Comic = ({ data }) => {
  const [isShowing, toggle] = useModal();
  return (
    <>
      {data
        ? data.map((item) => {
            return (
              <div>
                <div className="comic-div">
                  <motion.div whileHover={{ scale: 1.1 }} className="comic">
                    <img
                      src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                      alt=""
                    />
                  </motion.div>
                  <p className="comic-text">
                    There is no information regarding the comic available from
                    the API.
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="Infobutton"
                  onClick={toggle}
                >
                  More Info1
                </motion.button>
                <hr className="linebreak" />
                <Modal isShowing={isShowing} toggle={toggle}>
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 1 } }}
                    exit={{ opacity: 0, transition: { delay: 1 } }}
                  >
                    Not Available
                  </motion.h2>
                  <div className="modal-container">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { delay: 0.8 } }}
                      exit={{ opacity: 0, transition: { delay: 1 } }}
                      className="modal-comic"
                    />
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { delay: 1 } }}
                      exit={{ opacity: 0, transition: { delay: 1 } }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis laboriosam soluta eum, at nam architecto.
                    </motion.p>
                  </div>
                </Modal>
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Comic;
