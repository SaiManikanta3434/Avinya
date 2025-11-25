"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/company", label: "Company" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-bg-dark/90 backdrop-blur border-b border-white/5">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png" // must be transparent PNG
            alt="ACS Logo"
            width={100}
            height={80}
            className="object-contain"
            priority
          />
        </Link>

        {/* NAV ITEMS */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative group transition"
            >
              <span className="group-hover:text-blue-400">{item.label}</span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 rounded-full group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* MOBILE MENU BTN */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen((p) => !p)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-bg-dark/95 animate-fade-in">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-1"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-500 transition"
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
