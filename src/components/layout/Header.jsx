function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" className="size-[18px]" aria-hidden="true">
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="m16 16 4.2 4.2" />
    </svg>
  );
}

function NotificationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-[19px]" aria-hidden="true">
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
      <path d="M10 21h4" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden="true">
      <path d="m7 10 5 5 5-5" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="border-b border-white/[0.07] bg-[#090d0c]/75 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] w-full max-w-[1600px] items-center justify-between gap-4 px-4 py-3 pl-[4.5rem] sm:px-6 sm:pl-16 lg:px-9">
        <label className="relative hidden w-full max-w-[460px] flex-1 items-center sm:flex">
          <span className="pointer-events-none absolute left-4 text-white/35"><SearchIcon /></span>
          <input
            type="search"
            name="dashboard-search"
            placeholder="Search courses..."
            aria-label="Search courses"
            className="h-11 w-full rounded-full border border-white/[0.09] bg-white/[0.035] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-white/30 hover:border-white/[0.14] focus:border-lime-200/35 focus:bg-white/[0.055] focus:ring-4 focus:ring-lime-200/[0.055]"
          />
        </label>

        <div className="ml-auto flex shrink-0 items-center gap-2.5 sm:gap-4">
          <button
            type="button"
            aria-label="Notifications, one unread"
            className="relative flex size-10 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.035] text-white/60 transition hover:border-teal-200/20 hover:bg-white/[0.06] hover:text-teal-100"
          >
            <NotificationIcon />
            <span className="absolute right-[9px] top-[8px] size-1.5 rounded-full bg-lime-300 shadow-[0_0_9px_rgba(190,242,100,0.7)]" />
          </button>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="flex size-9 items-center justify-center rounded-full border border-lime-200/20 bg-lime-200/[0.09] text-[11px] font-semibold text-lime-100" aria-hidden="true">AJ</div>
            <div className="hidden min-w-0 sm:block">
              <p className="truncate text-xs font-medium leading-5 text-white/85">Alex Johnson</p>
              <p className="text-[10px] leading-4 text-white/40">Student</p>
            </div>
            <span className="hidden text-white/35 sm:block"><ChevronIcon /></span>
          </div>
        </div>
      </div>
    </header>
  );
}
