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

export default function Home() {
  const [page, setPage] = useState(-1);

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
                ? -1
                : page + 1
            )
          }
        >
          {page === pages.length - 1 ? "again" : "next"}
          <span>
            {page === pages.length - 1 ? "↺" : "→"}
          </span>
        </button>
      </section>
    </main>
  );
}
