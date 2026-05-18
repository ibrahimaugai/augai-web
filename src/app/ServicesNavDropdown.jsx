"use client";

import { useState } from "react";

import { SERVICE_NAV_LINKS } from "./serviceNavLinks";

function Chevron({ className = "" }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 transition-transform duration-200 ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function ArrowIcon({ className = "" }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}

function DropdownItem({ href, label, onNavigate, index }) {
  const isEven = index % 2 === 0;

  return (
    <a
      href={href}
      className={`group flex items-center justify-between gap-3 rounded-xl border px-3.5 py-3 transition-all duration-200 ${
        isEven
          ? "border-neutral-100/90 bg-white hover:border-blue-200 hover:bg-blue-50"
          : "border-slate-200/80 bg-slate-50/90 hover:border-blue-200 hover:bg-blue-50"
      } hover:shadow-sm`}
      role="menuitem"
      onClick={onNavigate}
    >
      <span className="text-[15px] font-semibold leading-snug tracking-tight text-neutral-800 group-hover:text-[#1e40af]">
        {label}
      </span>
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-400 transition group-hover:bg-[#2563eb] group-hover:text-white">
        <ArrowIcon className="h-3.5 w-3.5" />
      </span>
    </a>
  );
}

export function ServicesNavDropdownDesktop({
  linkClass,
  activeLinkClass,
  isActive,
  onNavigate,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a
        href="/services"
        className={`inline-flex items-center gap-1 rounded-full px-1 py-0.5 transition-colors duration-200 ${
          isActive ? activeLinkClass : linkClass
        } ${open && !isActive ? "text-[#1d4ed8]" : ""}`}
        aria-current={isActive ? "page" : undefined}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={onNavigate}
      >
        Services
        <Chevron className={open ? "rotate-180 text-red-600" : ""} />
      </a>

      <div
        className={`absolute left-1/2 top-full z-50 w-[23rem] -translate-x-1/2 pt-3 transition-all duration-200 ease-out sm:left-0 sm:w-[26rem] sm:translate-x-0 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div
          className="overflow-hidden rounded-2xl border border-neutral-200/90 bg-white shadow-[0_24px_60px_-16px_rgba(15,23,42,0.22)] ring-1 ring-black/[0.05]"
          role="menu"
        >
          <div className="h-1.5 bg-gradient-to-r from-red-600 via-red-500 to-[#2563eb]" />

          <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 p-3">
            <a
              href="/services"
              className="group flex items-center gap-3 rounded-xl border border-blue-200/60 bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#3b82f6] p-4 text-white shadow-lg shadow-blue-600/20 transition hover:shadow-xl hover:shadow-blue-600/25"
              role="menuitem"
              onClick={onNavigate}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.75}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-base font-bold tracking-tight">
                  All Services
                </span>
                <span className="mt-0.5 block text-xs font-medium text-blue-100">
                  Explore our full capabilities
                </span>
              </span>
              <ArrowIcon className="text-white/80 transition group-hover:translate-x-0.5 group-hover:text-white" />
            </a>
          </div>

          <div className="border-y border-neutral-200/80 bg-neutral-100/60 px-4 py-2.5">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-500">
              Our service pages
            </p>
          </div>

          <div
            className="max-h-[min(52vh,20rem)] overflow-y-auto overscroll-contain bg-gradient-to-b from-slate-100/80 via-slate-50 to-white p-3"
            role="none"
          >
            <div className="flex flex-col gap-1.5">
              {SERVICE_NAV_LINKS.map((item, index) => (
                <DropdownItem
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  index={index}
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServicesNavDropdownMobile({
  linkClass,
  activeLinkClass,
  isActive,
  onNavigate,
  variant = "default",
}) {
  const [open, setOpen] = useState(false);
  const isLight = variant === "light";

  const panelClass = isLight
    ? "border-white/20 bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-md"
    : "border-neutral-200 bg-gradient-to-b from-slate-100 to-slate-50";
  const featuredClass = isLight
    ? "border border-white/25 bg-white/20 text-white shadow-sm"
    : "border border-blue-200/50 bg-gradient-to-br from-[#1e40af] to-[#2563eb] text-white shadow-md shadow-blue-500/25";
  const itemClass = isLight
    ? "rounded-xl border border-white/15 bg-white/10 px-3.5 py-3 text-[15px] font-semibold leading-snug text-white transition hover:border-white/30 hover:bg-white/20"
    : "rounded-xl border border-neutral-200/90 bg-white px-3.5 py-3 text-[15px] font-semibold leading-snug text-neutral-800 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-[#1e40af]";

  return (
    <div className="flex w-full flex-col items-stretch gap-2">
      <div className="flex items-center justify-center gap-1">
        <a
          href="/services"
          className={isActive ? activeLinkClass : linkClass}
          aria-current={isActive ? "page" : undefined}
          onClick={onNavigate}
        >
          Services
        </a>
        <button
          type="button"
          className={`rounded-full p-1 ${isActive ? activeLinkClass : linkClass} ${
            open && isLight ? "bg-white/10" : open && !isLight ? "bg-neutral-200" : ""
          }`}
          aria-label="Show service pages"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <Chevron className={open ? "rotate-180" : ""} />
        </button>
      </div>

      <div
        className={`grid transition-all duration-200 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className={`mx-auto w-full max-w-sm rounded-2xl border p-3 shadow-lg ${panelClass}`}>
            <p
              className={`mb-2 px-1 text-[11px] font-bold uppercase tracking-wider ${
                isLight ? "text-white/50" : "text-neutral-500"
              }`}
            >
              Our service pages
            </p>
            <a
              href="/services"
              className={`mb-2.5 flex items-center justify-between gap-2 rounded-xl px-4 py-3.5 text-base font-bold ${featuredClass}`}
              onClick={onNavigate}
            >
              All Services
              <ArrowIcon className="opacity-90" />
            </a>
            <div className="flex max-h-60 flex-col gap-1.5 overflow-y-auto">
              {SERVICE_NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={itemClass}
                  onClick={onNavigate}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
