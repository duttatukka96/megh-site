"use client";

import { useState } from "react";

const pages = [
  {
    number: "01",
    title: "where it started",
    text: "one of those ordinary moments that somehow became ours.",
    image: "/photo-01.jpg",
    layout: "hero-photo",
  },
  {
    number: "02",
    title: "us, being idiots",
    text: "and honestly, I wouldn't have it any other way.",
    image: "/photo-02.jpg",
    layout: "tilted",
  },
  {
    number: "03",
    title: "no faces, just us",
    text: "some memories don't need to show everything.",
    image: "/photo-03.jpg",
    layout: "wide",
  },
  {
    number: "04",
    title: "you, in your own little world",
    text: "I think this is what happiness looks like.",
    image: "/photo-04.jpg",
    layout: "cinematic",
  },
  {
    number: "05",
    title: "a quiet little moment",
    text: "I think I could stay here for a while.",
    image: "/photo-05.jpg",
    layout: "soft",
  },
  {
    number: "06",
    title: "somewhere between ordinary days",
    text: "you made even this feel like a memory worth keeping.",
    image: "/photo-06.jpg",
    layout: "book",
  },
  {
    number: "07",
    title: "just us",
    text: "nothing fancy. nothing to explain.",
    image: "/photo-07.jpg",
    layout: "simple",
  },
  {
    number: "08",
    title: "us, in pieces",
    text: "and somehow, all of them feel like home.",
    image: "/photo-08.jpg",
    layout: "final",
  },
];

export default function Home() {
  const [page, setPage] = useState(-1);

  const next = () => {
    setPage((current) => Math.min(current + 1, pages.length - 1));
  };

  const restart = () => {
    setPage(-1);
  };

  if (page === -1) {
    return (
      <main className="story opening">
        <div className="opening-inner">
          <p className="kicker">a little archive</p>

          <h1>for Megh.</h1>

          <p className="opening-subtitle">
            eight little pieces of us.
          </p>

          <button className="next-button" onClick={next}>
            begin <span>→</span>
          </button>
        </div>
      </main>
    );
  }

  const current = pages[page];

  return (
    <main
      className={`story ${current.layout}`}
      key={current.number}
    >
      <div className="topline">
        <span>{current.number}</span>
        <span>of 08</span>
      </div>

      <div className="photo-wrap">
        <img
          src={current.image}
          alt="A memory of us"
        />
      </div>

      <div className="caption">
        <p className="kicker">
          {current.number} / {current.title}
        </p>

        <p className="caption-text">
          {current.text}
        </p>
      </div>

      <div className="controls">
        {page < pages.length - 1 ? (
          <button
            className="next-button"
            onClick={next}
          >
            next <span>→</span>
          </button>
        ) : (
          <button
            className="next-button"
            onClick={restart}
          >
            again <span>↺</span>
          </button>
        )}
      </div>
    </main>
  );
}
