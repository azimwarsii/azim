import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NavBar({ sectionRefs }) {
  const navBar = useRef(null);
  const logo = useRef(null);
  const cta = useRef(null);
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  useEffect(() => {
    tl.to(navBar.current, {
      y: 0,
      duration: 3,
      delay: 0.5,
      ease: "power4.inOut",
    });
  });


  useEffect(() => {
    sectionRefs.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 375px",
        end: "bottom 300px",
        // markers: true,
        animation: gsap
          .timeline()
          .to(navBar.current, { color: "#DDDDD5" })
          .to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C" }, 0)
          .to(".bg-secondary-100", { backgroundColor: "#0E0E0C" }, 0),

        toggleActions: "restart reverse restart reverse",
      });
    });

  });

  return (
    <header
      ref={navBar}
      className="fixed top-0 z-50 flex w-full -translate-y-full items-center justify-between bg-secondary-100 px-5 py-3"
    >
      {/* logo */}
      <a href="#hero" aria-label="Logo" className="z-50">
        <svg
          ref={logo}
          width="80"
          height="45"
          viewBox="0 0 121 45"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 86.573 20.777 L 86.573 36.157 L 78.736 36.157 L 78.736 20.777 Q 78.541 17.334 75.782 17.237 L 75.343 17.237 A 3.108 3.108 0 0 0 73.903 17.602 Q 72.646 18.309 72.416 20.37 A 8.963 8.963 0 0 0 72.364 21.363 L 72.364 36.157 L 64.552 36.157 L 64.552 21.363 Q 64.552 10.742 75.343 10.156 L 75.782 10.156 Q 79.111 10.346 81.414 11.473 A 9.405 9.405 0 0 1 82.667 12.207 A 10.126 10.126 0 0 1 85.451 10.857 Q 86.684 10.465 88.148 10.281 A 20.317 20.317 0 0 1 89.527 10.156 L 89.967 10.156 A 15.988 15.988 0 0 1 94.367 10.96 Q 99.26 12.667 100.407 17.858 A 16.265 16.265 0 0 1 100.758 21.363 L 100.758 36.157 L 92.945 36.157 L 92.945 21.363 Q 92.945 17.334 89.967 17.237 L 89.527 17.237 A 3.19 3.19 0 0 0 88.178 17.556 Q 86.713 18.302 86.573 20.777 Z M 53.565 11.133 L 42.945 29.077 L 53.907 29.077 L 52.027 36.133 L 29.859 36.133 L 40.894 17.676 L 31.861 17.676 L 33.424 11.133 L 53.565 11.133 Z M 20.875 35.401 L 20.875 36.133 L 28.614 36.206 L 28.638 23.487 Q 28.638 20.63 27.491 18.164 Q 26.368 15.772 24.317 13.916 A 13.624 13.624 0 0 0 19.891 11.195 A 15.472 15.472 0 0 0 19.727 11.133 A 15.487 15.487 0 0 0 14.307 10.156 A 15.021 15.021 0 0 0 8.887 11.157 Q 6.275 12.11 4.298 13.916 Q 2.296 15.723 1.148 18.164 Q 0.001 20.63 0.001 23.487 A 12.42 12.42 0 0 0 1.978 30.347 A 13.87 13.87 0 0 0 7.252 35.132 Q 10.572 36.865 14.307 36.865 A 14.894 14.894 0 0 0 19.727 35.864 A 5.85 5.85 0 0 0 19.936 35.79 Q 20.271 35.664 20.817 35.426 A 40.384 40.384 0 0 0 20.875 35.401 Z M 55.177 11.182 L 62.965 11.157 L 62.965 36.182 L 55.177 36.182 L 55.177 11.182 Z M 11.109 18.042 A 6.677 6.677 0 0 0 8.692 20.337 A 5.814 5.814 0 0 0 7.789 23.487 A 5.94 5.94 0 0 0 8.308 25.967 A 6.459 6.459 0 0 0 9.742 27.954 A 6.364 6.364 0 0 0 14.307 29.81 Q 16.969 29.81 18.897 27.954 A 7.76 7.76 0 0 0 19.017 27.836 A 5.964 5.964 0 0 0 20.85 23.487 A 5.814 5.814 0 0 0 19.947 20.337 A 6.677 6.677 0 0 0 17.53 18.042 A 6.511 6.511 0 0 0 14.307 17.212 Q 12.623 17.212 11.109 18.042 Z M 62.831 5.271 A 4.348 4.348 0 0 0 62.989 4.077 A 4.019 4.019 0 0 0 62.452 2.027 A 4.146 4.146 0 0 0 60.987 0.537 A 4.019 4.019 0 0 0 58.936 0 A 4.61 4.61 0 0 0 58.792 0.002 A 3.856 3.856 0 0 0 56.91 0.537 A 4.193 4.193 0 0 0 56.478 0.832 A 4.448 4.448 0 0 0 55.421 2.027 Q 54.884 2.954 54.884 4.077 Q 54.884 5.176 55.445 6.153 A 4.143 4.143 0 0 0 56.91 7.642 A 3.75 3.75 0 0 0 57.528 7.937 A 4.032 4.032 0 0 0 58.936 8.179 A 3.885 3.885 0 0 0 60.987 7.617 A 4.208 4.208 0 0 0 62.452 6.153 A 3.693 3.693 0 0 0 62.831 5.271 Z" />
          {/* <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M113.5 1.5H111V6.50001H113.5C112.119 6.50001 111 7.61931 111 9.00001V11.5H116V9.00001C116 10.3807 117.119 11.5 118.5 11.5H121V6.50001H118.5C119.881 6.50001 121 5.38072 121 4V1.5H116V4C116 2.61929 114.881 1.5 113.5 1.5ZM116 6.50001H113.5C114.881 6.50001 116 7.61931 116 9.00001V6.50001ZM116 6.50001V4C116 5.38072 117.119 6.50001 118.5 6.50001H116Z"
          /> */}
        </svg>
      </a>
      <nav className=" space-x-7 font-grotesk text-body-3 sm:block">
        <a href="#about" className="group relative hidden md:inline-block">
          <span>about</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#services" className="group relative hidden md:inline-block">
          <span>services</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#works" className="group relative hidden md:inline-block">
          <span>projects</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a
          ref={cta}
          className="button group relative hover:bg-transparent"
          href="#contact"
        >
          <span className="relative w-fit">
            <span className="absolute bottom-2 h-[0.15em] w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full"></span>
            <span>Let&apos;s Talk.</span>
          </span>
        </a>
      </nav>
    </header>
  );
}
