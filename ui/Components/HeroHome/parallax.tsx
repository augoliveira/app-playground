"use client";
import { ParallaxProvider } from "react-scroll-parallax";

import MainHome from "../MainHome";
import { AdvancedBannerTop } from "./AdvancedBanner";

import "./styles.css";

export default function App() {
  return (
    <ParallaxProvider>
      <AdvancedBannerTop />
      <div className="">
        <MainHome className="headline gray" />
      </div>
    </ParallaxProvider>
  );
}
