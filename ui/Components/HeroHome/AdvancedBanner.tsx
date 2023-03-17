"use client";

import Image from "next/image";
import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";

import Bg from "#/public/bgweb.jpg";
import Web from "#/public/web.png";

import Home from "../Home";

export const AdvancedBannerTop = () => {
  const background: BannerLayer = {
    children: (
      <Image
        src={Bg}
        placeholder="blur"
        quality={100}
        sizes="100vw"
        fill
        style={{
          objectFit: "cover",
        }}
        alt={""}
      />
    ),
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="inset center">
        <Home />
      </div>
    ),
  };

  const foreground: BannerLayer = {
    translateY: [0, 15],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const gradientOverlay: BannerLayer = {
    opacity: [0, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="gradient inset" />,
  };

  return (
    <ParallaxBanner
      layers={[background, headline, foreground, gradientOverlay]}
      className="full"
    />
  );
};
