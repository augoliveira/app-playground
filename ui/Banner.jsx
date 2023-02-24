'use client';
import { ExternalLink } from '#/ui/ExternalLink';
import addParlx from '#/app/common/addParlx'
import initIsotope from '#/app/common/initIsotope'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'
import Image from 'next/legacy/image'
import baseUrl from '/public/bg-slide2.jpg'



function Banner() {
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
  const [displayImage, setDisplayImage] = useState(true);

  useEffect(() => {
    setDisplayImage(false);
  }, []);


  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          layout="fill"
          src={baseUrl}
          objectFit="cover" alt={''}        />
      </div>


      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">

      </p>
      <div className="flex space-x-3">
      <header
        ref={fixedHeader}
        className="works-header fixed-slider hfixd valign bg-img"
        data-overlay-dark="4"
      >
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
                      <b className="medium-b">O que a </b>
                      <font
                        className="klickart-font"
                        style={{ color: `rgb(255, 255, 255)` }}
                      >
                        <b className="medium-b">UP</b>
                      </font>
                      <b className="medium-b"> faz?</b>
                    </font>
                  </h2>
                  <p>
                    Nós cuidamos do seu futuro, para caminharmos juntos sempre.
                  </p>

                  <Typewriter
                    options={{
                      wrapperclassName: 'color-font fw-900',
                      strings: [
                        'Desenvolvimento de marca',
                        'Comunicação digital',
                        'Grafica e impressos',
                        'Desenvolvimento de sites, landing page',
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                    loop={true}
                    onInit={(typewriter) => {
                      typewriter;
                    }}
                  />
                  <div className="mt-5">
                  <button
                      type="button"
                      onClick={handleClick}
                    >
                      <ExternalLink href="https://wzap.me/121844149042">WhatsApp</ExternalLink>
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


      </div>
      </div>
    </div>
  )
}

export default Banner
