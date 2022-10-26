import React from "react";
import "./Styles/About.css";
import { motion } from "framer-motion";

const FD = {
  offScreenFD: {
    opacity: 0,
    x: 0,
  },
  onScreenFD: {
    opacity: 1,
    x: 10,
    transition: {
      delay: 0.5,
      duration: 1,
      type: "spring",
      stiffness: 150,
    },
  },
};
const SD = {
  offScreenSD: {
    opacity: 0,
    x: 0,
  },
  onScreenSD: {
    opacity: 1,
    x: 10,
    transition: {
      delay: 0.5,
      duration: 1,
      type: "spring",
      stiffness: 150,
    },
  },
};
const IcMove = {
  offScreenFD: {
    opacity: 0,
    y: 100,
  },
  onScreenFD: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
      type: "spring",
      stiffness: 150,
    },
  },
};

function About() {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 }, opacity: 0 }}
    >
      <section>
        <div loading="lazy" className="AboutBanner">
          <h1>About Us</h1>
        </div>
        <motion.div
          variants={FD}
          initial="offScreenFD"
          whileInView="onScreenFD"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ staggerChildren: 0.3 }}
          className="First-Dialogue"
        >
          <h1>The World Outside Your Window...</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam sunt,
            nostrum adipisci blanditiis accusamus facilis velit veniam earum eum
            consequatur atque necessitatibus? Illum ipsa cumque expedita dolorum
            corporis tenetur impedit? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sed perferendis quo enim temporibus deserunt ipsum
            harum asperiores, reiciendis facere porro dignissimos neque minus
            quas ab!
          </p>
          <div loading="lazy" className="FirstImage" />
          <div loading="lazy" className="SecondImage" />
        </motion.div>
        <motion.div
          variants={SD}
          initial="offScreenSD"
          whileInView="onScreenSD"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ staggerChildren: 0.3 }}
          className="Second-Dialogue"
        >
          <h1>Our Passion For Marvel Comics</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam sunt,
            nostrum adipisci blanditiis accusamus facilis velit veniam earum eum
            consequatur atque necessitatibus? Illum ipsa cumque expedita dolorum
            corporis tenetur impedit? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sed perferendis quo enim temporibus deserunt ipsum
            harum asperiores, reiciendis facere porro dignissimos neque minus
            quas ab!
          </p>
          <div loading="lazy" className="FourthImage" />
          <div loading="lazy" className="FifthImage" />
        </motion.div>
        <motion.div
          variants={IcMove}
          initial="offScreenFD"
          whileInView="onScreenFD"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ staggerChildren: 0.3 }}
          className="Iconic"
        >
          <p className="Info first">
            Anytime, anywhere, <div>here at Comix</div>{" "}
            <div>Craze we always</div> <div>do our best to deliver</div> the
            best of Marvel™
          </p>
          <div loading="lazy" className="CBook CBook1"></div>
          <p className="Info second">
            Anytime, anywhere, <div>here at Comix</div>{" "}
            <div>Craze we always</div> <div>do our best to deliver</div> the
            best of Marvel™
          </p>
          <div loading="lazy" className="CBook CBook2"></div>
        </motion.div>
      </section>
    </motion.div>
  );
}

export default About;
