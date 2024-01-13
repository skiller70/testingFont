import Image from "next/image";
import React, { useRef } from "react";

import styles from "./Language.module.scss";
import { motion, useInView } from "framer-motion";

type LanguageProps = {
  brandColor: string;
  category: "html-css" | "js" | "cms" | "other";
  icon: string;
  title: string;
  animationProps: { scale: number; opacity: number; x: number; y: number };
};

export default function Language({
  brandColor,
  category,
  icon,
  title,
  animationProps,
}: LanguageProps) {
  // ANIMATION *****************************************************************
  const animation1 = useRef(null);
  const isInView1 = useInView(animation1, { once: true });
  const { scale, opacity, x, y } = animationProps;
  return (
    <motion.div
      className={`flex mb-5 ${styles.wrapper}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={isInView1 ? { scale, opacity, x, y } : {}}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
      ref={animation1}
    >
      <div
        aria-label={title}
        className={`relative w-full px-4 ${styles.language}`}
        data-category={category}
      >
        <div className="my-4">
          <div
            className={`flex relative items-center justify-center rounded-full mx-auto overflow-hidden ${styles.circle}`}
          >
            <span
              className={`absolute top-0 left-0 rounded-full ${styles.background}`}
              style={{ backgroundColor: `${brandColor}` }}
            />
            <Image
              alt=""
              className="relative"
              height={100}
              loading="lazy"
              src={icon}
              width={100}
            />
          </div>
          <div className={`flex justify-center text-center ${styles.label}`}>
            <span
              className={`block relative w-fit py-1.5 px-4 font-light z-10 ${styles.text}`}
              style={{ backgroundColor: `${brandColor}` }}
            >
              {title}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
