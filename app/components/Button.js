"use client";

export default function Button({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-purple-400 py-1.5 px-14 rounded-xl w-fit self-center text-white font-semibold"
    >
      Find Movie
    </button>
  );
}
