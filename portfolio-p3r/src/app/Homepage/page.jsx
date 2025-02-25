"use client";

import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { useEffect } from "react";
import "./home.css"; // Import your external CSS

export default function InfoPage() {
  useEffect(() => {
    // ---------------------------
    // Foam and Full-Page Image Animation
    // ---------------------------
    if (typeof window !== "undefined" && window.gsap) {
      // Animate the full-page image (if present)
      window.gsap.to("#full-page-image", {
        y: "1.9%",
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      // Register GSAP plugins (if needed)
      window.gsap.registerPlugin();

      // Define the foam wave animation
      function waveAnimation() {
        const tl = window.gsap.timeline({ repeat: -1, yoyo: true });
        tl.to("#foam", {
          duration: 4,
          ease: "sine.inOut",
          scale: 1.05,
          skewX: 5,
          transformOrigin: "center bottom",
        });
        return tl;
      }
      const masterTimeline = window.gsap.timeline();
      masterTimeline.add(waveAnimation());
    }

    // ---------------------------
    // Info Text Scrollbar Functionality
    // ---------------------------
    const content = document.getElementById("info-text-content");
    const thumb = document.getElementById("info-text-thumb");
    const scrollbar = document.getElementById("info-text-scrollbar");

    function updateThumb() {
      const contentHeight = content.scrollHeight;
      const visibleHeight = content.clientHeight;
      const scrollableHeight = contentHeight - visibleHeight;
      const thumbHeight =
        (visibleHeight / contentHeight) * scrollbar.offsetHeight;
      const thumbPosition =
        (content.scrollTop / scrollableHeight) *
        (scrollbar.offsetHeight - thumbHeight);
      thumb.style.height = `${thumbHeight}px`;
      thumb.style.transform = `translateY(${thumbPosition}px) skewY(-20deg)`;
    }

    if (content && thumb && scrollbar) {
      updateThumb();
      content.addEventListener("scroll", updateThumb);

      let isDragging = false;
      thumb.addEventListener("mousedown", (e) => {
        isDragging = true;
        e.preventDefault();
      });
      document.addEventListener("mousemove", (e) => {
        if (isDragging) {
          const deltaY = e.movementY;
          const contentHeight = content.scrollHeight;
          const visibleHeight = content.clientHeight;
          const thumbPercentage =
            deltaY / (scrollbar.offsetHeight - thumb.offsetHeight);
          content.scrollTop += thumbPercentage * (contentHeight - visibleHeight);
          updateThumb();
        }
      });
      document.addEventListener("mouseup", () => {
        isDragging = false;
      });

      function onScrollWheel(e) {
        const delta = e.deltaY;
        content.scrollTop += delta;
        updateThumb();
      }
      document
        .getElementById("info-text-container")
        .addEventListener("wheel", onScrollWheel);
    }

    // ---------------------------
    // Toggle Fancy Effects
    // ---------------------------
    const toggleEffectsBtn = document.getElementById("toggle-effects");
    function disableFancyEffects() {
      document.body.classList.add("fancy-effects-disabled");
      if (window.$) {
        window.$("*").stop(true);
        window.$("canvas").css("display", "none");
      }
      if (window.gsap) {
        window.gsap.globalTimeline.pause();
      }
    }
    function enableFancyEffects() {
      document.body.classList.remove("fancy-effects-disabled");
      if (window.$) {
        window.$("canvas").css("display", "block");
      }
      if (window.gsap) {
        window.gsap.globalTimeline.resume();
      }
    }
    if (toggleEffectsBtn) {
      if (localStorage.getItem("fancyEffects") === "disabled") {
        disableFancyEffects();
      }
      toggleEffectsBtn.addEventListener("click", () => {
        if (document.body.classList.contains("fancy-effects-disabled")) {
          enableFancyEffects();
          localStorage.setItem("fancyEffects", "enabled");
        } else {
          disableFancyEffects();
          localStorage.setItem("fancyEffects", "disabled");
        }
      });
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href="/Media/favicon.ico"
          type="image/x-icon"
        />
        <title>Information Page</title>
      </Head>
      <div className="info-page-container">
        {/* Background and overlay images */}
        <img
          id="foam"
          src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479923/Oceanfoam_zbqh3h.png"
          alt="Foam"
          className="foam"
        />
        <img
          id="number-overlay"
          src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479908/02PageOverlay_loeo7a.svg"
          alt="Number 02 Overlay"
        />
        <img
          id="left-overlay-image"
          src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479908/HomeSideOverlay_egs5pf.svg"
          alt="Left Overlay"
        />
        <img
          id="full-page-decorative-top"
          src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479909/omgitsmept2_q1ytln.svg"
          alt="Full Page Decorative Top"
        />
        <img
          id="information-box"
          src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479908/InformationBox_wjakxi.png"
          alt="Information Box"
        />
        <img
          id="Avatar-Information"
          src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479907/AvatarOverlay_vlpaye.png"
          alt="Avatar Information"
        />
        <img
          id="Cool-Blue-Thingy"
          src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479907/CoolBlueThingy_mybwgd.svg"
          alt="Cool Blue Thingy"
        />
        <img
          id="page-wide-overlay"
          src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479908/mebutwhite_hsr2f5.svg"
          alt="Page Wide Decorative"
        />
        <img
          id="gradient-overlay"
          src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479923/imagegradient_z1bpcf.png"
          alt="Gradient Overlay"
          className="gradient-overlay"
        />

        {/* Info Text Container */}
        <div id="info-text-container">
          <div id="info-text-content">
            <p>
              Hello!! Welcome to my portfolio page. My name is Alan Sanchez, a
              young programmer and artist with a love for rhythm and RPG games.
              Im a Junior at Mountain Ridge High School, and a first year in
              West-MEC Northeast Campus in the coding class. I started coding
              when I was around 8-9, the same time I got my first dinky laptop.
              Ever since then, Ive always had a passion for programming and to
              one day work at a video-game company, like Valve! Along with my
              passion to program and tinker with electronics, I also started to
              grow a passion for art! My older brother used to draw little comics
              when I was younger, and thanks to other friends helping me out, I
              started improving and focusing my art skills, which this page is
              littered with. I wanted this portfolio to get the same look as the
              Persona 3 Reload menu UI, which I am a huge fan of. Like mentioned
              before, I have a love for rhythm games, I'd say I'm pretty good at
              them. Same with FPS and RPG games! One fact I always like to share
              is that I am pretty young for my position, being both one of the
              youngest juniors in my school and the youngest first year in my
              class, but I won't let that stop me. Feel free to look around, and
              thank you for visiting my portfolio. &lt;3
            </p>
          </div>
        </div>
        <div id="info-text-scrollbar">
          <div id="info-text-thumb"></div>
        </div>

        {/* Back to Home Link */}
        <Link href="/" id="back-to-home">
          Back
        </Link>

        {/* Toggle Effects Button */}
      </div>

      {/* External Scripts */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
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
  );
}
