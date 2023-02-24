'use client';
import { ParallaxBanner } from 'react-scroll-parallax';
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types';
import Image from 'next/image';
import Bg from '../../../public/assets/top.jpg';
import { HomeHero } from '../Home';
import styled from 'styled-components';


export const AdvancedBannerTop = () => {
  const background: BannerLayer = {
    children: (
      <Image
        src={Bg}
        fill
        placeholder='blur'
        quality={100}
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
        alt={''}
        />
    ),
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline: BannerLayer = {
    translateY: [0, 70],
    scale: [1, 1.05, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="inset center">
        <HomeHero />
      </div>
    ),
  };

  const foreground: BannerLayer = {
    translateY: [0, 15],
    scale: [1, 1.1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const gradientOverlay: BannerLayer = {
    opacity: [0, 1, 'easeOutCubic'],
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
