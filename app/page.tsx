"use client";

import { useState } from "react";

const pages = [
  {
    number: "01",
    title: "where it started",
    text: "one of those ordinary moments that somehow became ours.",
    image: "/photo-01.jpg",
    style: "one",
  },
  {
    number: "02",
    title: "us, being idiots",
    text: "and honestly, I wouldn't have it any other way.",
    image: "/photo-02.jpg",
    style: "two",
  },
  {
    number: "03",
    title: "no faces, just us",
    text: "some memories don't need to show everything.",
    image: "/photo-03.jpg",
    style: "three",
  },
  {
    number: "04",
    title: "you, in your own little world",
    text: "I think this is what happiness looks like.",
    image: "/photo-04.jpg",
    style: "four",
  },
  {
    number: "05",
    title: "a quiet little moment",
    text: "I think I could stay here for a while.",
    image: "/photo-05.jpg",
    style: "five",
  },
  {
    number: "06",
    title: "somewhere between ordinary days",
    text: "you made even this feel like a memory worth keeping.",
    image: "/photo-06.jpg",
    style: "six",
  },
  {
    number: "07",
    title: "just us",
    text: "nothing fancy. nothing to explain.",
    image: "/photo-07.jpg",
    style: "seven",
  },
  {
    number: "08",
    title: "us, in pieces",
    text: "and somehow, all of them feel like home.",
    image: "/photo-08.jpg",
    style: "eight",
  },
];

const littleThings = [
  "I like your laugh.",
  "I like the way you get excited about little things.",
  "I'm proud of you. More than I probably say.",
  "You make ordinary days feel a little less ordinary.",
  "I really like having you around.",
  "Sometimes I just look at you and think, how did I get this lucky?",
];

export default function Home() {
  const [page, setPage] = useState(-1);
  const [thingsOpen, setThingsOpen] = useState(false);
  const [thing, setThing] = useState(0);
  const [heartLoved, setHeartLoved] = useState(false);

  /* OPENING */

  if (page === -1) {
    return (
      <main className="story opening">
        <div className="opening-inner">
          <p className="kicker">a little archive</p>

          <h1>for Megh.</h1>

          <p className="opening-subtitle">
            eight little pieces of us.
          </p>

          <button
            className="next-button"
            onClick={() => setPage(0)}
          >
            begin <span>→</span>
          </button>
        </div>
      </main>
    );
  }

  /* THINGS I NEVER SAY ENOUGH */

  if (page === 8) {
    return (
      <main className="story things-page">
        <div className="things-inner">
          <p className="kicker">a little more</p>

          <h2>things I never say enough</h2>

          <p className="things-intro">
            tap the little card.
          </p>

          <button
            className={`thing-card ${
              thingsOpen ? "is-open" : ""
            }`}
            onClick={() => setThingsOpen(true)}
          >
            {!thingsOpen ? (
              <>
                <span className="thing-number">
                  01 / 06
                </span>

                <span className="thing-cover">
                  there is something
                  <br />
                  I should probably
                  <br />
                  tell you.
                </span>

                <span className="thing-open">
                  open →
                </span>
              </>
            ) : (
              <>
                <span className="thing-number">
                  {String(thing + 1).padStart(2, "0")} / 06
                </span>

                <span className="thing-message">
                  {littleThings[thing]}
                </span>

                <span
                  className="thing-next"
                  onClick={(event) => {
                    event.stopPropagation();

                    if (thing < littleThings.length - 1) {
                      setThing(thing + 1);
                    } else {
                      setPage(9);
                    }
                  }}
                >
                  {thing < littleThings.length - 1
                    ? "next little thing →"
                    : "one last thing →"}
                </span>
              </>
            )}
          </button>
        </div>
      </main>
    );
  }

  /* FINAL PAGE */

  if (page === 9) {
    return (
      <main className="story things-final">
        <div className="things-final-inner">
          <p className="kicker">
            okay, one last thing
          </p>

          <h2>
            I could keep going.
          </h2>

          <p>
            But you'd probably start getting embarrassed.
          </p>
        </div>

        <button
          className={`tiny-heart ${
            heartLoved ? "loved" : ""
          }`}
          onClick={() => setHeartLoved(true)}
          aria-label="tap the heart"
        >
          {heartLoved ? "♥" : "♡"}
        </button>
      </main>
    );
  }

  /* PHOTO STORY */

  const current = pages[page];

  return (
    <main className={`story page-${current.style}`}>
      <div className="page-number">
        <span>{current.number}</span>
        <span>08</span>
      </div>

      <section className="photo-section">
        <img
          src={current.image}
          alt="A memory of us"
        />
      </section>

      <section className="writing-section">
        <p className="kicker">
          {current.number} / {current.title}
        </p>

        <p className="caption-text">
          {current.text}
        </p>

        <button
          className="next-button"
          onClick={() =>
            setPage(
              page === pages.length - 1
                ? 8
                : page + 1
            )
          }
        >
          {page === pages.length - 1
            ? "one more thing"
            : "next"}

          <span>→</span>
        </button>
      </section>
    </main>
  );
}
