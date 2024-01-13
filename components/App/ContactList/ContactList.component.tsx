"use client";
import Image from "next/image";
import React, { useRef } from "react";

import styles from "@/regions/Contact/Contact.module.scss";
import { motion, useInView } from "framer-motion";

type ContactListProps = {
  icon: string;
  text: string;
  animationProps: { scale: number; opacity: number; x: number; y: number };
};

export default function ContactList({
  icon,
  text,
  animationProps,
}: ContactListProps) {
  // ANIMATION
  const animation1 = useRef(null);
  const isInView1 = useInView(animation1, { once: true });

  // ANIMATION PROPS
  const { scale, opacity, x, y } = animationProps;

  return (
    // ANIMATION 1

    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={isInView1 ? { scale, opacity, x, y } : {}}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
      ref={animation1}
      className={styles.methodsBlock}
    >
      <div
        className={`flex relative items-center justify-center mx-auto rounded-full ${styles.methodsCircle}`}
      >
        <Image
          alt=""
          className={styles.icon}
          height={44}
          loading="lazy"
          src={icon}
          width={44}
        />
      </div>
      <span className={`block h-1.5 my-5 mx-auto ${styles.methodsSeperator}`} />
      <p className={`font-light text-center ${styles.methodsText}`}>{text}</p>
    </motion.div>
  );
}
