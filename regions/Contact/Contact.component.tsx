"use client";
import Image from "next/image";
import React, { useRef } from "react";

import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";

import ContactList from "@/components/App/ContactList/ContactList.component";
import Container from "@/components/App/Container/Container.component";
import Form from "@/components/App/Form/Form.component";
import HeadingDivider from "@/components/App/HeadingDivider/HeadingDivider.component";
import Section from "@/components/App/Section/Section.component";
import { motion, useInView } from "framer-motion";
import styles from "./Contact.module.scss";

export default function Contact() {
  // ANIMATION 1
  const animation1 = useRef(null);
  const isInView1 = useInView(animation1, { once: true });

  // ANIMATION 2
  const animation2 = useRef(null);
  const isInView2 = useInView(animation1, { once: true });

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={isInView1 ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
      ref={animation1}
    >
      <Section
        dataPosition="contact"
        sectionClassName={`py-12 ${styles.wrapper}`}
      >
        <HeadingDivider
          dividerLineBg="tertiary"
          icon={<ChatBubbleOvalLeftEllipsisIcon />}
          title="Get In Touch"
        />
        <Container containerClassName={`flex items-center ${styles.container}`}>
          <Form />

          <div className="flex flex-wrap items-center">
            <div className={`relative px-4 ${styles.left}`}>
              <p className={`text-center font-light ${styles.subCopy}`}>
                Other ways to contact me are mentioned below:
              </p>
              <div className={`flex ${styles.methods}`}>
                <ContactList
                  animationProps={{ scale: 1, opacity: 1, x: 0, y: 0 }}
                  icon="https://loremflickr.com/44/44"
                  text="rejaur-rahman@hotmail.co.uk"
                />
                <ContactList
                  animationProps={{ scale: 1, opacity: 1, x: 0, y: 0 }}
                  icon="https://loremflickr.com/44/44"
                  text="Contact me via email or Linkedin to get my mobile number"
                />
                <ContactList
                  animationProps={{ scale: 1, opacity: 1, x: 0, y: 0 }}
                  icon="https://loremflickr.com/44/44"
                  text="Based in Enfield Island Village, London ... Shown on this section"
                />
              </div>
            </div>
            {/* ANIMATION 2 */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={isInView2 ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.7 }}
              ref={animation2}
              className={`relative px-4 ${styles.right}`}
            >
              <div className={`relative mx-auto ${styles.imageWrapper}`}>
                <Image
                  alt=""
                  className="relative z-10"
                  height={532}
                  loading="lazy"
                  src="https://loremflickr.com/1280/532"
                  width={1280}
                />
                <div className={`absolute w-full h-full ${styles.shadow}`} />
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </motion.div>
  );
}
