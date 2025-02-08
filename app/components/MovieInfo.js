"use client";

export default function MovieInfo({ title, content }) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="font-semibold text-xl text-white">{title}</h2>
      <p className="text-neutral-300">{content}</p>
    </div>
  );
}
