"use client";

import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
import { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gsap) {
      window.gsap.to('#full-page-image', {
        y: '1.9%',
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      })

      // Register any needed GSAP plugins.
      window.gsap.registerPlugin()

      // Define the wave animation for the foam.
      function waveAnimation() {
        const tl = window.gsap.timeline({ repeat: -1, yoyo: true })
        tl.to('#foam', {
          duration: 4,
          ease: 'sine.inOut',
          scale: 1.05,
          skewX: 5,
          transformOrigin: 'center bottom',
        })
        return tl
      }
      const masterTimeline = window.gsap.timeline()
      masterTimeline.add(waveAnimation())
    }

  }, [])

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/public/favicon.ico" type="image/x-icon" />
        <title>Portfolio Page</title>
      </Head>

      <div className="relative h-screen overflow-hidden bg-[#203363]">
        {/* Background and overlay images */}
        <img
          id="foam"
          src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479923/Oceanfoam_zbqh3h.png"
          alt="Foam"
          className="w-full absolute top-0 left-0"
          style={{ maxHeight: '50%' }}
        />
        <img
          id="gradient-overlay"
          src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479923/imagegradient_z1bpcf.png"
          alt="Gradient Overlay"
          className="fixed top-0 left-0 w-full h-full z-9"
        />
        <img
          id="left-overlay-image"
          src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479921/01Port_pa23rd.png"
          alt="Left Overlay"
          className="fixed top-0 left-0 h-full z-15 pointer-events-none"
        />
        <img
        id="bottom-right-image"
        src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479922/bottomhomemenu_zfyqxp.svg"
        alt="Interactive Element"
        className="fixed z-20"
        style={{ bottom: '0', right: '0', width: '100px' }} // Adjust width/height as needed
      />

        <img
          id="full-page-image"
          src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479924/omgitsme_jkd8zu.svg"
          alt="Full Page Decorative"
          className="fixed top-[-2%] left-[-3%] w-[48vw] h-[105vh] z-9 pointer-events-none object-cover"
        />



        {/* Menu */}
        <div id="menu" className="fixed top-[55%] left-[55%] transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="menu-link" id="home-link">
            <Link href="/Homepage">
              <>
                <img src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479923/Home_bveu10.svg" alt="Home" className="max-w-[55%]" />
                <div className="hover-background">
                  <img src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479923/Hover_erpqfy.png" alt="Hover Background" />
                </div>
              </>
            </Link>
          </div>
          <div className="menu-link" id="projects-link">
            <Link href="/projectspage">
              <>
                <img src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479924/Projects_xtqxdr.svg" alt="Projects" className="max-w-[55%]" />
                <div className="hover-background">
                  <img src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479923/Hover_erpqfy.png" alt="Hover Background" />
                </div>
              </>
            </Link>
          </div>
          <div className="menu-link" id="skills-link">
            <Link href="/skillspage">
              <>
                <img src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479924/Skills_mr5q1u.svg" alt="Skills" className="max-w-[55%]" />
                <div className="hover-background">
                  <img src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479923/Hover_erpqfy.png" alt="Hover Background" />
                </div>
              </>
            </Link>
          </div>
        </div>
      </div>

      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/jquery.ripples/dist/jquery.ripples-min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
        strategy="beforeInteractive"
      />
    </>
  )
}
