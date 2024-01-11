import React from "react";
import localFont from "@next/font/local";
import type { Metadata } from "next";

import metaImage from "@/assets/images/rejaur-ronny-rahman.png";

import "./globals.css";

const sketchBold = localFont({
  src: "../assets/fonts/SketchBlock-Bold.woff2",
  style: "normal",
  weight: "500",
  variable: "--font-sketch",
});

const Figtree = localFont({
  src: [
    {
      path: "../assets/fonts/Figtree-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Figtree-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-figtree",
});

// const Figtree = localFont({
//   src: [
//     { path: "../assets/fonts/Figtree-Light.woff2", weight: "300" }, // Adjust weight as needed
//   ],
// });

// const FigtreeRegular = localFont({
//   src: [
//     { path: "../assets/fonts/Figtree-Regular.woff2", weight: "400" }, // Adjust weight as needed
//   ],
// });

const Ubuntu = localFont({
  src: [
    {
      path: "../assets/fonts/Ubuntu-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Ubuntu-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],

  variable: "--font-ubuntu",
});

// const UbuntuBold = localFont({
//   src: "../assets/fonts/Ubuntu-Bold.woff2",
//   variable: "--font-Ubuntu",
//   weight: "400",
// });

const Sothardjo = localFont({
  src: [
    { path: "../assets/fonts/Sothardjo.woff2", weight: "300" },
    // Adjust weight as needed
  ],
  variable: "--font-sothardjo",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rejaurrahman.co.uk"),
  title: "Rejaur Rahman | Front End Developer",
  description:
    "I am Rejaur Rahman. You can call me Ronny. I am a Front End Web Developer with loads of commercial experience working in London.",
  alternates: {
    canonical: "https://rejaurrahman.co.uk",
  },
  openGraph: {
    title: "Rejaur Rahman | Front End Developer",
    description:
      "I am Rejaur Rahman. You can call me Ronny. I am a Front End Web Developer with loads of commercial experience working in London.",
    images: `/${metaImage.src}`,
    url: "https://rejaurrahman.co.uk",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`scroll-smooth ${sketchBold.variable} ${Figtree.variable} ${Ubuntu.variable} ${Sothardjo.variable} `}
      lang="en"
      style={{ scrollBehavior: "smooth" }}
    >
      <body>{children}</body>
    </html>
  );
}
