'use client';
import { ParallaxProvider } from 'react-scroll-parallax';
import { AdvancedBannerTop } from './AdvancedBanner';
import './styles.css';

export default function App() {
  return (
    <ParallaxProvider>
      <AdvancedBannerTop />
    </ParallaxProvider>
  );
}
