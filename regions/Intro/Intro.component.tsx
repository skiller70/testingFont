"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import Container from "@/components/App/Container/Container.component";
import Header from "@/components/App/Layout/Header/Header.component";
import IntroShapeBottom from "./IntroShapeBottom/IntroShapeBottom.component";
import Section from "@/components/App/Section/Section.component";

import styles from "./Intro.module.scss";
import { motion, useInView, useAnimate } from "framer-motion";

export default function Intro() {
  // ANIMATION 0
  const animation0 = useRef(null);
  const isInView0 = useInView(animation0, { once: true });

  // ANIMATION 1
  const animation1 = useRef(null);
  const isInView1 = useInView(animation1, { once: true });

  // ANIMATION 2
  const animation2 = useRef(null);
  const isInView2 = useInView(animation1, { once: true });

  const [text] = useTypewriter({
    delaySpeed: 2000,
    loop: true,
    words: [
      "front-end web developer",
      "magician in my spare time",
      "part-time cook at home",
    ],
  });

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={isInView2 ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
      ref={animation2}
    >
      <Section dataPosition="home" sectionClassName={`flex ${styles.wrapper}`}>
        <div
          className={`relative w-full overflow-hidden ${styles.introBg}`}
          style={{
            backgroundColor: "#393341",
          }}
        >
          <div className={styles.contentWrapper}>
            <Container containerClassName={styles.containerWrapper}>
              <div className={`relative z-10 text-center ${styles.text}`}>
                ,{/* ANIMATION 1 */}
                <motion.div
                  initial={{ x: 200, opacity: 0 }}
                  animate={isInView1 ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
                  ref={animation1}
                >
                  <h1 className={styles.heading}>Rejaur Rahman</h1>
                </motion.div>
                {/* 
              ANIMATION 2 */}
                <motion.div
                  initial={{ x: -200, opacity: 0 }}
                  animate={isInView2 ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
                  ref={animation2}
                >
                  <h2 className={`${styles.subheading} font-sans `}>
                    I live and breathe being a
                    <span className={styles.textWrapper}>
                      <span className={styles.subheadingText}>{text}</span>
                      <Cursor cursorColor="#d8137d" />
                    </span>
                  </h2>
                </motion.div>
              </div>
            </Container>
          </div>
          <Image
            alt=""
            className={`relative block top-0 left-0 my-0 mx-auto ${styles.introImage}`}
            height={950}
            priority
            src="https://loremflickr.com/950/916"
            width={916}
          />
          <div
            className={`absolute w-full h-full top-0 left-0 ${styles.overlay}`}
          />
          <div className={`absolute rotate-180 ${styles.shape}`}>
            <IntroShapeBottom />
          </div>
        </div>
        <Header />
      </Section>
    </motion.div>
  );
}
