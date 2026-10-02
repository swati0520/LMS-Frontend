import DashboardLayout from "@/layouts/DashboardLayout";

const weeklyActivity = [
  { day: "Mon", hours: 1.1, height: 42, tone: "bg-lime-200/70" },
  { day: "Tue", hours: 1.6, height: 64, tone: "bg-teal-200/75" },
  { day: "Wed", hours: 0.8, height: 31, tone: "bg-lime-200/60" },
  { day: "Thu", hours: 2.1, height: 84, tone: "bg-lime-200" },
  { day: "Fri", hours: 1.4, height: 55, tone: "bg-teal-200/70" },
  { day: "Sat", hours: 0.9, height: 36, tone: "bg-amber-200/75" },
  { day: "Sun", hours: 0.6, height: 24, tone: "bg-white/25" },
];

const courses = [
  {
    title: "Advanced React Development",
    category: "Development",
    progress: 72,
    lessons: "18 of 25 lessons",
    icon: "code",
    accent: "teal",
  },
  {
    title: "UI/UX Design Fundamentals",
    category: "Design",
    progress: 48,
    lessons: "12 of 25 lessons",
    icon: "design",
    accent: "purple",
  },
  {
    title: "Node.js Backend Development",
    category: "Development",
    progress: 31,
    lessons: "8 of 26 lessons",
    icon: "server",
    accent: "amber",
  },
];

const schedule = [
  { time: "10:00 AM", title: "React Advanced", type: "Live Class", duration: "45 min", icon: "video", accent: "teal" },
  { time: "1:30 PM", title: "UI/UX Workshop", type: "Workshop", duration: "60 min", icon: "design", accent: "purple" },
  { time: "4:00 PM", title: "JavaScript Quiz", type: "Quiz", duration: "20 min", icon: "quiz", accent: "amber" },
];

const accentStyles = {
  lime: {
    text: "text-lime-200",
    badge: "border-lime-200/15 bg-lime-200/[0.07] text-lime-100/80",
    fill: "bg-lime-200",
    cover: "from-lime-200/[0.13] via-lime-200/[0.035] to-transparent",
    icon: "border-lime-200/15 bg-lime-200/[0.08] text-lime-100/85",
  },
  teal: {
    text: "text-teal-200",
    badge: "border-teal-200/15 bg-teal-200/[0.07] text-teal-100/80",
    fill: "bg-teal-200",
    cover: "from-teal-200/[0.13] via-teal-200/[0.035] to-transparent",
    icon: "border-teal-200/15 bg-teal-200/[0.08] text-teal-100/85",
  },
  amber: {
    text: "text-amber-200",
    badge: "border-amber-200/15 bg-amber-200/[0.07] text-amber-100/80",
    fill: "bg-amber-200",
    cover: "from-amber-200/[0.12] via-amber-200/[0.035] to-transparent",
    icon: "border-amber-200/15 bg-amber-200/[0.08] text-amber-100/85",
  },
  purple: {
    text: "text-violet-200",
    badge: "border-violet-200/15 bg-violet-200/[0.07] text-violet-100/80",
    fill: "bg-violet-200",
    cover: "from-violet-200/[0.12] via-violet-200/[0.035] to-transparent",
    icon: "border-violet-200/15 bg-violet-200/[0.08] text-violet-100/85",
  },
};

const cardClass = "rounded-[24px] border border-white/[0.085] bg-white/[0.035] shadow-[0_18px_48px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.035)]";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="mx-auto w-full max-w-[1500px] space-y-7 sm:space-y-9">
        <Welcome />

        <section className="grid min-w-0 grid-cols-1 gap-4 lg:grid-cols-12" aria-label="Learning overview">
          <LearningProgress className="lg:col-span-6 2xl:col-span-5" />
          <ContinueLearning className="lg:col-span-6 2xl:col-span-4" />
          <WeeklyActivity className="lg:col-span-12 2xl:col-span-3" />
        </section>

        <section className="grid grid-cols-1 gap-3 sm:grid-cols-3" aria-label="Learning statistics">
          <StatCard label="Courses Enrolled" value="6" note="Across 3 topics" icon="book" accent="lime" />
          <StatCard label="Completed Courses" value="2" note="Great momentum" icon="check" accent="teal" />
          <StatCard label="Certificates" value="2" note="Skills to show for" icon="award" accent="amber" />
        </section>

        <ScheduleSection />
        <CoursesSection />
      </div>
    </DashboardLayout>
  );
}

