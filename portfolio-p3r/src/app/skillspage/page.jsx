"use client";

import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { useEffect } from "react";
import "../globals.css";    
import "./skills.css";   

export default function SkillsPage() {
  useEffect(() => {

    if (typeof window !== "undefined" && window.gsap) {
      window.gsap.to("#foam", {
        y: "1.9%",
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    }


    function animateText(textSelector) {
      var text = document.querySelector(textSelector);
      if (!text || !window.SplitText) return;
      var splitText = new window.SplitText(text, { type: "chars" });
      var chars = splitText.chars;
      window.gsap.set(chars, { visibility: "visible" });
      window.gsap.from(chars, {
        opacity: 0,
        x: 10,
        stagger: 0.05,
        ease: "power1.inOut",
      });
    }
    document.querySelectorAll(".skill-item").forEach(function (item) {
      item.addEventListener("mouseenter", function () {
        animateText(".skill-text");
      });
    });

    const modal = document.getElementById("resumeModal");
    const resumeImg = document.getElementById("skillstemplate8");
    const closeSpan = document.getElementsByClassName("close")[0];
    if (resumeImg && modal) {
      resumeImg.onclick = function () {
        modal.style.display = "block";
      };
    }
    if (closeSpan && modal) {
      closeSpan.onclick = function () {
        modal.style.display = "none";
      };
    }
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };


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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <link
          rel="shortcut icon"
          href="/Media/favicon.ico"
          type="image/x-icon"
        />
        <title>Skills Page</title>
      </Head>
      <div className="skills-page-container">
        <img
          id="foam"
          src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479923/Oceanfoam_zbqh3h.png"
          alt="Foam"
          style={{ width: "100%", position: "absolute", top: 0, left: 0 }}
        />
        <img
          id="gradient-overlay"
          src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479923/imagegradient_z1bpcf.png"
          alt="Gradient Overlay"
        />
        <img
          id="page-wide-overlay"
          src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479917/omgitsmept4_xml5yu.png"
          alt="Page Wide Decorative"
        />
        <img
          id="select-overlay"
          src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479918/selecttext_lq0qci.png"
          alt="Select Text"
        />
        <img
          id="Avatar-Information"
          src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479917/itsmebutthin_sd2c86.png"
          alt="Avatar Information"
        />
        <img
          id="purple-thing-overlay"
          src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479917/glassshards_g3130t.png"
          alt="Purple shattered things"
        />
        <img
          id="titletemplate"
          src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479921/languagestitle_iehmj6.png"
          alt="Languages Title"
        />
        <img
          id="titletemplate2"
          src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479921/skillstitle_fvidkj.png"
          alt="Skills Title"
        />
        <img
          id="titletemplate3"
          src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479921/portfoliotitle_c6jmfo.png"
          alt="Portfolio Title"
        />

        <Link href="/" id="back-to-home">
          Back
        </Link>

        <img
          id="plus"
          src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479917/plus_zwr3hx.png"
          alt="plus"
        />

        {/* Skill Items */}
        <div className="skill-item" id="skillstemplate">
          <img
            src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479919/htmlskills_q7bjqf.png"
            alt="Skill"
            className="skill-image"
          />
          <span className="skill-text">
            Extensive knowledge of HTML
          </span>
        </div>
        <div className="skill-item" id="skillstemplate2">
          <img
            src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479919/cssskills_lvawxa.png"
            alt="Skill"
            className="skill-image"
          />
          <span className="skill-text">
            Extensive knowledge of CSS
          </span>
        </div>
        <div className="skill-item" id="skillstemplate3">
          <img
            src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479920/jsskills_ndhtns.png"
            alt="Skill"
            className="skill-image"
          />
          <span className="skill-text">
            Extensive knowledge of JS
          </span>
        </div>
        <div className="skill-item" id="skillstemplate4">
          <img
            src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479920/pythonskills_pqggm6.png"
            alt="Skill"
            className="skill-image"
          />
          <span className="skill-text">
            Some knowledge of Python
          </span>
        </div>
        <div className="skill-item" id="skillstemplate5">
          <img
            src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479920/otherskills_hcd8fv.png"
            alt="Skill"
            className="skill-image"
          />
          <span className="skill-text">
            Little knowledge in Ruby, SQL, and Lua
          </span>
        </div>
        <div className="skill-item" id="skillstemplate6">
          <img
            src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479918/artskills_qi9ktk.png"
            alt="Skill"
            className="skill-image"
          />
          <span className="skill-text">
            Extensive skill in Art and Graphic Design
          </span>
        </div>
        <div className="skill-item" id="skillstemplate7">
          <img
            src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479919/blenderskills_ch6lim.png"
            alt="Skill"
            className="skill-image"
          />
          <span className="skill-text">
            Some knowledge and skill in Blender modeling
          </span>
        </div>
        <div className="skill-item" id="skillstemplate8">
          <img
            src="https://res.cloudinary.com/dmrevelyc/image/upload/v1739479921/resumeskills_uv9v54.png"
            alt="Skill"
            className="skill-image"
          />
          <span className="skill-text">
            Click to view my Resume!
          </span>
        </div>

        <div id="resumeModal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <iframe
            id="resumeFrame"
            src="/AlanSanchezResume.pdf"
            style={{ width: "100%", height: "100%" }}
          ></iframe>
          </div>
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
