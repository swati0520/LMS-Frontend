import Link from "next/link";

export default function AuthShell({ title, description, children, footer }) {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#070a09] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-52 size-[34rem] rounded-full bg-lime-400/[0.09] blur-[130px]" />
        <div className="absolute right-[8%] top-[-16rem] size-[34rem] rounded-full bg-teal-400/[0.08] blur-[140px]" />
        <div className="absolute -bottom-64 right-[28%] size-[32rem] rounded-full bg-amber-400/[0.045] blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.035),transparent_52%)]" />
      </div>

      <div className="mx-auto grid min-h-screen w-full max-w-[1440px] grid-cols-1 items-center gap-10 px-5 py-8 sm:px-8 sm:py-12 lg:px-12 xl:grid-cols-[minmax(0,1fr)_minmax(420px,500px)] xl:gap-16 xl:px-16">
        <section className="mx-auto flex w-full max-w-2xl flex-col justify-center xl:py-10">
          <Brand />
          <div className="mt-9 sm:mt-14 xl:mt-20">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime-200/15 bg-lime-200/[0.055] px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.17em] text-lime-200/90">
              <span className="size-1.5 rounded-full bg-lime-300 shadow-[0_0_12px_rgba(190,242,100,0.8)]" />
              Your next chapter starts here
            </div>
            <h2 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              Make room for <span className="text-lime-200">what&apos;s next.</span>
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-white/55 sm:text-base">
              A little progress every day adds up. Pick up a new skill, find your flow, and keep moving forward.
            </p>
          </div>
          <LearningPreview />
          <p className="mt-8 hidden text-xs tracking-wide text-white/30 sm:block xl:mt-12">LEARN SOMETHING GOOD, EVERY DAY.</p>
        </section>

        <section className="mx-auto w-full max-w-[500px] xl:py-8" aria-label={`${title} form`}>
          <div className="rounded-[28px] border border-white/[0.11] bg-white/[0.045] p-6 shadow-[0_28px_100px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-2xl sm:rounded-[32px] sm:p-9 lg:p-10">
            <div className="mb-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.19em] text-teal-200/75">Your learning space</p>
              <h1 className="text-3xl font-semibold tracking-[-0.035em] text-white sm:text-[2.1rem]">{title}</h1>
              <p className="mt-2.5 text-sm leading-6 text-white/50">{description}</p>
            </div>
            {children}
            <div className="mt-7 border-t border-white/[0.09] pt-6 text-center text-sm text-white/45">{footer}</div>
          </div>
          <p className="mt-5 text-center text-[11px] tracking-wide text-white/25">A BRIGHTER WAY TO KEEP LEARNING</p>
        </section>
      </div>
    </main>
  );
}

function Brand() {
  return (
    <Link href="/auth/login" className="inline-flex w-fit items-center gap-3" aria-label="LearnSpace home">
      <span className="flex size-11 items-center justify-center rounded-2xl border border-lime-200/20 bg-lime-200/[0.09] text-lg font-bold text-lime-200 shadow-[0_0_30px_rgba(190,242,100,0.1)]">L</span>
      <span className="text-base font-semibold tracking-tight text-white">learnspace<span className="text-lime-200">.</span></span>
    </Link>
  );
}

function LearningPreview() {
  return (
    <div className="mt-8 grid max-w-xl grid-cols-[minmax(0,1fr)_minmax(118px,0.62fr)] gap-3 sm:mt-10 sm:gap-4">
      <div className="rounded-2xl border border-white/[0.1] bg-white/[0.045] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl sm:rounded-3xl sm:p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-medium text-white/65 sm:text-sm">Your learning week</span>
          <span className="rounded-full border border-teal-200/15 bg-teal-200/[0.07] px-2 py-1 text-[10px] font-medium text-teal-100/80">IN MOTION</span>
        </div>
        <div className="mt-5 flex h-12 items-end gap-2 sm:mt-6 sm:h-16 sm:gap-2.5" aria-hidden="true">
          {[36, 58, 45, 82, 63, 100, 73].map((height, index) => <span key={index} className={`flex-1 rounded-full ${index === 5 ? "bg-lime-200 shadow-[0_0_16px_rgba(190,242,100,0.22)]" : "bg-white/[0.12]"}`} style={{ height: `${height}%` }} />)}
        </div>
        <div className="mt-3 flex justify-between text-[10px] text-white/30 sm:text-[11px]"><span>MON</span><span>WED</span><span>FRI</span><span>SUN</span></div>
      </div>
      <div className="flex flex-col justify-between rounded-2xl border border-amber-100/[0.12] bg-gradient-to-br from-amber-200/[0.08] to-white/[0.025] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl sm:rounded-3xl sm:p-5">
        <div className="flex size-9 items-center justify-center rounded-xl border border-amber-100/[0.12] bg-amber-100/[0.06] text-amber-100/80" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" className="size-4"><path d="M12 3.5 14.2 9l5.8 2-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2L12 3.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>
        </div>
        <div className="mt-4"><p className="text-[10px] uppercase tracking-[0.14em] text-white/35">Small steps</p><p className="mt-1 text-xl font-semibold tracking-tight text-white sm:text-2xl">Add up<span className="text-amber-100">.</span></p></div>
        <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[68%] rounded-full bg-gradient-to-r from-lime-200 to-teal-200" /></div>
      </div>
    </div>
  );
}
