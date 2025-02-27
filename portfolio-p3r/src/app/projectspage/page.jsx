"use client";

import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { useEffect } from "react";
import "../globals.css";     // Import common styles (adjust path as needed)
import "./project.css";  // Import projects-specific styles

export default function ProjectsPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap) {
      window.gsap.registerPlugin();

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

    const toggleEffectsBtn = document.getElementById("toggle-effects");
    function disableFancyEffects() {
      document.body.classList.add("fancy-effects-disabled");
      if (window.$) {
        window.$("*").stop(true);
      }
      if (window.gsap) {
        window.gsap.globalTimeline.pause();
      }
    }
    function enableFancyEffects() {
      document.body.classList.remove("fancy-effects-disabled");
      if (window.$) {
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
        <link rel="shortcut icon" href="/Media/favicon.ico" type="image/x-icon" />
        <title>Projects Page</title>
      </Head>

      <div className="projects-page-container">
        <img
          id="foam"
          src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479923/Oceanfoam_zbqh3h.png"
          alt="Foam"
          className="foam"
        />
        <img
          id="gradient-overlay"
          src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479923/imagegradient_z1bpcf.png"
          alt="Gradient Overlay"
          className="gradient-overlay"
        />
        <img
          id="page-wide-overlay"
          src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479911/omgitsmept3_mpqp5r.png"
          alt="Page Wide Decorative"
        />
        <img
          id="purple-thing-overlay"
          src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479909/coolpurplethings_yfogve.png"
          alt="Purple shattered things"
        />
        <img
          id="select-overlay"
          src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479916/selectoverlay_ueqegr.png"
          alt="Select Text"
        />
        <img
          id="list-text"
          src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479910/List_ouhgcj.svg"
          alt="List text"
        />

        <Link href="/" id="back-to-home">
          Back
        </Link>

        <div id="projects-container">
          <a
            href="https://derpnerdd.github.io/tictactoe/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479913/projecttab1_ibba1a.png"
              alt="Project 1"
              className="project-item"
            />
          </a>
          <a
            href="https://derpnerdd.github.io/SinglePageJava/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479913/projecttab2_eyvbiy.png"
              alt="Project 2"
              className="project-item"
            />
          </a>
          <a
            href="https://derpnerdd.github.io/fblacodingandprogramming/HTML/login.html"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479914/projecttab3_rk6iri.png"
              alt="Project 3"
              className="project-item"
            />
          </a>
          <a
            href="https://derpnerdd.github.io/memorycardgame/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479914/projecttab4_fmqjjy.png"
              alt="Project 4"
              className="project-item"
            />
          </a>
          <a
            href="https://derpnerdd.github.io/ResponsiveGalleryPage/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479914/projecttab5_r6vwig.png"
              alt="Project 5"
              className="project-item"
            />
          </a>
          <a
            href="https://derpnerdd.github.io/fblawebcodingdevelopmentproj/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479914/projecttab6_tpyjjz.png"
              alt="Project 6"
              className="project-item"
            />
          </a>
          <a
            href="https://derpnerdd.github.io/ChristmasWebsite/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479915/projecttab7_bi1dkz.png"
              alt="Project 7"
              className="project-item"
            />
          </a>
          <a
            href="https://derpnerdd.github.io/businesswebsitept1/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479915/projecttab8_ipqxo8.png"
              alt="Project 8"
              className="project-item"
            />
          </a>
          <a
            href="https://derpnerdd.github.io/endofunitproject/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479916/projecttab9_pc8a4c.png"
              alt="Project 9"
              className="project-item"
            />
          </a>
          <a
            href="https://github.com/DerpNerdd/firstwebpage"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479913/projecttab10_oybyik.png"
              alt="Project 10"
              className="project-item"
            />
          </a>
          <a
            href="https://derpnerdd.github.io/fblacodingandprogrammingstate/public/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479913/projecttab11_zlqrrb.png"
              alt="Project 11"
              className="project-item"
            />
          </a>
          <a
            href="https://derpnerdd.github.io/hangmandesign/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dmrevelyc/image/upload/v1740692686/projecttab12_rbtuq0.png"
              alt="Project 12"
              className="project-item"
            />
          </a>
          <a
            href="https://derpnerdd.github.io/jquery-maze-game/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dmrevelyc/image/upload/v1740692686/projecttab13_knm0vt.png"
              alt="Project 13"
              className="project-item"
            />
          </a>
          <a
            href="https://derpnerdd.github.io/wbsummersite/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dmrevelyc/image/upload/v1740692686/projecttab14_bcqa5r.png"
              alt="Project 14"
              className="project-item"
            />
          </a>
          <a
            href="https://github.com/DerpNerdd/SecretOldManJenkins"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dmrevelyc/image/upload/v1740692686/projecttab15_sj37ia.png"
              alt="Project 15"
              className="project-item"
            />
          </a>
          <a
            href="https://github.com/DerpNerdd/MyAPI"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dmrevelyc/image/upload/v1740692687/projecttab16_k6hnmt.png"
              alt="Project 16"
              className="project-item"
            />
          </a>
          <a
            href="https://github.com/DerpNerdd/eventsejs"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dmrevelyc/image/upload/v1740692687/projecttab17_c8mdv3.png"
              alt="Project 17"
              className="project-item"
            />
          </a>
          <a
            href="https://pet-adoption-webservice.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dmrevelyc/image/upload/v1740692687/projecttab18_ahxg0p.png"
              alt="Project 18"
              className="project-item"
            />
          </a>
          <a
            href="https://reactquizizz.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dmrevelyc/image/upload/v1740692688/projecttab19_iwrzia.png"
              alt="Project 19"
              className="project-item"
            />
          </a>
          <a
            href="https://react-decipher-app.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dmrevelyc/image/upload/v1740692686/projecttab20_kx2vtx.png"
              alt="Project 20"
              className="project-item"
            />
          </a>
          <a
            href="https://github.com/DerpNerdd/fbla-mad-cordova"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dmrevelyc/image/upload/v1740692685/projecttab21_ldpftj.png"
              alt="Project 21"
              className="project-item"
            />
          </a>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479911/projecttab_rkqmez.png"
              alt="Blank Project"
              className="project-item"
            />
          </a>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479911/projecttab_rkqmez.png"
              alt="Blank Project"
              className="project-item"
            />
          </a>
        </div>
      </div>

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
