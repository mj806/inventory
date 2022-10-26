import React, { useState, useEffect } from "react";
import "./Styles/Home.css";
import Marquee from "react-fast-marquee";
import { motion, AnimateSharedLayout } from "framer-motion";

const cardMotion = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
  },
};
const bounceTransition = {
  y: {
    duration: 1.7,
    yoyo: Infinity,
  },
};

const Reveal = {
  offScreen: {
    opacity: 0,
    y: 100,
  },
  onScreen: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.7,
      duration: 0.7,
      type: "spring",
      stiffness: 90,
    },
  },
};

function Home() {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 }, opacity: 0 }}
    >
      <section className="Home-Intro">
        <div className="Title1">
          <span className="AN top">All</span>
          <Marquee
            gradient={false}
            direction="right"
            speed={200}
            className="marq"
          >
            <div className="MC">Marvel Comics</div>
          </Marquee>
          <span className="AN bottom">New</span>
        </div>
      </section>
      <motion.section
        className="Intro-Expln"
        initial="offScreen"
        whileInView="onScreen"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ staggerChildren: 0.4 }}
      >
        <div className="Info-cat">
          <motion.h1 variants={Reveal}>
            Step Inside Into The World Outside Your Window...
          </motion.h1>
          <motion.p variants={Reveal} className="IP P1">
            Explore through all the different eras of Marvel™ and{" "}
            <div>
              reread the greatest hits ever foretold by the legends in the
              business
            </div>{" "}
            <div
              loading="lazy"
              transition={bounceTransition}
              animate={{
                y: ["10%", "-10%"],
              }}
              className="IPic1"
            />
            <div
              loading="lazy"
              transition={bounceTransition}
              animate={{
                y: ["10%", "-10%"],
              }}
              className="IPic2"
            />
          </motion.p>
          <motion.div
            transition={bounceTransition}
            animate={{
              y: ["10%", "-10%"],
            }}
            loading="lazy"
            className="IPic3"
          />
          <motion.p variants={Reveal} className="IP P2">
            Marvel at the colorful, spandex dazzling artwork stroked across
            <div>
              thousands of pages and books that's been illustrated by none other
              than
            </div>{" "}
            the Romitas, Kirby, Ross, Mcfarlene, Bagley, Campbell, Byrne, Perez
            <div>and so much more...</div>
            <div
              loading="lazy"
              transition={bounceTransition}
              animate={{
                y: ["10%", "-10%"],
              }}
              className="IPic4"
            />
          </motion.p>
          <div loading="lazy" className="IPic5"></div>
          <motion.p variants={Reveal} className="IP P3">
            Swing into action with some of the most iconic characters that's
            flown{" "}
            <div>
              into the world of fiction with characters like Spider-Man, The
              X-Men, Iron-Man,
            </div>{" "}
            Avengers, and the rest of our stupendously spectacular superheroes!
          </motion.p>
        </div>
      </motion.section>
      <section className="Outro-Expln">
        <div className="shuffle">
          <div className="Rec books"></div>
          <Marquee
            direction="right"
            gradient={false}
            speed={400}
            className="card"
          >
            <img loading="lazy" className="card1"></img>
            <img loading="lazy" className="card2"></img>
            <img loading="lazy" className="card3"></img>
            <img loading="lazy" className="card4"></img>
            <img loading="lazy" className="card7"></img>
            <img loading="lazy" className="card8"></img>
            <img loading="lazy" className="card9"></img>
            <img loading="lazy" className="card12"></img>
          </Marquee>
          <Marquee
            direction="right"
            gradient={false}
            speed={400}
            className="card"
          >
            <img loading="lazy" className="card5"></img>
            <img loading="lazy" className="card6"></img>
            <img loading="lazy" className="card7"></img>
            <img loading="lazy" className="card8"></img>
            <img loading="lazy" className="card2"></img>
            <img loading="lazy" className="card3"></img>
            <img loading="lazy" className="card10"></img>
            <img loading="lazy" className="card11"></img>
          </Marquee>
          <Marquee
            direction="right"
            gradient={false}
            speed={400}
            className="card"
          >
            <img loading="lazy" className="card9"></img>
            <img loading="lazy" className="card10"></img>
            <img loading="lazy" className="card11"></img>
            <img loading="lazy" className="card12"></img>
            <img loading="lazy" className="card1"></img>
            <img loading="lazy" className="card2"></img>
            <img loading="lazy" className="card5"></img>
            <img loading="lazy" className="card6"></img>
          </Marquee>
          <AnimateSharedLayout>
            <motion.div
              className="Rec books"
              transition={bounceTransition}
              animate={{
                y: ["10%", "-10%"],
              }}
            >
              <motion.div
                className="Book Book1"
                initial="rest"
                whileHover="hover"
                variants={cardMotion}
              ></motion.div>
              <motion.div
                className="Book Book2"
                initial="rest"
                whileHover="hover"
                variants={cardMotion}
              ></motion.div>
              <motion.div
                className="Book Book3"
                initial="rest"
                whileHover="hover"
                variants={cardMotion}
              ></motion.div>
              <motion.div
                className="Book Book4"
                initial="rest"
                whileHover="hover"
                variants={cardMotion}
              ></motion.div>
              <motion.p
                animate={{ textShadow: "0px 0px 10px rgb(255, 255, 255" }}
                transition={{ duration: 1, yoyo: Infinity }}
              >
                Check out our recommended!
              </motion.p>
            </motion.div>
          </AnimateSharedLayout>
        </div>
      </section>
    </motion.div>
  );
}

export default Home;
