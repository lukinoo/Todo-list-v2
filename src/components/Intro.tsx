import React, { useEffect, useRef } from "react";
import { StyledIntro } from "./styledComponents/Intro.styled";
import { gsap } from "gsap";

const Intro = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const hideElRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.to(hideElRef.current, 0.5, { y: 0 });
  }, []);

  const introPlayHandler = () => {
    gsap.to(divRef.current, 0.7, { y: "-100%", delay: 0.2 });
  };

  return (
    <StyledIntro className="intro" ref={divRef}>
      <div className="intro-text">
        <h2 className="text">
          <span ref={hideElRef}>Keep track of daily tasks in life.</span>
        </h2>
      </div>
      <button className="intro-start-button" onClick={introPlayHandler}>
        Get started
      </button>
    </StyledIntro>
  );
};

export default Intro;
