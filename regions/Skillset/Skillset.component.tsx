"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";

import { PaintBrushIcon } from "@heroicons/react/24/solid";

import Container from "@/components/App/Container/Container.component";
import FilterButton from "@/components/App/Language/FilterButton/FilterButton.component";
import HeadingDivider from "@/components/App/HeadingDivider/HeadingDivider.component";
import InnerSection from "@/components/App/InnerSection/InnerSection.component";
import Language from "@/components/App/Language/Language.component";
import Section from "@/components/App/Section/Section.component";
import { motion, useInView } from "framer-motion";

import styles from "./Skillset.module.scss";

export default function Skillset() {
  // ANIMATION 1
  const animation1 = useRef(null);
  const isInView1 = useInView(animation1, { once: true });

  const [activeCategory, setActiveCategory] = useState("all");

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);

    const languageElements = document.querySelectorAll("[data-category]");

    languageElements.forEach((element) => {
      const htmlElement = element as HTMLElement;

      if (
        htmlElement.getAttribute("data-category") === category ||
        category === "all"
      ) {
        htmlElement.style.display = "";
      } else {
        htmlElement.style.display = "none";
      }
    });
  };

  return (
    // ANIMATION 1
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={isInView1 ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
      ref={animation1}
    >
      <Section dataPosition="skillset">
        <HeadingDivider
          background
          dividerLineBg="primary"
          icon={<PaintBrushIcon />}
          title="Technical Palette"
        />
        <InnerSection innerContentClass="relative overflow-hidden">
          <Image
            alt=""
            className={`absolute top-0 left-0 w-full h-full ${styles.background}`}
            height={1080}
            loading="lazy"
            src="https://loremflickr.com/1920/1080"
            width={1920}
          />
          <Container containerClassName="flex items-start flex-wrap justify-center">
            <div
              className={`flex relative justify-center w-full mb-4 ${styles.filter}`}
            >
              <FilterButton
                category="all"
                isActive={activeCategory === "all"}
                label="All"
                setActiveFilter={handleCategoryChange}
              />
              <FilterButton
                category="html-css"
                isActive={activeCategory === "html-css"}
                label="Html/Css"
                setActiveFilter={handleCategoryChange}
              />
              <FilterButton
                category="js"
                isActive={activeCategory === "js"}
                label="JS"
                setActiveFilter={handleCategoryChange}
              />
              <FilterButton
                category="cms"
                isActive={activeCategory === "cms"}
                label="CMS"
                setActiveFilter={handleCategoryChange}
              />
              <FilterButton
                category="other"
                isActive={activeCategory === "other"}
                label="Other"
                setActiveFilter={handleCategoryChange}
              />
            </div>
            <Language
              animationProps={{ scale: 1, opacity: 1, x: 0, y: 0 }}
              brandColor="#075b8a"
              category="js"
              icon="https://loremflickr.com/100/100"
              title="AJAX"
            />
            <Language
              animationProps={{ scale: 1, opacity: 1, x: 0, y: 0 }}
              brandColor="#7952b3"
              category="html-css"
              icon="https://loremflickr.com/100/100"
              title="Bootstrap"
            />
            <Language
              animationProps={{ scale: 1, opacity: 1, x: 0, y: 0 }}
              brandColor="#00947e"
              category="html-css"
              icon="https://loremflickr.com/100/100"
              title="Bulma"
            />
            <Language
              animationProps={{ scale: 1, opacity: 1, x: 0, y: 0 }}
              brandColor="#2965f1"
              category="html-css"
              icon="https://loremflickr.com/100/100"
              title="CSS3"
            />
            <Language
              animationProps={{ scale: 1, opacity: 1, x: 0, y: 0 }}
              brandColor="#002d64"
              category="other"
              icon="https://loremflickr.com/100/100"
              title="Docker"
            />
            <Language
              animationProps={{ scale: 1, opacity: 1, x: 0, y: 0 }}
              brandColor="#074e68"
              category="html-css"
              icon="https://loremflickr.com/100/100"
              title="Foundation"
            />
            <Language
              animationProps={{ scale: 1, opacity: 1, x: 0, y: 0 }}
              brandColor="#11081f"
              category="js"
              icon="https://loremflickr.com/100/100"
              title="Gatsby.JS"
            />
            <Language
              animationProps={{ scale: 1, opacity: 1, x: 0, y: 0 }}
              brandColor="#202020"
              category="other"
              icon="https://loremflickr.com/100/100"
              title="GraphQL"
            />
            <Language
              animationProps={{ scale: 1, opacity: 1, x: 0, y: 0 }}
              brandColor="#e48632"
              category="js"
              icon="https://loremflickr.com/100/100"
              title="Grunt.JS"
            />
            <Language
              animationProps={{ scale: 1, opacity: 1, x: 0, y: 0 }}
              brandColor="#9a2829"
              category="js"
              icon="https://loremflickr.com/100/100"
              title="Gulp.JS"
            />
            <Language
              animationProps={{ scale: 1, opacity: 1, x: 0, y: 0 }}
              brandColor="#ef652a"
              category="html-css"
              icon="https://loremflickr.com/100/100"
              title="HTML5"
            />
            <Language
              animationProps={{ scale: 1, opacity: 1, x: 0, y: 0 }}
              brandColor="#dab92d"
              category="js"
              icon="https://loremflickr.com/100/100"
              title="JavaScript"
            />
            <Language
              animationProps={{ scale: 1, opacity: 1, x: 0, y: 0 }}
              brandColor="#0769ad"
              category="js"
              icon="https://loremflickr.com/100/100"
              title="jQuery"
            />
            <Language
              animationProps={{ scale: 1, opacity: 1, x: 0, y: 0 }}
              brandColor="#00c1d0"
              category="other"
              icon="https://loremflickr.com/100/100"
              title="Kubernetes"
            />
            <Language
              animationProps={{ scale: 1, opacity: 1, x: 0, y: 0 }}
              brandColor="#a8b9c0"
              category="js"
              icon="https://loremflickr.com/100/100"
              title="Next.JS"
            />
            <Language
              animationProps={{ scale: 1, opacity: 1, x: 0, y: 0 }}
              brandColor="#282c34"
              category="js"
              icon="https://loremflickr.com/100/100"
              title="React.JS"
            />
            <Language
              animationProps={{ scale: 1, opacity: 1, x: 0, y: 0 }}
              brandColor="#63c2ba"
              category="html-css"
              icon="https://loremflickr.com/100/100"
              title="Responsive Web Design"
            />
            <Language
              animationProps={{ scale: 1, opacity: 1, x: 0, y: 0 }}
              brandColor="#c03226"
              category="cms"
              icon="https://loremflickr.com/100/100"
              title="Sanity.io"
            />
            <Language
              animationProps={{ scale: 1, opacity: 1, x: 0, y: 0 }}
              brandColor="#bf4080"
              category="html-css"
              icon="https://loremflickr.com/100/100"
              title="SASS"
            />
            <Language
              animationProps={{ scale: 1, opacity: 1, x: 0, y: 0 }}
              brandColor="#db7533"
              category="other"
              icon="https://loremflickr.com/100/100"
              title="SQL"
            />
            <Language
              animationProps={{ scale: 1, opacity: 1, x: 0, y: 0 }}
              brandColor="#271fe0"
              category="cms"
              icon="https://loremflickr.com/100/100"
              title="Strapi.io"
            />
            <Language
              animationProps={{ scale: 1, opacity: 1, x: 0, y: 0 }}
              brandColor="#94dae2"
              category="html-css"
              icon="https://loremflickr.com/100/100"
              title="Tailwind CSS"
            />
            <Language
              animationProps={{ scale: 1, opacity: 1, x: 0, y: 0 }}
              brandColor="#3178c6"
              category="js"
              icon="https://loremflickr.com/100/100"
              title="TypeScript"
            />
            <Language
              animationProps={{ scale: 1, opacity: 1, x: 0, y: 0 }}
              brandColor="#1762a5"
              category="other"
              icon="https://loremflickr.com/100/100"
              title="Webpack"
            />
            <Language
              animationProps={{ scale: 1, opacity: 1, x: 0, y: 0 }}
              brandColor="#0073aa"
              category="cms"
              icon="https://loremflickr.com/100/100"
              title="WordPress"
            />
          </Container>
        </InnerSection>
      </Section>
    </motion.div>
  );
}
