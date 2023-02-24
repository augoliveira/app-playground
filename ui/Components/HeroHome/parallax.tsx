'use client';
import { ParallaxProvider } from 'react-scroll-parallax';
import MainHome from '../MainHome';
import { AdvancedBannerTop } from './AdvancedBanner';
export default function App() {
  return (
    <ParallaxProvider>
      <AdvancedBannerTop />
      <MainHome />
    </ParallaxProvider>
  )
}
