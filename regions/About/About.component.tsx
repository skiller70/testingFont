"use client";

import Image from "next/image";
import React, { useRef } from "react";

import useTotalExperience from "@/hooks/useTotalExperience";

import { LightBulbIcon } from "@heroicons/react/24/solid";

import Badge from "@/components/App/Badge/Badge.component";
import Container from "@/components/App/Container/Container.component";
import HeadingDivider from "@/components/App/HeadingDivider/HeadingDivider.component";
import Section from "@/components/App/Section/Section.component";
import { motion, useInView } from "framer-motion";
import styles from "./About.module.scss";

export default function About() {
  const years = useTotalExperience();
  // ANIMATION 0
  const animation0 = useRef(null);
  const isInView0 = useInView(animation0, { once: true });

  // ANIMATION 1
  const animation1 = useRef(null);
  const isInView1 = useInView(animation1, { once: true });

  // ANIMATION 2
  const animation2 = useRef(null);
  const isInView2 = useInView(animation2, { once: true });

  // ANIMATION 3

  const animation3 = useRef(null);
  const isInView3 = useInView(animation3, { once: true });

  // ANIMATION 4

  const animation4 = useRef(null);
  const isInView4 = useInView(animation4, { once: true });

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={isInView1 ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
      ref={animation1}
    >
      <Section
        dataPosition="about"
        sectionClassName={`pt-12 ${styles.wrapper}`}
      >
        {" "}
        <HeadingDivider
          dividerLineBg="secondary"
          icon={<LightBulbIcon />}
          title="About Myself"
        />
        <Container containerClassName={styles.containerWrapper}>
          {/* ANIMATION 1 */}
          <div className={styles.left}>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={isInView1 ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.6 }}
              ref={animation1}
            >
              <p>
                People also know me as{" "}
                <span className={`font-bold ${styles.highlighted}`}>RONNY</span>
                .
              </p>
              <p>
                <span className={`font-bold ${styles.highlighted}`}>
                  labor omnia vincit
                </span>{" "}
                is latin phrase written which means{" "}
                <span>hardwork conquers all</span> which I truly believe and
                follow in every day to day activities.
              </p>
            </motion.div>
            {/* ANIMATION 2 */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={isInView2 ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.4, ease: "easeInOut", delay: 0.8 }}
              ref={animation2}
            >
              <p>
                This has helped me build my repertoire and progress as{" "}
                <span className={`font-bold ${styles.highlighted}`}>
                  Front End Web Developer
                </span>
                .
              </p>
              <p>
                By gaining{" "}
                <span className={`font-bold ${styles.highlighted}`}>
                  over {years}+ years
                </span>{" "}
                commercial experience I have always shown to be a enthusiastic
                Developer with the eagerness to improve my current skillset, as
                well as going outside my comfort zone and finding creative
                solutions to any problems.
              </p>
            </motion.div>
          </div>
          <div className={styles.right}>
            {/* ANIMATION 3 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView3 ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 1.1, ease: "easeInOut" }}
              ref={animation3}
            >
              <Badge />
            </motion.div>

            {/* ANIMATION 4 */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={isInView4 ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.4, ease: "easeInOut", delay: 0.6 }}
              ref={animation4}
            >
              <Image
                alt="Rejaur Rahman"
                height={458}
                loading="lazy"
                src="https://loremflickr.com/592/458"
                width={592}
              />
            </motion.div>
          </div>
        </Container>
      </Section>
    </motion.div>
  );
}
