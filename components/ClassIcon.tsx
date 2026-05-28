"use client";

type Name = "lotus" | "leaf" | "mountain" | "wave" | "sun" | "moon";

export default function ClassIcon({ name }: { name: Name }) {
  const common =
    "w-11 h-11 rounded-2xl bg-sand-50 text-moss-800 flex items-center justify-center transition-transform duration-500 group-hover:rotate-6";

  return (
    <div className={common}>
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {name === "lotus" && (
          <>
            <path d="M12 21c-3-1-5-3-5-7 0-2 2-3 3-3 0 2 1 4 2 5 1-1 2-3 2-5 1 0 3 1 3 3 0 4-2 6-5 7z" />
            <path d="M12 14c-2-1-3-3-3-6 0-2 1-3 3-4 2 1 3 2 3 4 0 3-1 5-3 6z" />
          </>
        )}
        {name === "leaf" && (
          <>
            <path d="M11 20A7 7 0 0 1 4 13c0-4 2-9 9-11 0 7-3 12-7 13" />
            <path d="M4 13c5-2 9-5 9-11" />
          </>
        )}
        {name === "mountain" && (
          <>
            <path d="M3 19l5-9 4 5 3-4 6 8z" />
            <path d="M8 10l-2 4M14 11l1 2" />
          </>
        )}
        {name === "wave" && (
          <>
            <path d="M3 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
            <path d="M3 17c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
            <path d="M3 7c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
          </>
        )}
        {name === "sun" && (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4" />
          </>
        )}
        {name === "moon" && (
          <path d="M20 14A8 8 0 1 1 10 4a6 6 0 0 0 10 10z" />
        )}
      </svg>
    </div>
  );
}
