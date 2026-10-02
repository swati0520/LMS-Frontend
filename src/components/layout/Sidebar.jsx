"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import verticalMenu from "@/data/vertical-menu";

const mainItems = verticalMenu.filter((item) => item.section !== "footer");
const footerItems = verticalMenu.filter((item) => item.section === "footer");

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    const activeSubmenus = mainItems
      .filter((item) => item.type === "submenu" && item.children?.some((child) => isActivePath(pathname, child.href)))
      .map((item) => item.label);

    if (activeSubmenus.length) {
      setExpanded((current) => ({
        ...current,
        ...Object.fromEntries(activeSubmenus.map((label) => [label, true])),
      }));
    }
    setMobileOpen(false);
  }, [pathname]);

  function toggleSubmenu(label) {
    if (collapsed) setCollapsed(false);
    setExpanded((current) => ({ ...current, [label]: !current[label] }));
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className="fixed left-4 top-4 z-40 flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-[#101513]/90 text-white shadow-lg backdrop-blur-xl transition hover:border-lime-200/30 hover:text-lime-200 md:hidden"
        aria-label="Open navigation menu"
        aria-expanded={mobileOpen}
      >
        <Icon name="menu" className="size-5" />
      </button>

      {mobileOpen && (
        <button
          type="button"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/65 backdrop-blur-sm md:hidden"
          aria-label="Close navigation menu"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[min(19rem,calc(100vw-2rem))] p-3 transition-transform duration-200 md:sticky md:top-0 md:z-auto md:h-screen md:shrink-0 md:translate-x-0 md:p-4 ${mobileOpen ? "translate-x-0" : "-translate-x-full"} ${collapsed ? "md:w-[88px]" : "md:w-[280px]"}`}
        aria-label="Student navigation"
      >
        <div className="flex h-full min-h-[calc(100vh-1.5rem)] flex-col rounded-[26px] border border-white/[0.09] bg-[#0d1210]/95 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-2xl md:min-h-0 md:p-3.5">
          <div className="flex min-h-14 items-center justify-between gap-2 px-1">
            <Link href="/student/dashboard" className="flex min-w-0 items-center gap-3 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-200/70" title="LearnSpace dashboard">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-[14px] border border-lime-200/20 bg-lime-200/[0.09] text-base font-bold text-lime-200 shadow-[0_0_24px_rgba(190,242,100,0.08)]">L</span>
              <span className={`truncate text-[15px] font-semibold tracking-tight text-white ${collapsed ? "md:hidden" : ""}`}>learnspace<span className="text-lime-200">.</span></span>
            </Link>
            <button type="button" onClick={() => setMobileOpen(false)} className="flex size-9 items-center justify-center rounded-xl text-white/45 transition hover:bg-white/[0.06] hover:text-white md:hidden" aria-label="Close navigation menu"><Icon name="close" className="size-5" /></button>
            <button type="button" onClick={() => setCollapsed(!collapsed)} className="hidden size-9 shrink-0 items-center justify-center rounded-xl text-white/40 transition hover:bg-white/[0.06] hover:text-lime-200 md:flex" aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"} title={collapsed ? "Expand sidebar" : "Collapse sidebar"}><Icon name={collapsed ? "expand" : "collapse"} className="size-[18px]" /></button>
          </div>

          <div className={`mb-3 mt-7 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30 ${collapsed ? "md:hidden" : ""}`}>Workspace</div>
          <nav className="flex-1 space-y-1 overflow-y-auto" aria-label="Main menu">
            {mainItems.map((item) => (
              <MenuEntry
                key={item.label}
                item={item}
                pathname={pathname}
                collapsed={collapsed}
                expanded={Boolean(expanded[item.label])}
                onToggle={() => toggleSubmenu(item.label)}
                onNavigate={() => setMobileOpen(false)}
              />
            ))}
          </nav>

          <div className="mt-4 border-t border-white/[0.08] pt-3">
            <div className={`mb-2 flex items-center gap-3 rounded-2xl border border-white/[0.055] bg-white/[0.025] p-2.5 ${collapsed ? "md:justify-center md:border-transparent md:bg-transparent md:p-1" : ""}`}>
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-teal-200/15 bg-teal-200/[0.08] text-xs font-semibold text-teal-100/85" title="Student account">S</span>
              <span className={`min-w-0 flex-1 ${collapsed ? "md:hidden" : ""}`}><span className="block truncate text-xs font-medium text-white/80">Student account</span><span className="mt-0.5 block truncate text-[10px] text-white/35">Learning workspace</span></span>
              <span className={`size-1.5 shrink-0 rounded-full bg-lime-300/80 shadow-[0_0_10px_rgba(190,242,100,0.4)] ${collapsed ? "md:hidden" : ""}`} />
            </div>
            <div className="space-y-1">
              {footerItems.map((item) => (
                <MenuEntry key={item.label} item={item} pathname={pathname} collapsed={collapsed} onNavigate={() => setMobileOpen(false)} />
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

function MenuEntry({ item, pathname, collapsed, expanded, onToggle, onNavigate }) {
  if (item.type === "submenu") {
    const active = item.children?.some((child) => isActivePath(pathname, child.href)) ?? false;
    const controlsId = `sidebar-submenu-${slug(item.label)}`;

    return (
      <div>
        <button type="button" onClick={onToggle} className={`${entryClass} ${active ? activeClass : "text-white/55 hover:bg-white/[0.055] hover:text-white"}`} aria-expanded={expanded} aria-controls={controlsId} title={collapsed ? item.label : undefined}>
          <Icon name={item.icon} className="size-[19px] shrink-0" />
          <span className={`min-w-0 flex-1 truncate text-left ${collapsed ? "md:hidden" : ""}`}>{item.label}</span>
          <Icon name="chevron" className={`size-4 shrink-0 transition-transform duration-200 ${expanded ? "rotate-180" : ""} ${collapsed ? "md:hidden" : ""}`} />
        </button>
        {expanded && (
          <div id={controlsId} className={`ml-[21px] mt-1 space-y-1 border-l border-white/[0.09] pl-3 ${collapsed ? "md:hidden" : ""}`}>
            {item.children?.map((child) => <MenuLink key={child.href} item={child} active={isActivePath(pathname, child.href)} onNavigate={onNavigate} />)}
          </div>
        )}
      </div>
    );
  }

  if (item.type === "item") {
    return <MenuLink item={item} active={isActivePath(pathname, item.href)} collapsed={collapsed} onNavigate={onNavigate} />;
  }

  return null;
}

function MenuLink({ item, active, collapsed, onNavigate }) {
  const isPlaceholderAction = item.href.startsWith("#");
  const className = `${entryClass} ${active ? activeClass : item.label === "Logout" ? "text-white/40 hover:bg-white/[0.055] hover:text-white/80" : "text-white/55 hover:bg-white/[0.055] hover:text-white"}`;
  const contents = <><Icon name={item.icon} className={`size-[19px] shrink-0 ${item.label === "Logout" ? "rotate-180" : ""}`} /><span className={`min-w-0 truncate ${collapsed ? "md:hidden" : ""}`}>{item.label}</span></>;

  if (isPlaceholderAction) {
    return <a href={item.href} onClick={(event) => { event.preventDefault(); onNavigate?.(); }} className={className} title={collapsed ? item.label : undefined}>{contents}</a>;
  }

  return <Link href={item.href} onClick={onNavigate} className={className} aria-current={active ? "page" : undefined} title={collapsed ? item.label : undefined}>{contents}</Link>;
}

function isActivePath(pathname, href) {
  if (!href || href.startsWith("#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

const entryClass = "flex min-h-11 w-full items-center gap-3 rounded-2xl px-3 text-[13px] font-medium transition duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-200/60 md:px-3.5";
const activeClass = "border border-lime-200/[0.12] bg-lime-200/[0.075] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.035),0_0_24px_rgba(190,242,100,0.045)] before:mr-[-3px] before:h-4 before:w-[2px] before:rounded-full before:bg-lime-200 before:shadow-[0_0_10px_rgba(190,242,100,0.6)]";

const iconPaths = {
  dashboard: <><rect x="3.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="3.5" width="7" height="4" rx="1.5" /><rect x="13.5" y="9.5" width="7" height="11" rx="1.5" /><rect x="3.5" y="13.5" width="7" height="7" rx="1.5" /></>,
  courses: <><path d="m3.5 7 8.5-4 8.5 4-8.5 4-8.5-4Z" /><path d="M5.5 8.5v5.8c0 1.4 2.9 3.2 6.5 3.2s6.5-1.8 6.5-3.2V8.5" /><path d="M20.5 8v6" /></>,
  learning: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Z" /><path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H20" /><path d="M8 7h7M8 10h5" /></>,
  quiz: <><path d="M7 3.5h10a2 2 0 0 1 2 2v15l-7-3.5-7 3.5v-15a2 2 0 0 1 2-2Z" /><path d="m9 10 2 2 4-4" /></>,
  profile: <><circle cx="12" cy="8" r="3.5" /><path d="M4.5 20a7.5 7.5 0 0 1 15 0" /></>,
  logout: <><path d="M10 4H5.5A1.5 1.5 0 0 0 4 5.5v13A1.5 1.5 0 0 0 5.5 20H10" /><path d="M14 8l4 4-4 4M8 12h10" /></>,
  menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
  close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  chevron: <><path d="m6 9 6 6 6-6" /></>,
  collapse: <><rect x="3.5" y="4" width="17" height="16" rx="2" /><path d="M9 4v16m5-11 3 3-3 3" /></>,
  expand: <><rect x="3.5" y="4" width="17" height="16" rx="2" /><path d="M9 4v16m7-11-3 3 3 3" /></>,
};

function Icon({ name, className }) {
  if (!iconPaths[name]) return null;

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {iconPaths[name]}
    </svg>
  );
}
