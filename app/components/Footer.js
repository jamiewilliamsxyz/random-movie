"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full text-neutral-300 mt-10 pb-2 pr-3 text-right">
      <p>
        Project made by{" "}
        <Link
          href="https://github.com/jamiewilliamsxyz"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400"
          aria-label="Go to the target page for more information"
        >
          <u>Jamie</u>
        </Link>
      </p>
    </footer>
  );
}
