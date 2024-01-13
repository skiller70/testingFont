"use client";
import React, { useRef } from "react";

import { UserGroupIcon } from "@heroicons/react/24/solid";

import HeadingDivider from "@/components/App/HeadingDivider/HeadingDivider.component";
import Section from "@/components/App/Section/Section.component";
import SocialBox from "@/components/App/SocialBox/SocialBox.component";

import styles from "./FollowMe.module.scss";
import { motion, useInView } from "framer-motion";

export default function FollowMe() {
  // ANIMATION 1
  const animation1 = useRef(null);
  const isInView1 = useInView(animation1, { once: true });

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={isInView1 ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
      ref={animation1}
    >
      <Section dataPosition="follow">
        <HeadingDivider
          background
          dividerLineBg="primary"
          icon={<UserGroupIcon />}
          title="Follow Me or My Work"
        />
        <div className={styles.wrapper}>
          <SocialBox
            imageUrl="https://loremflickr.com/50/50"
            primaryColor="#6cc644"
            secondaryColor="#333"
            title="Github"
            url="https://github.com/RejaurRahman"
          />

          <SocialBox
            imageUrl="https://loremflickr.com/50/50"
            primaryColor="#0a66c2"
            secondaryColor="#f0b6a8"
            title="Linkedin"
            url="https://www.linkedin.com/in/rejaur-rahman-a938a657"
          />
        </div>
      </Section>
    </motion.div>
  );
}
