/* eslint-disable @next/next/no-img-element */
'use client';
import { useRouter } from 'next/navigation';
import addParlx from '#/app/common/addParlx'
import initIsotope from '#/app/common/initIsotope'
import MainHome from '#/ui/Components/MainHome'
import Image from 'next/image'
import bg from "/public/assets/bg-slide2.jpg"
import dynamic from 'next/dynamic'
import styled from "styled-components";
import Link from 'next/link'
import React from 'react'

const Wrapper = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: fixed;
  justify-content: center;
  align-items: center;
  display: flex;
`

const BackgroundImage = dynamic(
  () => import('#/ui/Components/BG/BackgroundImage'),
  {
    ssr: false
  }
)

import Typewriter from 'typewriter-effect'


const Demos = () => {
  const router = useRouter();
  const handleClick = () => {
    fbq.event('Purchase', { currency: 'USD', value: 10 })
  }
  const fixedHeader = React.useRef(null)
  const MainContent = React.useRef(null)

  React.useEffect(() => {
    setInterval(() => {
      if (fixedHeader.current) {
        var slidHeight = fixedHeader.current.offsetHeight
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + 'px'
      }
    }, 1000)
  }, [fixedHeader, MainContent])
  const [pageLoaded, setPageLoaded] = React.useState(false)
  React.useEffect(() => {
    setPageLoaded(true)
    if (pageLoaded) {
      setTimeout(() => {
        initIsotope()
      }, 1000)
      addParlx()
      document.querySelector('body').style.backgroundColor = '#181b21'
    }
  }, [pageLoaded])

  return (
    <>
      <header
        ref={fixedHeader}
        className="works-header fixed-slider hfixd valign bg-img1"
        data-overlay-dark="5"
      >
        <Image
          src={bg}
          alt="Picture of the author"
          fill
          placeholder="blur"
          blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
        quality={100}
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-11 static">
              <div className="capt mt-50">
                <div className="parlx">
                  <h2
                    className="cta-5-title"
                    style={{ fontFamily: `Montserrat, sans-serif` }}
                  >
                    <font
                      className="klickart-font"
                      style={{ color: `#251867` }}
                    >
                      <b className="medium-b">AGÈNCIA </b>
                      <font
                        className="klickart-font"
                        style={{ color: `rgb(255, 255, 255)` }}
                      >
                        <b className="medium-b">UP</b>
                      </font>
                      <b className="medium-b"> EXPERT</b>
                    </font>
                  </h2>
                  <Typewriter
                    options={{
                      wrapperClassName: 'color-font fw-900',
                      strings: [
                        'Desenvolvimento de marca',
                        'Comunicação digital',
                        'Grafica e impressos',
                        'Desenvolvimento de sites, landing page'
                      ],
                      autoStart: true,
                      loop: true
                    }}
                    loop={true}
                    onInit={(typewriter) => {
                      typewriter
                    }}
                  />
                  <div className="mt-5">
                  <button type="button" onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
                    <button className="primary__btn">
                      <Link href="#">Fale conosco</Link>
                    </button>

                    <button
                      className="secondary__btn"
                      type="button"
                      onClick={handleClick}
                    >
                      <Link href="https://wzap.me/121844149042">WhatsApp</Link>
                    </button>
                  </div>
                </div>
                <div className="bactxt custom-font valign">
                  <span className="full-width" style={{ color: 'transparent' }}>
                    UP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="main-content" ref={MainContent}>
          <MainHome />
      </div>
    </>
  )
}

export default Demos
