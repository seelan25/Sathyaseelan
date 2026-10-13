import { useEffect, useState } from "react";

const PHRASES = ["Full Stack Developer", "Web Developer", "Java Developer"];

export default function TypingText({ className = "typing" }) {
  const [text, setText] = useState("");

  useEffect(() => {
    let cancelled = false;
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timerId;

    const tick = () => {
      if (cancelled) return;

      const phrase = PHRASES[phraseIndex];

      if (!deleting) {
        charIndex += 1;
        setText(phrase.slice(0, charIndex));
        if (charIndex === phrase.length) {
          deleting = true;
          timerId = setTimeout(tick, 1400);
          return;
        }
        timerId = setTimeout(tick, 100);
        return;
      }

      charIndex -= 1;
      setText(phrase.slice(0, Math.max(charIndex, 0)));
      if (charIndex <= 0) {
        deleting = false;
        charIndex = 0;
        phraseIndex = (phraseIndex + 1) % PHRASES.length;
        timerId = setTimeout(tick, 400);
        return;
      }
      timerId = setTimeout(tick, 60);
    };

    timerId = setTimeout(tick, 300);

    return () => {
      cancelled = true;
      clearTimeout(timerId);
    };
  }, []);

  return (
    <span className={className}>
      {text}
      <span className="typed-cursor" aria-hidden="true">
        |
      </span>
    </span>
  );
}
