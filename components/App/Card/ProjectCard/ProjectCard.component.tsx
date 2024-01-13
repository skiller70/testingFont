"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { CodeBracketIcon } from "@heroicons/react/24/solid";
import { EyeIcon } from "@heroicons/react/24/solid";

import ModalCard from "../ModalCard/ModalCard.component";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import styles from "./ProjectCard.module.scss";

type ProjectCardProps = {
  backgroundText: string;
  brandColor: string;
  coverImage: string;
  futureUseText?: string;
  github?: {
    display: boolean;
    url: string;
  };
  skills?: string[];
  text: string;
  title: string;
  website: {
    display: boolean;
    url: string;
  };
};

export default function ProjectCard({
  backgroundText,
  brandColor,
  coverImage,
  futureUseText,
  github,
  skills,
  text,
  title,
  website,
}: ProjectCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );

  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );
  const handleMouseMove = (e: any) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative px-3.5 ${styles.card}`}
    >
      <div
        className="mb-7"
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className={`block rounded-t-lg py-2.5 px-4 text-center uppercase font-medium ${styles.header}`}
          style={{
            backgroundColor: `${brandColor}`,
          }}
        >
          {title}
        </div>
        <div className="relative">
          <Image
            alt=""
            height={500}
            loading="lazy"
            src={coverImage}
            width={767}
          />
          <div
            className={`absolute top-0 w-full h-full z-10 ${styles.overlay}`}
          />
          <div
            className={`flex absolute items-center justify-center top-0 w-full h-full px-4 z-10 ${styles.details}`}
          >
            <p
              className={`text-center z-20 ${styles.copy}`}
              style={{
                transform: "translateZ(75px)",
              }}
            >
              {text}
            </p>
            <span className={`block w-0 h-px mt-2.5 ${styles.line}`} />
          </div>
        </div>
        <div
          className="flex justify-between py-2.5 border-b border-solid"
          style={{
            borderColor: `${brandColor}`,
          }}
        >
          <div className="flex justify-between w-full">
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button
                  className={`uppercase p-2.5 rounded-lg ${styles.button}`}
                  style={{ color: `${brandColor}` }}
                >
                  Project Info
                </button>
              </Dialog.Trigger>
              <ModalCard
                backgroundText={backgroundText}
                futureUseText={futureUseText}
                modalLink={website.url}
                modalTitle={title}
                skills={skills}
              />
            </Dialog.Root>
            <div className="flex">
              {github && github.url && (
                <Link
                  aria-label="Github project profile page"
                  className={styles.iconLink}
                  href={github.url}
                  rel="noopener"
                  target="_blank"
                >
                  <CodeBracketIcon
                    className="w-8 h-8"
                    style={{ fill: `${brandColor}` }}
                  />
                </Link>
              )}
              {website && website.url && (
                <Link
                  aria-label={`${title} page URL`}
                  className={styles.iconLink}
                  href={website.url}
                  rel="noopener"
                  target="_blank"
                >
                  <EyeIcon
                    className="w-8 h-8"
                    style={{ fill: `${brandColor}` }}
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
