"use client";

import { useEffect, useRef, useState } from "react";

import { SERVICE_NAV_GROUPS } from "./serviceNavLinks";

function ServicesTrigger({
  open,
  isActive,
  linkClass,
  activeLinkClass,
  onNavigate,
  variant = "default",
}) {
  const isLight = variant === "light";

  return (
    <a
      href="/services"
      className={`group relative inline-flex items-center gap-1.5 py-1 ${
        isActive ? activeLinkClass : linkClass
      }`}
      aria-current={isActive ? "page" : undefined}
      aria-haspopup="true"
      aria-expanded={open}
      onClick={onNavigate}
    >
      <span>Services</span>
      <svg
        className={`h-3.5 w-3.5 shrink-0 transition-transform duration-300 ${
          open ? "rotate-180" : ""
        } ${isLight ? "text-white/75" : open ? "text-[#2563eb]" : "text-neutral-400"}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
      </svg>
    </a>
  );
}

function ServiceLink({ href, label, onNavigate }) {
  return (
    <a
      href={href}
      className="block rounded-lg px-3 py-2.5 text-[14px] font-medium leading-snug text-neutral-700 transition-colors hover:bg-[#2563eb]/10 hover:text-[#1d4ed8] sm:text-[15px]"
      role="menuitem"
      onClick={onNavigate}
    >
      {label}
    </a>
  );
}

export function ServicesNavDropdownDesktop({
  linkClass,
  activeLinkClass,
  isActive,
  onNavigate,
  variant = "default",
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  };

  useEffect(() => () => clearCloseTimer(), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        clearCloseTimer();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <ServicesTrigger
        open={open}
        isActive={isActive}
        linkClass={linkClass}
        activeLinkClass={activeLinkClass}
        onNavigate={onNavigate}
        variant={variant}
      />

      <div
        className={`absolute right-0 top-[calc(100%+12px)] z-50 transition-all duration-200 ease-out ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div
          className="w-[min(calc(100vw-2rem),36rem)] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-[#2563eb]/15 bg-gradient-to-br from-red-50/40 via-white to-[#2563eb]/10 shadow-[0_16px_40px_-10px_rgba(37,99,235,0.2)] sm:w-[34rem] lg:w-[36rem]"
          role="menu"
        >
          <div className="h-1 bg-gradient-to-r from-red-600 via-red-500 to-[#2563eb]" />

          <div className="p-4 sm:p-5">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
              {SERVICE_NAV_GROUPS.map((group) => (
                <div key={group.title} className="min-w-0">
                  <p className="mb-2 border-l-2 border-red-600 pl-2 text-xs font-semibold uppercase tracking-wider text-[#1d4ed8]">
                    {group.title}
                  </p>
                  <div className="space-y-0.5">
                    {group.items.map((item) => (
                      <ServiceLink
                        key={item.href}
                        href={item.href}
                        label={item.label}
                        onNavigate={onNavigate}
                      />
                    ))}
                  </div>
                </div>
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

  return (
    <div className="flex w-full flex-col items-center gap-3">
      <div className="flex items-center gap-2">
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
          className={`flex h-8 w-8 items-center justify-center rounded-full transition ${
            isLight
              ? open
                ? "bg-white/15 text-white"
                : "text-white/70"
              : open
                ? "bg-[#2563eb]/10 text-[#2563eb]"
                : "text-neutral-500"
          }`}
          aria-label={open ? "Hide menu" : "Show menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg
            className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>

      <div
        className={`grid w-full max-w-[min(100%,20rem)] transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`overflow-hidden rounded-2xl border ${
              isLight
                ? "border-white/20 bg-white/10 backdrop-blur-md"
                : "border-[#2563eb]/20 bg-gradient-to-br from-red-50/50 via-white to-[#2563eb]/10 shadow-md"
            }`}
          >
            <div className="h-1 bg-gradient-to-r from-red-600 to-[#2563eb]" />
            <div className="max-h-[min(60vh,18rem)] space-y-5 overflow-y-auto p-4">
              {SERVICE_NAV_GROUPS.map((group) => (
                <div key={group.title}>
                  <p
                    className={`mb-2 border-l-2 border-red-600 pl-2 text-xs font-semibold uppercase tracking-wider ${
                      isLight ? "text-white/60" : "text-[#1d4ed8]"
                    }`}
                  >
                    {group.title}
                  </p>
                  <div className="space-y-0.5">
                    {group.items.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className={`block rounded-lg px-3 py-2.5 text-[15px] font-medium transition ${
                          isLight
                            ? "text-white/90 hover:bg-white/10"
                            : "text-neutral-700 hover:bg-[#2563eb]/10 hover:text-[#1d4ed8]"
                        }`}
                        onClick={onNavigate}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
