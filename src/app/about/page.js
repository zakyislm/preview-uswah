import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";

export default function About() {
  return (
    <main className="relative pt-[110px]">
        {/* Floating Abstract Background Elements */}
        <div className="absolute top-40 -left-20 w-96 h-96 bg-primary-container blur-shape rounded-full"></div>
        <div className="absolute top-[40%] -right-20 w-80 h-80 bg-secondary-container blur-shape rounded-full"></div>
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-tertiary-fixed-dim blur-shape rounded-full"></div>
        
        {/* Hero Section */}
        <section className={clsx(
          "min-h-[70vh] pt-40 px-margin-desktop md:px-margin-desktop",
          "flex flex-col justify-end pb-20 relative"
        )}>
            <div className="max-w-4xl">
                <span className="font-label-caps text-label-caps text-primary tracking-[0.3em] mb-4 block">Siapa Kami?</span>
                <h1 className="font-headline-xl text-headline-xl uppercase leading-none mb-6">
                    TENTANG <br /> <span className="text-outline">USWAH</span>
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl asymmetric-indent">
                    Lembaga Dakwah Kampus (LDK) Uswah Universitas Pembangunan Nasional "Veteran" Jakarta adalah wadah perjuangan intelektual muslim dalam mensyiarkan nilai-nilai keislaman di lingkungan kampus.
                </p>
            </div>
            {/* Background Image Strip */}
            <div className="absolute top-0 right-0 w-1/3 h-full -z-10 opacity-10 pointer-events-none overflow-hidden hidden md:block">
                <img className="w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAagNZPGQSuYKN-44aiLviElxbPiObVbLGgTcXTqkmgjeiP8dPGH9vVNRviMKtTeDhbIfxeBXs3ScKE-BmpO9B5iMVp04VoFXZBO31j3R0vg3E1HVQDnIpQG_davYftWHyOm7PCIlX1OlRKioeohr8GiL2d1kYyDpp1GWAbGN7hXBwhm5905izUAqU-Ciciug_mnmOLh4YuS--MHGRftP26Cr_wSY2Vuld8_Q09QNASQ0bPho0Zpi21EhboniLdAPNwzw" />
            </div>
        </section>

        {/* Sejarah Section (Narrative Timeline) */}
        <section className="py-[120px] px-margin-desktop bg-surface-container-low">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
                <div className="md:col-span-4 md:sticky top-32 mb-8 md:mb-0">
                    <h2 className="font-headline-lg text-headline-lg text-primary border-l-4 border-primary pl-4 mb-4">Sejarah</h2>
                    <p className="font-display-decorative text-display-decorative text-secondary opacity-60">Langkah Awal</p>
                </div>
                <div className="md:col-span-8 flex flex-col gap-16">
                    <div className="relative pl-8 border-l border-outline/30">
                        <div className="absolute -left-[5px] top-0 w-2 h-2 bg-primary"></div>
                        <h3 className="font-title-md text-title-md mb-2">Akar Perjuangan</h3>
                        <p className="font-body-lg text-body-lg text-on-surface-variant">LDK Uswah lahir dari semangat mahasiswa untuk mewujudkan kampus yang religius dan berkarakter. Selama bertahun-tahun, organisasi ini telah menjadi saksi bisu transformasi mahasiswa UPNVJ menuju arah yang lebih spiritual dan akademis.</p>
                    </div>
                    <div className="relative pl-8 border-l border-outline/30">
                        <div className="absolute -left-[5px] top-0 w-2 h-2 bg-primary"></div>
                        <span className="font-label-caps text-label-caps text-primary mb-2 block">Era Saat Ini</span>
                        <h3 className="font-title-md text-title-md mb-2">Kabinet Qitharah 26</h3>
                        <p className="font-body-lg text-body-lg text-on-surface-variant">Di bawah naungan Kabinet Qitharah 26, LDK Uswah berkomitmen untuk menjadi 'nada' yang harmonis dalam mendakwahkan kebaikan. Kami mengedepankan kolaborasi, inklusivitas, dan inovasi dalam setiap program kerja yang kami jalankan.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Visi & Misi Section */}
        <section className="py-[120px] px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-20">
                <div className="md:col-span-5 relative group">
                    <div className="absolute inset-0 border-2 border-primary -rotate-2 -z-10 transition-transform group-hover:rotate-0"></div>
                    <div className="bg-primary p-12 text-on-primary">
                        <h2 className="font-label-caps text-label-caps mb-8 text-primary-fixed">Visi</h2>
                        <p className="font-headline-lg text-headline-lg-mobile md:text-headline-lg leading-tight italic">
                            "Mewujudkan LDK Uswah sebagai pusat peradaban intelektual muslim yang inklusif, profesional, dan transformatif di lingkungan UPNVJ."
                        </p>
                    </div>
                </div>
                <div className="md:col-span-7 md:pl-20">
                    <h2 className="font-label-caps text-label-caps text-primary mb-10 tracking-widest">Misi Organisasi</h2>
                    <ul className="flex flex-col gap-0">
                        <li className="border-t border-on-surface/10 py-6 flex gap-8 items-start">
                            <span className="font-headline-lg text-headline-lg text-primary opacity-20 leading-none">01</span>
                            <p className="font-body-lg text-body-lg">Memperkuat pondasi spiritualitas dan intelektualitas kader melalui pembinaan yang berkelanjutan.</p>
                        </li>
                        <li className="border-t border-on-surface/10 py-6 flex gap-8 items-start">
                            <span className="font-headline-lg text-headline-lg text-primary opacity-20 leading-none">02</span>
                            <p className="font-body-lg text-body-lg">Membangun sinergi yang harmonis dengan seluruh elemen kampus baik internal maupun eksternal.</p>
                        </li>
                        <li className="border-t border-on-surface/10 py-6 flex gap-8 items-start">
                            <span className="font-headline-lg text-headline-lg text-primary opacity-20 leading-none">03</span>
                            <p className="font-body-lg text-body-lg">Mengoptimalkan media digital sebagai sarana dakwah yang kreatif, edukatif, dan inspiratif.</p>
                        </li>
                        <li className="border-b border-on-surface/10 py-6 flex gap-8 items-start">
                            <span className="font-headline-lg text-headline-lg text-primary opacity-20 leading-none">04</span>
                            <p className="font-body-lg text-body-lg">Menumbuhkan jiwa kepedulian sosial melalui aksi nyata di tengah masyarakat.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Struktur Organisasi */}
        <section className={clsx(
          "py-[120px] px-margin-desktop",
          "bg-surface-container-highest/30"
        )}>
            <div className="text-center mb-24">
                <h2 className="font-headline-lg text-headline-lg mb-4">Struktur Organisasi</h2>
                <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                <p className="font-label-caps text-label-caps text-on-surface-variant">Pilar Penggerak Kabinet Qitharah 26</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter items-stretch">
                {/* Leadership Card 1 */}
                <div className="flex flex-col gap-4">
                    <div className="h-96 w-full bg-surface-container overflow-hidden border border-on-surface/10 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBq_dkOZr1uk1k0qKA_uFQptw9NQpnt5qQddWEOizVFK9bwAb5oCUq2n2yD-_vG1NIM1jF-luvcYMTt9WHLBX_FClU1vic6f5JJ6SrDwqiIFcB92oVWqVhoOCA0NUvPQ9-DwGh08xRafEk2BeQcOqFKOiJet6u3L9G1f1LNKwIzDtnoQ5gdhI2tY_dKTarpZtaRQeFenc7CjSDRNWI5dOTmFx1S385UNbF151ThnURgec_YlRqPI1nB')"}}></div>
                    </div>
                    <div className="border-l-2 border-primary pl-4">
                        <h4 className="font-title-md text-title-md">Muhammad Azka</h4>
                        <p className="font-label-caps text-label-caps text-primary">Ketua Umum</p>
                    </div>
                </div>
                {/* Leadership Card 2 */}
                <div className="flex flex-col gap-4 md:mt-12">
                    <div className="h-96 w-full bg-surface-container overflow-hidden border border-on-surface/10 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAkcz-ZnuRStCoad_wP-Iwf7CpMLr8DunNRwsrIfRuRWvf26y1lhGOqlt0N_CAnJgXgqRZFa0HG2zrP43RhuHp9NCryXZxYuK7tUbgougRU7GCYoduoW-LRYYxNVW0X_qCWCrUgaoAOPO-d6iE3Cw6lxNkP5lopQdTivFNO0WJ-S53GA1VoTVa_EzC-MpMTAb5vrAlK2mzLHn4ISB-cn_dZDodmr8e9DimOMRsetApg59zU4ubBPYf7')"}}></div>
                    </div>
                    <div className="border-l-2 border-secondary pl-4">
                        <h4 className="font-title-md text-title-md">Fathurrahman</h4>
                        <p className="font-label-caps text-label-caps text-secondary">Wakil Ketua Umum</p>
                    </div>
                </div>
                {/* Instagram Integration Visual */}
                <div className="flex flex-col gap-4">
                    <div className="h-full w-full bg-primary-container p-8 flex flex-col justify-between">
                        <span className="material-symbols-outlined text-4xl text-on-primary">group</span>
                        <div className="text-on-primary">
                            <p className="font-headline-lg text-headline-lg-mobile mb-4">Bergabung Bersama Kami</p>
                            <p className="font-body-md text-body-md opacity-80 mb-8">Jadilah bagian dari perjalanan dakwah yang membanggakan di lingkungan kampus UPNVJ.</p>
                            <Link className="inline-block bg-on-primary text-primary px-8 py-3 font-label-caps brutalist-button" href="#" style={{transform: "translate(0px, 0px)", boxShadow: "rgb(9, 14, 90) 2px 2px 0px 0px"}}>Daftar Sekarang</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Dept List */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-gutter border-t border-on-surface/10 pt-12">
                <div>
                    <h5 className="font-label-caps text-label-caps text-primary mb-4">Departemen A</h5>
                    <p className="font-body-md text-on-surface-variant">Pengembangan Sumber Daya Insani</p>
                </div>
                <div>
                    <h5 className="font-label-caps text-label-caps text-primary mb-4">Departemen B</h5>
                    <p className="font-body-md text-on-surface-variant">Syi'ar &amp; Pelayanan Ummat</p>
                </div>
                <div>
                    <h5 className="font-label-caps text-label-caps text-primary mb-4">Departemen C</h5>
                    <p className="font-body-md text-on-surface-variant">Media &amp; Informasi Kreatif</p>
                </div>
                <div>
                    <h5 className="font-label-caps text-label-caps text-primary mb-4">Departemen D</h5>
                    <p className="font-body-md text-on-surface-variant">Kemitraan &amp; Jaringan Luar</p>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className={clsx(
          "py-[120px] px-margin-desktop text-center",
          "overflow-hidden relative"
        )}>
            <h2 className="font-display-decorative text-display-decorative text-primary mb-8">#UswahKeren</h2>
            <p className="font-headline-xl text-headline-xl text-outline absolute left-1/2 -translate-x-1/2 bottom-0 opacity-10 whitespace-nowrap pointer-events-none">
                USWAH MODERNIST • KABINET QITHARAH 26</p>
            <div className="max-w-2xl mx-auto">
                <p className="font-body-lg text-body-lg mb-10">Ingin tahu lebih banyak tentang kegiatan harian kami? Ikuti perjalanan kami di media sosial atau kunjungi sekretariat kami.</p>
                <div className="flex flex-wrap justify-center gap-4">
                    <button className="bg-primary text-on-primary px-10 py-4 brutalist-button font-label-caps">Lihat Program Kerja</button>
                    <button className="border-2 border-primary text-primary px-10 py-4 brutalist-button font-label-caps">Hubungi Kami</button>
                </div>
            </div>
        </section>
    </main>
  );
}
