"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-unit max-w-full mx-auto relative z-20 bg-surface-bright">
        <div className="flex items-center gap-4">
          <Image alt="LDK Uswah Logo" width={48} height={48} className="object-contain" src="/logo.png" />
          <span className="font-headline-lg text-2xl md:text-headline-lg text-primary">LDK USWAH</span>
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
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute top-full left-0 w-full bg-surface-bright border-b border-primary transition-all duration-300 ease-in-out overflow-hidden flex flex-col",
        isMobileMenuOpen ? "max-h-[400px] py-4 border-b" : "max-h-0 py-0 border-transparent"
      )}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "px-margin-mobile py-4 font-body-md border-b border-primary/10",
                isActive ? "text-primary font-bold bg-primary/5" : "text-on-surface-variant hover:bg-surface-container"
              )}
            >
              {link.name}
            </Link>
          );
        })}
        <div className="px-margin-mobile pt-6 pb-2">
          <button className="w-full bg-primary text-on-primary px-6 py-3 brutalist-button font-label-caps">Join Us</button>
        </div>
      </div>
    </nav>
  );
}