function Welcome() {
  return (
    <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end" aria-labelledby="welcome-title">
      <div className="min-w-0">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-teal-200/70">Today, October 2</p>
        <h1 id="welcome-title" className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">Welcome back, Alex <span aria-hidden="true">👋</span></h1>
        <p className="mt-2 max-w-xl text-sm leading-6 text-white/45 sm:text-[15px]">Continue your learning journey and track your progress.</p>
      </div>
      <div className="flex w-fit shrink-0 items-center gap-2.5 rounded-full border border-amber-200/[0.14] bg-amber-200/[0.055] px-4 py-2.5 text-sm text-amber-100/85">
        <span aria-hidden="true">🔥</span><span className="font-medium">7 Day Streak</span><span className="text-xs text-white/35">·</span><span className="text-xs text-white/45">Keep it up</span>
      </div>
    </section>
  );
}

function LearningProgress({ className }) {
  const categories = [
    { label: "UI/UX", value: 74, accent: "lime" },
    { label: "Development", value: 58, accent: "teal" },
    { label: "Design", value: 49, accent: "amber" },
    { label: "Research", value: 32, accent: "purple" },
  ];
  const segmentColors = ["bg-lime-200", "bg-teal-200", "bg-amber-200", "bg-violet-200"];

  return (
    <article className={`${cardClass} min-w-0 p-5 sm:p-6 ${className}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-white/85">Learning Progress</p>
          <p className="mt-1 text-xs text-white/40">Your overall learning path</p>
        </div>
        <span className="rounded-full border border-white/[0.08] bg-white/[0.035] px-2.5 py-1 text-[10px] font-medium text-white/40">THIS MONTH</span>
      </div>

      <div className="mt-6 flex items-center gap-5 sm:gap-7">
        <div className="relative flex size-[104px] shrink-0 items-center justify-center rounded-full sm:size-[116px]" style={{ background: "conic-gradient(from -90deg, #bef264 0deg 154deg, rgba(45, 212, 191, 0.75) 154deg 220deg, rgba(255,255,255,0.08) 220deg 360deg)" }} role="img" aria-label="Overall learning progress 64 percent">
          <div className="flex size-[84px] flex-col items-center justify-center rounded-full border border-white/[0.06] bg-[#101512] sm:size-[94px]">
            <span className="text-2xl font-semibold tracking-tight text-white sm:text-[26px]">64<span className="text-base text-lime-200">%</span></span>
            <span className="mt-0.5 text-[10px] text-white/40">overall</span>
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs leading-5 text-white/50">You&apos;re building a strong learning rhythm.</p>
          <div className="mt-4 flex h-2 w-full gap-1.5" aria-label="Progress by topic">
            {categories.map((category, index) => <span key={category.label} className={`h-full flex-1 rounded-full ${segmentColors[index]}`} style={{ opacity: 0.65 + index * 0.1 }} title={`${category.label}: ${category.value}%`} />)}
          </div>
          <p className="mt-2 text-[10px] text-white/30">Progress across 4 learning areas</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-3 border-t border-white/[0.07] pt-4">
        {categories.map((category) => <CategoryProgress key={category.label} {...category} />)}
      </div>
    </article>
  );
}

function CategoryProgress({ label, value, accent }) {
  const style = accentStyles[accent];
  return (
    <div className="min-w-0">
      <div className="mb-1.5 flex items-center justify-between gap-2 text-[11px]"><span className="truncate text-white/50">{label}</span><span className={`shrink-0 font-medium ${style.text}`}>{value}%</span></div>
      <ProgressBar value={value} fillClass={style.fill} />
    </div>
  );
}

function ContinueLearning({ className }) {
  return (
    <article className={`${cardClass} relative flex min-w-0 flex-col overflow-hidden p-5 sm:p-6 ${className}`}>
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-20 size-56 rounded-full bg-teal-300/[0.055] blur-[70px]" />
      <div className="relative flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-white/85">Continue Learning</p>
          <p className="mt-1 text-xs text-white/40">Pick up where you left off</p>
        </div>
        <span className={`rounded-full border px-2.5 py-1 text-[10px] font-medium ${accentStyles.teal.badge}`}>IN PROGRESS</span>
      </div>

      <div className="relative mt-5 flex min-w-0 items-center gap-3.5">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-teal-200/[0.13] bg-gradient-to-br from-teal-200/[0.13] to-white/[0.025] text-teal-100"><Symbol name="code" className="size-5" /></div>
        <div className="min-w-0"><p className="text-[10px] font-medium uppercase tracking-[0.13em] text-teal-200/65">Development</p><h2 className="mt-1 break-words text-[15px] font-medium leading-5 text-white">Advanced React Development</h2></div>
      </div>

      <div className="relative mt-6">
        <div className="mb-2 flex items-center justify-between gap-3"><span className="text-xs text-white/45">Course progress</span><span className="text-sm font-semibold text-teal-100">72%</span></div>
        <ProgressBar value={72} fillClass="bg-gradient-to-r from-lime-200 to-teal-200" />
        <div className="mt-2.5 flex items-center justify-between gap-3 text-[11px] text-white/40"><span>18 / 25 lessons</span><span className="truncate text-right">Up next: React patterns</span></div>
      </div>

      <button type="button" className="group relative mt-5 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-full bg-lime-200 px-4 py-2.5 text-xs font-semibold text-[#11170b] transition hover:bg-lime-100 focus:outline-none focus:ring-4 focus:ring-lime-200/20">
        Continue Learning <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
      </button>
    </article>
  );
}

function WeeklyActivity({ className }) {
  return (
    <article className={`${cardClass} min-w-0 p-5 sm:p-6 ${className}`}>
      <div className="flex items-start justify-between gap-2">
        <div><p className="text-sm font-medium text-white/85">Weekly Activity</p><p className="mt-1 text-xs text-white/40">Time spent learning</p></div>
        <span className="rounded-full border border-white/[0.08] bg-white/[0.035] px-2 py-1 text-[10px] text-white/40">THIS WEEK</span>
      </div>

      <div className="mt-5 flex items-end justify-between gap-2">
        {weeklyActivity.map((item) => (
          <div key={item.day} className="flex min-w-0 flex-1 flex-col items-center gap-2" aria-label={`${item.day}: ${item.hours} hours`}>
            <div className="flex h-[88px] w-full items-end justify-center rounded-full bg-white/[0.035] p-[3px]">
              <span className={`w-full max-w-7 rounded-full ${item.tone}`} style={{ height: `${item.height}%` }} />
            </div>
            <span className="text-[9px] text-white/35 sm:text-[10px]">{item.day}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-end justify-between gap-2 border-t border-white/[0.07] pt-4">
        <div><p className="text-2xl font-semibold tracking-tight text-white">8.5<span className="ml-1 text-sm font-medium text-white/50">hrs</span></p><p className="mt-0.5 text-[10px] text-white/35">total learning time</p></div>
        <span className="mb-1 rounded-full border border-lime-200/[0.12] bg-lime-200/[0.055] px-2 py-1 text-[10px] font-medium text-lime-100/75">+12% this week</span>
      </div>
    </article>
  );
}

function StatCard({ label, value, note, icon, accent }) {
  const style = accentStyles[accent];
  return (
    <article className={`${cardClass} flex min-w-0 items-center gap-4 p-4 sm:p-5`}>
      <div className={`flex size-11 shrink-0 items-center justify-center rounded-2xl border ${style.icon}`}><Symbol name={icon} className="size-[19px]" /></div>
      <div className="min-w-0 flex-1"><p className="truncate text-xs text-white/45">{label}</p><div className="mt-1 flex items-baseline gap-2"><span className="text-2xl font-semibold tracking-tight text-white">{value}</span><span className="truncate text-[10px] text-white/30">{note}</span></div></div>
      <span className={`hidden text-xs sm:block ${style.text}`} aria-hidden="true">↗</span>
    </article>
  );
}

function ScheduleSection() {
  return (
    <section aria-labelledby="schedule-heading">
      <SectionHeading id="schedule-heading" title="My Schedule" subtitle="A few things coming up today" trailing="Today · Oct 2" />
      <div className="grid min-w-0 grid-cols-1 gap-3 md:grid-cols-3">
        {schedule.map((item) => <ScheduleCard key={item.title} item={item} />)}
      </div>
    </section>
  );
}

function ScheduleCard({ item }) {
  const style = accentStyles[item.accent];
  return (
    <article className={`${cardClass} flex min-w-0 items-center gap-3.5 p-4 transition hover:border-white/[0.13] sm:p-5`}>
      <div className={`flex size-11 shrink-0 items-center justify-center rounded-2xl border ${style.icon}`}><Symbol name={item.icon} className="size-[19px]" /></div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1"><h3 className="break-words text-sm font-medium text-white/85">{item.title}</h3><span className={`rounded-full border px-2 py-0.5 text-[9px] font-medium ${style.badge}`}>{item.type}</span></div>
        <div className="mt-1.5 flex flex-wrap items-center gap-x-2 text-[11px] text-white/40"><span className={style.text}>{item.time}</span><span aria-hidden="true" className="text-white/20">·</span><span>{item.duration}</span></div>
      </div>
      <button type="button" className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] text-white/35 transition hover:border-white/15 hover:text-white/75" aria-label={`Open ${item.title}`}><span aria-hidden="true">→</span></button>
    </article>
  );
}

function CoursesSection() {
  return (
    <section aria-labelledby="courses-heading">
      <SectionHeading id="courses-heading" title="My Courses" subtitle="Keep building your skills" trailing="3 active courses" />
      <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3">
        {courses.map((course) => <CourseCard key={course.title} course={course} />)}
      </div>
    </section>
  );
}

function CourseCard({ course }) {
  const style = accentStyles[course.accent];
  return (
    <article className={`${cardClass} min-w-0 overflow-hidden transition duration-200 hover:-translate-y-0.5 hover:border-white/[0.13]`}>
      <div className={`relative flex h-[88px] items-center justify-between overflow-hidden border-b border-white/[0.06] bg-gradient-to-br ${style.cover} px-5`}>
        <div className="absolute -right-6 -top-12 size-36 rounded-full border border-white/[0.055]" aria-hidden="true" />
        <div className="absolute -right-1 -top-7 size-24 rounded-full border border-white/[0.045]" aria-hidden="true" />
        <span className={`relative flex size-11 items-center justify-center rounded-2xl border backdrop-blur ${style.icon}`}><Symbol name={course.icon} className="size-5" /></span>
        <span className={`relative rounded-full border px-2.5 py-1 text-[10px] font-medium ${style.badge}`}>{course.category}</span>
      </div>

      <div className="p-5">
        <div className="flex min-h-[44px] items-start justify-between gap-3">
          <h3 className="min-w-0 break-words text-[15px] font-medium leading-5 text-white">{course.title}</h3>
          <button type="button" className="-mr-2 -mt-1 flex size-8 shrink-0 items-center justify-center rounded-full text-base leading-none text-white/35 transition hover:bg-white/[0.05] hover:text-white/75" aria-label={`More options for ${course.title}`}>···</button>
        </div>

        <div className="mt-4">
          <div className="mb-2 flex items-center justify-between text-[11px]"><span className="text-white/40">Progress</span><span className={`font-medium ${style.text}`}>{course.progress}%</span></div>
          <ProgressBar value={course.progress} fillClass={style.fill} />
          <div className="mt-2 flex items-center justify-between gap-2 text-[10px] text-white/35"><span>{course.lessons}</span><span>Learning</span></div>
        </div>

        <button type="button" className="mt-4 inline-flex min-h-9 w-full items-center justify-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-2 text-xs font-medium text-white/70 transition hover:border-lime-200/20 hover:bg-lime-200/[0.055] hover:text-lime-100 focus:outline-none focus:ring-4 focus:ring-lime-200/[0.08]">
          Continue course <span aria-hidden="true" className={style.text}>→</span>
        </button>
      </div>
    </article>
  );
}

function SectionHeading({ id, title, subtitle, trailing }) {
  return (
    <div className="mb-4 flex items-end justify-between gap-3">
      <div className="min-w-0"><h2 id={id} className="text-lg font-semibold tracking-tight text-white sm:text-xl">{title}</h2><p className="mt-1 text-xs text-white/40 sm:text-[13px]">{subtitle}</p></div>
      <span className="shrink-0 text-[10px] text-white/35 sm:text-xs">{trailing}</span>
    </div>
  );
}

function ProgressBar({ value, fillClass }) {
  return (
    <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.08]" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={value}>
      <div className={`h-full rounded-full ${fillClass}`} style={{ width: `${value}%` }} />
    </div>
  );
}

function Symbol({ name, className }) {
  const shapes = {
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Z" /><path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H20M8 7h7M8 10h5" /></>,
    check: <><path d="M20 11.1V12a8 8 0 1 1-4.75-7.32" /><path d="m8.5 11.5 3 3L21 5" /></>,
    award: <><circle cx="12" cy="8" r="5" /><path d="m8.5 12-1 8 4.5-2.5 4.5 2.5-1-8" /><path d="m10 8 1.3 1.3L14.5 6" /></>,
    code: <><path d="m8 8-4 4 4 4m8-8 4 4-4 4m-2-11-4 14" /></>,
    design: <><path d="m4 16 9.7-9.7a2.1 2.1 0 0 1 3 3L7 19H4v-3Z" /><path d="m14 6 4 4M4 21h16" /></>,
    server: <><rect x="3" y="4" width="18" height="7" rx="2" /><rect x="3" y="13" width="18" height="7" rx="2" /><path d="M7 7.5h.01M7 16.5h.01M11 7.5h6M11 16.5h6" /></>,
    video: <><rect x="3" y="5" width="13" height="14" rx="2" /><path d="m16 10 5-3v10l-5-3" /></>,
    quiz: <><path d="M7 3.5h10a2 2 0 0 1 2 2v15l-7-3.5-7 3.5v-15a2 2 0 0 1 2-2Z" /><path d="m9 10 2 2 4-4" /></>,
  };

  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">{shapes[name]}</svg>;
}
