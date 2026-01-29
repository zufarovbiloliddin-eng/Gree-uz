import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

const SplitText = ({
  text,
  className = "",
  delay = 50,
  duration = 1.25,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  tag = "p",
  onLetterAnimationComplete,
}) => {
  const ref = useRef(null);
  const completed = useRef(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => setFontsLoaded(true));
  }, []);

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded || completed.current) return;

      const split = new GSAPSplitText(ref.current, {
        type: splitType,
        charsClass: "split-char",
        wordsClass: "split-word",
        linesClass: "split-line",
      });

      const targets =
        split.chars?.length
          ? split.chars
          : split.words?.length
          ? split.words
          : split.lines;

      gsap.fromTo(
        targets,
        { ...from },
        {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          scrollTrigger: {
            trigger: ref.current,
            start: `top ${(1 - threshold) * 100}% ${rootMargin}`,
            once: true,
          },
          onComplete: () => {
            completed.current = true;
            onLetterAnimationComplete?.();
          },
        }
      );

      return () => {
        split.revert();
      };
    },
    { dependencies: [text, fontsLoaded] }
  );

  const Tag = tag;

  return (
    <Tag
      ref={ref}
      style={{ textAlign }}
      className={`overflow-hidden inline-block ${className}`}
    >
      {text}
    </Tag>
  );
};

export default SplitText;