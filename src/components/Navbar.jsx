"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "LDF", href: "/ldf" },
    { name: "News", href: "/news" },
  ];

  return (
    <nav className={cn(
      "w-full top-0 sticky bg-surface-bright z-50 border-b border-primary transition-shadow duration-300",
      scrolled && "shadow-xl"
    )}>
      <div className="flex justify-between items-center px-margin-desktop py-unit max-w-full mx-auto">
        <div className="flex items-center gap-4">
          <Image alt="LDK Uswah Logo" width={48} height={48} className="object-contain" src="/logo.png" />
          <span className="font-headline-lg text-headline-lg text-primary">LDK USWAH</span>
        </div>
        <div className="hidden md:flex gap-gutter items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "font-body-md transition-colors duration-200",
                  isActive 
                    ? "text-primary font-bold border-b-2 border-primary pb-1" 
                    : "text-on-surface-variant hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            );
          })}
          <button className="bg-primary text-on-primary px-6 py-2 brutalist-button font-label-caps">Join Us</button>
        </div>
        <button className="md:hidden text-primary">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}
