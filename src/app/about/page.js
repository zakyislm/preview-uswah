import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";
import { Sparkle, Clover, StarMotif } from "../../components/Ornaments";
export default function About() {
    return (
        <main className="relative overflow-x-hidden">
            {/* Floating Abstract Background Elements & Motifs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                {/* Large Background Orbs */}
                <div className="absolute top-40 -left-20 w-96 h-96 bg-primary/10 blur-3xl rounded-full animate-float"></div>
                <div className="absolute top-[40%] -right-20 w-80 h-80 bg-accent/10 blur-3xl rounded-full animate-float" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-tertiary-fixed-dim/20 blur-3xl rounded-full animate-float" style={{animationDelay: '2s'}}></div>

                {/* Small Scattered Glowing Dots & Ornaments */}
                <div className="absolute top-64 right-1/4 w-12 h-12 bg-yellow-300/40 rounded-full blur-xl animate-float" style={{animationDelay: '0.5s'}}></div>
                <StarMotif className="absolute top-64 right-1/4 w-6 h-6 text-yellow-400 animate-float drop-shadow-md" style={{animationDelay: '0.6s'}} />

                <div className="absolute top-[60%] left-1/4 w-16 h-16 bg-accent/30 rounded-full blur-2xl animate-float" style={{animationDelay: '1.5s'}}></div>
                <Clover className="absolute top-[60%] left-1/4 w-10 h-10 text-accent/80 animate-float drop-shadow-md" style={{animationDelay: '1.6s'}} />

                <div className="absolute top-32 left-1/3 w-8 h-8 bg-[#9dc775]/40 rounded-full blur-md animate-float" style={{animationDelay: '2.5s'}}></div>
                <Sparkle className="absolute top-32 left-1/3 w-5 h-5 text-[#9dc775] animate-float drop-shadow-md" style={{animationDelay: '2.6s'}} />

                {/* Grid Motif Overlay */}
                <div className="absolute inset-0 bg-grid-ornament opacity-[0.03]"></div>
            </div>

            {/* Hero Section */}
            <section className={clsx(
                "min-h-[70vh] px-margin-mobile md:px-margin-desktop",
                "flex flex-col justify-center pb-20 relative bg-gradient-to-b from-surface to-blue-50/50"
            )}>
                <div className="max-w-4xl relative z-10">
                    <span className="font-berkshire text-3xl text-accent tracking-widest mb-4 block font-bold capitalize">Siapa Kami?</span>
                    <h1 className="font-bebas text-[120px] uppercase leading-none mb-6 tracking-wide drop-shadow-md">
                        TENTANG <br /> <span className="font-berkshire text-[90px] bg-clip-text text-transparent bg-gradient-to-r from-[#0b4c9b] via-[#4a8b8c] to-[#9dc775] drop-shadow-sm">Uswah</span>
                    </h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl asymmetric-indent">
                        Lembaga Dakwah Kampus (LDK) Uswah Universitas Pembangunan Nasional "Veteran" Jakarta adalah wadah perjuangan intelektual muslim dalam mensyiarkan nilai-nilai keislaman di lingkungan kampus.
                    </p>
                </div>
                {/* Background Image Strip */}
                <div className="absolute top-0 right-0 w-1/3 h-full -z-10 opacity-10 pointer-events-none overflow-hidden hidden md:block">
                    <img className="w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAagNZPGQSuYKN-44aiLviElxbPiObVbLGgTcXTqkmgjeiP8dPGH9vVNRviMKtTeDhbIfxeBXs3ScKE-BmpO9B5iMVp04VoFXZBO31j3R0vg3E1HVQDnIpQG_davYftWHyOm7PCIlX1OlRKioeohr8GiL2d1kYyDpp1GWAbGN7hXBwhm5905izUAqU-Ciciug_mnmOLh4YuS--MHGRftP26Cr_wSY2Vuld8_Q09QNASQ0bPho0Zpi21EhboniLdAPNwzw" />
                </div>
                
                {/* Smooth Fade Transition to Next Section */}
                <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-surface to-transparent pointer-events-none z-0"></div>
            </section>

            {/* Sejarah Section (Narrative Timeline) */}
            <section className="py-[120px] px-margin-desktop bg-surface relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start relative z-10">
                    <div className="md:col-span-4 md:sticky top-32 mb-8 md:mb-0">
                        <h2 className="font-headline-lg text-headline-lg text-primary border-l-4 border-accent pl-4 mb-4">Sejarah</h2>
                        <p className="font-display-decorative text-display-decorative text-secondary opacity-60">Langkah Awal</p>
                    </div>
                    <div className="md:col-span-8 flex flex-col gap-16">
                        <div className="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors duration-500">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-teal-500 shadow-md"></div>
                            <h3 className="font-title-md text-title-md mb-2">Akar Perjuangan</h3>
                            <p className="font-body-lg text-body-lg text-on-surface-variant">LDK Uswah lahir dari semangat mahasiswa untuk mewujudkan kampus yang religius dan berkarakter. Selama bertahun-tahun, organisasi ini telah menjadi saksi bisu transformasi mahasiswa UPNVJ menuju arah yang lebih spiritual dan akademis.</p>
                        </div>
                        <div className="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors duration-500">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-teal-500 shadow-md"></div>
                            <span className="font-label-caps text-label-caps text-accent mb-2 block font-bold">Era Saat Ini</span>
                            <h3 className="font-title-md text-title-md mb-2">Kabinet Qitharah 26</h3>
                            <p className="font-body-lg text-body-lg text-on-surface-variant">Di bawah naungan Kabinet Qitharah 26, LDK Uswah berkomitmen untuk menjadi 'nada' yang harmonis dalam mendakwahkan kebaikan. Kami mengedepankan kolaborasi, inklusivitas, dan inovasi dalam setiap program kerja yang kami jalankan.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visi & Misi Section */}
            <section className="py-[120px] px-margin-desktop relative overflow-hidden">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-transparent rounded-full opacity-50 -z-10 blur-3xl pointer-events-none"></div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-20">
                    <div className="md:col-span-5 relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-accent to-yellow-300 rounded-[2.5rem] rotate-3 opacity-50 group-hover:rotate-6 transition-all duration-500"></div>
                        <div className="bg-gradient-to-br from-[#0b4c9b] to-[#4a8b8c] p-12 text-white rounded-3xl shadow-xl transition-transform duration-500 relative z-10">
                            <h2 className="font-label-caps text-label-caps mb-8 text-yellow-300">Visi</h2>
                            <p className="font-headline-lg text-headline-lg-mobile md:text-headline-lg leading-tight italic drop-shadow-md">
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
                    <div className="flex flex-col gap-4 group cursor-pointer">
                        <div className="h-96 w-full bg-surface-container overflow-hidden rounded-3xl shadow-lg relative">
                            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                            <div className="w-full h-full bg-cover bg-center grayscale-0 transition-all duration-700" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBq_dkOZr1uk1k0qKA_uFQptw9NQpnt5qQddWEOizVFK9bwAb5oCUq2n2yD-_vG1NIM1jF-luvcYMTt9WHLBX_FClU1vic6f5JJ6SrDwqiIFcB92oVWqVhoOCA0NUvPQ9-DwGh08xRafEk2BeQcOqFKOiJet6u3L9G1f1LNKwIzDtnoQ5gdhI2tY_dKTarpZtaRQeFenc7CjSDRNWI5dOTmFx1S385UNbF151ThnURgec_YlRqPI1nB')" }}></div>
                        </div>
                        <div className="pl-4 border-l-2 border-transparent group-hover:border-primary transition-colors">
                            <h4 className="font-title-md text-title-md group-hover:text-primary transition-colors">Muhammad Azka</h4>
                            <p className="font-label-caps text-label-caps text-accent font-bold">Ketua Umum</p>
                        </div>
                    </div>
                    {/* Leadership Card 2 */}
                    <div className="flex flex-col gap-4 md:mt-12 group cursor-pointer">
                        <div className="h-96 w-full bg-surface-container overflow-hidden rounded-3xl shadow-lg relative">
                            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                            <div className="w-full h-full bg-cover bg-center grayscale-0 transition-all duration-700" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAkcz-ZnuRStCoad_wP-Iwf7CpMLr8DunNRwsrIfRuRWvf26y1lhGOqlt0N_CAnJgXgqRZFa0HG2zrP43RhuHp9NCryXZxYuK7tUbgougRU7GCYoduoW-LRYYxNVW0X_qCWCrUgaoAOPO-d6iE3Cw6lxNkP5lopQdTivFNO0WJ-S53GA1VoTVa_EzC-MpMTAb5vrAlK2mzLHn4ISB-cn_dZDodmr8e9DimOMRsetApg59zU4ubBPYf7')" }}></div>
                        </div>
                        <div className="pl-4 border-l-2 border-transparent group-hover:border-secondary transition-colors">
                            <h4 className="font-title-md text-title-md group-hover:text-primary transition-colors">Fathurrahman</h4>
                            <p className="font-label-caps text-label-caps text-accent font-bold">Wakil Ketua Umum</p>
                        </div>
                    </div>
                    {/* Instagram Integration Visual */}
                    <div className="flex flex-col gap-4">
                        <div className="h-full w-full bg-gradient-to-br from-teal-500 to-blue-600 p-8 flex flex-col justify-between rounded-3xl shadow-xl text-white transform transition-all duration-300">
                            <span className="material-symbols-outlined text-4xl text-white/50">group</span>
                            <div className="text-white">
                                <p className="font-headline-lg text-headline-lg-mobile mb-4 drop-shadow-md">Bergabung Bersama Kami</p>
                                <p className="font-body-md text-body-md opacity-90 mb-8">Jadilah bagian dari perjalanan dakwah yang membanggakan di lingkungan kampus UPNVJ.</p>
                                <Link className="inline-block bg-white text-primary px-8 py-3 font-label-caps rounded-full transition-transform font-bold shadow-lg" href="#">Daftar Sekarang</Link>
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
                {/* Vertical Decorative Text */}
                <div className="hidden lg:flex absolute top-1/2 left-8 -translate-y-1/2 flex-col gap-32 items-center text-primary/50 font-label-caps tracking-widest text-sm" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                    <span>KABINET QITHARAH</span>
                    <span>EST. 1998</span>
                </div>

                <h2 className="font-display-decorative text-display-decorative text-primary mb-8">#UswahKeren</h2>
                <p className="font-headline-xl text-headline-xl text-outline absolute left-1/2 -translate-x-1/2 bottom-10 opacity-10 whitespace-nowrap pointer-events-none">
                    USWAH MODERNIST • KABINET QITHARAH 26</p>
                <div className="max-w-2xl mx-auto">
                    <p className="font-body-lg text-body-lg mb-10">Ingin tahu lebih banyak tentang kegiatan harian kami? Ikuti perjalanan kami di media sosial atau kunjungi sekretariat kami.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="bg-gradient-to-r from-primary to-teal-500 text-white px-10 py-4 rounded-full font-label-caps shadow-lg hover:shadow-xl transition-all">Lihat Program Kerja</button>
                        <button className="bg-white border-2 border-primary/20 text-primary px-10 py-4 rounded-full font-label-caps shadow-sm hover:border-primary transition-all">Hubungi Kami</button>
                    </div>
                </div>
            </section>
        </main>
    );
}
