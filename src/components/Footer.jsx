import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full relative bg-on-surface border-t border-primary">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter px-margin-desktop py-asymmetric-offset">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <Image alt="LDK Uswah Logo" width={64} height={64} className="object-contain" src="/logo.png" />
            <span className="font-headline-lg text-headline-lg text-surface-bright">LDK USWAH</span>
          </div>
          <p className="font-body-md text-surface-variant opacity-80 max-w-md">Lembaga Dakwah Kampus Uswah UPN Veteran Jakarta. Wadah pembinaan karakter dan intelektualitas mahasiswa muslim.</p>
          <div className="flex gap-4 mt-4">
            <a className="text-surface-bright hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
            <a className="text-surface-bright hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">mail</span></a>
            <a className="text-surface-bright hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">language</span></a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-gutter">
          <div className="flex flex-col gap-4">
            <span className="font-label-caps text-primary-fixed">Quick Links</span>
            <Link className="font-label-caps text-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-opacity" href="/">Home</Link>
            <Link className="font-label-caps text-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-opacity" href="/about">About</Link>
            <Link className="font-label-caps text-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-opacity" href="/ldf">LDF</Link>
            <Link className="font-label-caps text-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-opacity" href="/news">News</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-label-caps text-primary-fixed">Support</span>
            <a className="font-label-caps text-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-opacity" href="#">Privacy Policy</a>
            <a className="font-label-caps text-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-opacity" href="#">Contact</a>
          </div>
        </div>
      </div>
      <div className="px-margin-desktop py-unit border-t border-white/10 text-center md:text-left">
        <p className="font-label-caps text-surface-variant opacity-50">© 2024 LDK USWAH UPNVJ. Kabinet Qitharah 26. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
