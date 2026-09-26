"use client";

import { useEffect, useRef, useState } from "react";

const littleThings = [
  "the way you make ordinary days feel less ordinary.",
  "your tiny expressions that you probably don't even notice.",
  "the softness you carry without trying.",
  "how somehow, even your silence feels familiar.",
  "the version of you that appears when you're genuinely happy.",
];

const memories = [
  {
    number: "01",
    title: "Somewhere, it started.",
    text: "Not with some grand cinematic moment. Just little conversations, ordinary days, and somehow you becoming important.",
  },
  {
    number: "02",
    title: "Then you became familiar.",
    text: "Your name started feeling different. Seeing it could change the mood of an entire day.",
  },
  {
    number: "03",
    title: "And then… you.",
    text: "At some point I stopped wondering why I cared so much. I just did.",
  },
];

const words = [
  "soft",
  "chaotic",
  "beautiful",
  "stubborn",
  "warm",
  "unforgettable",
];

export default function Home() {
  const sections = useRef<Array<HTMLElement | null>>([]);
  const things = useRef<HTMLElement | null>(null);
  const memoriesSection = useRef<HTMLElement | null>(null);

  const [showThings, setShowThings] = useState(false);
  const [showMemories, setShowMemories] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.target === things.current &&
            entry.isIntersecting
          ) {
            setShowThings(true);
          }

          if (
            entry.target === memoriesSection.current &&
            entry.isIntersecting
          ) {
            setShowMemories(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (things.current) observer.observe(things.current);
    if (memoriesSection.current) {
      observer.observe(memoriesSection.current);
    }

    return () => observer.disconnect();
  }, []);

  const goTo = (index: number) => {
    sections.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const next = (index: number) => {
    goTo(Math.min(index + 1, 6));
  };

  return (
    <main>

      {/* PAGE 1 */}
      <section
        className="page hero"
        ref={(el) => {
          sections.current[0] = el;
        }}
      >
        <div className="hero-content">
          <p className="tiny-label">
            a little corner of the internet
          </p>

          <h1>For Megh.</h1>

          <p className="hero-subtitle">
            just because you exist.
          </p>

          <button
            className="next-button hero-next"
            onClick={() => next(0)}
          >
            keep going ↓
          </button>
        </div>
      </section>

      {/* PAGE 2 */}
      <section
        className="page you"
        ref={(el) => {
          sections.current[1] = el;
        }}
      >
        <div className="section-inner">
          <p className="eyebrow">YOU</p>

          <h2>
            I don't think you realise
            <br />
            how much you mean to me.
          </h2>

          <p className="body">
            Somewhere between all the ordinary days,
            you became one of my favourite parts of life.
          </p>
        </div>

        <button
          className="next-button page-next"
          onClick={() => next(1)}
        >
          next →
        </button>
      </section>

      {/* PAGE 3 */}
      <section
        className={`page little-things ${
          showThings ? "visible" : ""
        }`}
        ref={(el) => {
          sections.current[2] = el;
          things.current = el;
        }}
      >
        <div className="section-inner">
          <p className="eyebrow">THE LITTLE THINGS</p>

          <h2 className="section-title">
            It's never really
            <br />
            the big things.
          </h2>

          <div className="things-list">
            {littleThings.map((thing, index) => (
              <p
                key={thing}
                style={{
                  transitionDelay: `${index * 120}ms`,
                }}
              >
                <span>0{index + 1}</span>
                {thing}
              </p>
            ))}
          </div>
        </div>

        <button
          className="next-button page-next"
          onClick={() => next(2)}
        >
          next →
        </button>
      </section>

      {/* PAGE 4 */}
      <section
        className="page words"
        ref={(el) => {
          sections.current[3] = el;
        }}
      >
        <div className="section-inner">
          <p className="eyebrow">
            IF I HAD TO DESCRIBE YOU
          </p>

          <div className="word-cloud">
            {words.map((word, index) => (
              <span
                key={word}
                className={`word word-${index + 1}`}
              >
                {word}
              </span>
            ))}
          </div>
        </div>

        <button
          className="next-button page-next"
          onClick={() => next(3)}
        >
          next →
        </button>
      </section>

      {/* PAGE 5 */}
      <section
        className={`page memories ${
          showMemories ? "visible" : ""
        }`}
        ref={(el) => {
          sections.current[4] = el;
          memoriesSection.current = el;
        }}
      >
        <div className="section-inner">
          <p className="eyebrow">US</p>

          <h2 className="section-title">
            A few things
            <br />
            I don't want to forget.
          </h2>

          <div className="memory-list">
            {memories.map((memory, index) => (
              <article
                className="memory"
                key={memory.number}
                style={{
                  transitionDelay: `${index * 180}ms`,
                }}
              >
                <span className="memory-number">
                  {memory.number}
                </span>

                <div>
                  <h3>{memory.title}</h3>
                  <p>{memory.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <button
          className="next-button page-next"
          onClick={() => next(4)}
        >
          next →
        </button>
      </section>

      {/* PAGE 6 */}
      <section
        className="page art"
        ref={(el) => {
          sections.current[5] = el;
        }}
      >
        <div className="section-inner">
          <p className="eyebrow">
            A LITTLE SKETCHBOOK
          </p>

          <h2 className="section-title">
            Because sometimes
            <br />
            words aren't enough.
          </h2>

          <div className="art-card">
            <div className="art-placeholder">
              <span>your little world</span>
            </div>

            <p>
              Some things are easier to draw than explain.
            </p>
          </div>
        </div>

        <button
          className="next-button page-next"
          onClick={() => next(5)}
        >
          next →
        </button>
      </section>

      {/* PAGE 7 */}
      <section
        className="page final"
        ref={(el) => {
          sections.current[6] = el;
        }}
      >
        <div className="final-content">
          <p className="eyebrow">AND FINALLY</p>

          <h2>
            I'm really glad
            <br />
            you're here.
          </h2>

          <p>
            That's it.
            <br />
            No occasion. No reason.
            <br />
            Just you.
          </p>

          <div className="heart">♡</div>

          <span className="signature">
            — always
          </span>
        </div>

        <button
          className="next-button page-next restart"
          onClick={() => goTo(0)}
        >
          again ↑
        </button>
      </section>

    </main>
  );
}
