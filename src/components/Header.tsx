"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  {
    label: "교육원 소개",
    href: "/about",
  },
  {
    label: "훈련과정",
    href: "/courses",
  },
  {
    label: "강사소개",
    href: "/instructors",
  },
  {
    label: "수강신청",
    href: "/apply",
  },
  {
    label: "공지사항",
    href: "/notice",
  },
  {
    label: "오시는 길",
    href: "/location",
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-lg bg-[var(--color-primary)] flex items-center justify-center text-white font-bold text-lg">
              가
            </div>
            <div className="leading-tight">
              <span className="text-lg font-bold text-[var(--color-primary-dark)]">
                가람평생교육원
              </span>
              <span className="hidden sm:block text-[11px] text-[var(--color-text-light)]">
                사단법인 더불어함께
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/apply"
              className="ml-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              수강신청
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴 열기"
          >
            <svg
              className="w-6 h-6 text-[var(--color-text)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-[var(--color-border)] bg-white pb-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-6 py-3 text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="px-6 pt-2">
            <Link
              href="/apply"
              className="block text-center px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              수강신청
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
