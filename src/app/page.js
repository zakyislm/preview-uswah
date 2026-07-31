import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";
import { Sparkle, Clover, StarMotif, GeometricFret } from "../components/Ornaments";
import LdfCarousel from "../components/LdfCarousel";
export default function Home() {
    return (
        <main className="overflow-x-hidden">

            {/* Hero Section: Dynamic Layered Redesign */}
            <section className={clsx(
                "relative min-h-[90vh] flex items-center px-margin-mobile md:px-margin-desktop",
                "overflow-hidden bg-gradient-to-b from-surface to-blue-50/30",
                "transition-all duration-1000 opacity-100"
            )}>
                {/* Complex Layered Ornaments & Motifs */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {/* Large Blurry Background Shapes (Rona-rona) */}
                    <Clover className="absolute -top-40 -left-40 w-[800px] h-[800px] text-[#9dc775] opacity-20 blur-[120px] animate-float pointer-events-none" style={{ animationDelay: '2s' }} />
                    <StarMotif className="absolute top-0 -right-20 w-[600px] h-[600px] text-white opacity-40 blur-[100px] animate-float pointer-events-none" />
                    <Clover className="absolute top-1/3 left-1/4 w-[500px] h-[500px] text-[#4a8b8c] opacity-15 blur-[100px] animate-float pointer-events-none" style={{ animationDelay: '1s' }} />

                    {/* Small Scattered Glowing Dots & Vector Ornaments */}
                    <div className="absolute top-32 left-1/4 w-16 h-16 bg-yellow-300/40 rounded-full blur-xl animate-float" style={{ animationDelay: '0.5s' }}></div>
                    <Sparkle className="absolute top-32 left-1/4 w-8 h-8 text-yellow-500 animate-float drop-shadow-md" style={{ animationDelay: '0.6s' }} />

                    <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
                    <Clover className="absolute bottom-40 right-1/3 w-10 h-10 text-accent/80 animate-float drop-shadow-md" style={{ animationDelay: '1.6s' }} />

                    <div className="absolute top-1/2 right-20 w-12 h-12 bg-[#9dc775]/40 rounded-full blur-lg animate-float" style={{ animationDelay: '2.5s' }}></div>
                    <StarMotif className="absolute top-1/2 right-24 w-6 h-6 text-[#9dc775] animate-float drop-shadow-md" style={{ animationDelay: '2.4s' }} />

                    <div className="absolute top-20 left-10 w-8 h-8 bg-blue-400/50 rounded-full blur-md animate-float" style={{ animationDelay: '3s' }}></div>
                    <Sparkle className="absolute top-24 left-16 w-4 h-4 text-primary animate-float drop-shadow-md" style={{ animationDelay: '3.1s' }} />

                    {/* Grid Motif */}
                    <div className="absolute inset-0 bg-grid-ornament opacity-[0.03]"></div>

                    {/* Geometric Fret Patterns */}
                    <div className="absolute -top-20 -right-20 text-primary opacity-[0.04] transform scale-125 rotate-12">
                        <GeometricFret />
                    </div>
                    <div className="absolute -bottom-20 -left-20 text-primary opacity-[0.03] transform scale-110 -rotate-6">
                        <GeometricFret />
                    </div>

                    {/* Extra Stars */}
                    <StarMotif className="absolute top-[15%] right-[15%] w-5 h-5 text-accent/50 animate-float" style={{ animationDelay: '0.8s' }} />
                    <StarMotif className="absolute bottom-[25%] left-[10%] w-4 h-4 text-primary/40 animate-float" style={{ animationDelay: '1.8s' }} />
                    <StarMotif className="absolute top-[60%] left-[45%] w-3 h-3 text-secondary/30 animate-pulse" />
                    <StarMotif className="absolute bottom-[35%] right-[8%] w-6 h-6 text-[#4a8b8c]/40 -rotate-12 animate-float" style={{ animationDelay: '2.2s' }} />

                    {/* Extra Clovers with solid center */}
                    <Clover className="absolute bottom-[20%] left-[5%] w-10 h-10 text-primary/20 rotate-45 animate-float pointer-events-none" style={{ animationDelay: '3.5s' }} />
                    <Clover className="absolute top-[70%] right-[12%] w-8 h-8 text-[#9dc775]/25 -rotate-12 animate-float pointer-events-none" style={{ animationDelay: '1.2s' }} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 w-full gap-gutter">
                    <div className="md:col-span-7 flex flex-col justify-center relative z-20">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <div className="h-[1px] w-8 bg-primary"></div>
                            <span className="font-label-caps text-primary tracking-[0.2em]">Profile Singkat Kabinet Qitharah 26</span>
                        </div>
                        <h2 className="font-headline-xl text-headline-xl mb-2 leading-none uppercase drop-shadow-md">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0b4c9b] via-[#4a8b8c] to-[#9dc775]">MENEGUHKAN</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0b4c9b] via-[#4a8b8c] to-[#9dc775]">LANGKAH</span>
                        </h2>
                        <p className="font-display-decorative text-display-decorative text-primary opacity-80 mb-8 drop-shadow-sm">Merajut Ukhuwah, Menghidupkan Dakwah</p>
                        <div className="max-w-xl font-body-lg text-on-surface-variant leading-relaxed mb-10 border-l-2 border-primary/20 pl-6">
                            LDK Uswah adalah wadah perjuangan dakwah kampus di UPN Veteran Jakarta yang berkomitmen mencetak generasi rabbani dengan jiwa patriotik dan intelektualitas tinggi.
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <Link className="bg-on-surface text-surface font-label-caps py-4 px-8 brutalist-button text-xs" href="/about">Pelajari Selengkapnya</Link>
                            <div className="flex items-center gap-4 px-4 bg-surface/50 backdrop-blur-sm border border-primary/10">
                                <span className="font-label-caps text-primary text-[10px]">EST. 1998</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-5 relative flex items-center justify-center py-10">
                        {/* Multi-layered Logo Background */}
                        <div className="absolute w-[120%] h-[120%] bg-grid-ornament opacity-10 scale-90 rotate-12"></div>
                        <div className="absolute inset-0 bg-primary-container/5 geometric-step rotate-6 scale-105"></div>
                        <div className="absolute inset-0 bg-secondary-container/5 geometric-step -rotate-3 scale-110"></div>
                        <img alt="LDK Uswah Identity" className="relative z-10 w-full max-w-[320px] drop-shadow-[0_20px_50px_rgba(0,116,226,0.3)] transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAF_rxDflylGuLfpVYRnzOSvW71GoUBjfL6aosJmW-32yi2872ggqCYB1XYeCOBcakb7iD1aJMmaG17lzySUZVAJkM1rI8sAfyjxNwMMGOIlyOSCMpO3KgX9WRDa-By2o1VrPJXCGJbquDUVh2F00l4sQUFF0ETCJU208eR824PCkMdbfWhQ10LM-wMUPGAogrcK5-f97SAnghgXRIzae8Xp39H0kWz9ubDh4IZMTEqdts40QNbpaYi72AuVX2zb-tVw" />
                    </div>
                </div>

                {/* Smooth Fade Transition to Next Section */}
                <div className="absolute -bottom-1 left-0 w-full h-48 bg-gradient-to-t from-surface-bright via-surface-bright/80 to-transparent pointer-events-none z-10"></div>
            </section>

            {/* About Section: Aesthetic Redesign (Phase 1b) */}
            <section id="about" className={clsx(
                "relative pt-[120px] pb-[160px] md:pb-[200px] px-margin-mobile md:px-margin-desktop bg-surface-bright",
                "overflow-hidden transition-all duration-1000 opacity-100"
            )}>
                {/* Smooth Fade Transition from Previous Section */}
                <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-surface-bright via-surface-bright/80 to-transparent pointer-events-none z-10"></div>
                {/* Glowing Orbs & Backgrounds (Blur Blobs) */}
                <Clover className="absolute top-1/4 -left-10 w-[250px] h-[250px] text-primary opacity-50 blur-[30px] pointer-events-none" />
                <Clover className="absolute bottom-1/3 left-10 w-[200px] h-[200px] text-[#4a8b8c] opacity-40 blur-[25px] pointer-events-none" />
                <Clover className="absolute -top-10 right-10 w-[300px] h-[300px] text-[#9dc775] opacity-40 blur-[30px] pointer-events-none" />
                <Clover className="absolute top-1/2 right-20 w-[250px] h-[250px] text-primary opacity-30 blur-[35px] pointer-events-none" />
                <Clover className="absolute bottom-10 right-1/3 w-[180px] h-[180px] text-[#9dc775] opacity-50 blur-[20px] pointer-events-none" />

                {/* Section Ornaments (Grid Line) */}
                <div className="absolute inset-0 bg-simple-grid pointer-events-none z-0"></div>
                <div className="absolute -left-20 bottom-10 w-96 h-96 line-art-flourish opacity-[0.05] pointer-events-none"></div>

                <Sparkle className="absolute top-32 right-1/4 w-12 h-12 text-accent/30 animate-pulse pointer-events-none" />
                <Clover className="absolute bottom-32 left-10 w-16 h-16 text-primary/10 rotate-12 pointer-events-none" />
                <StarMotif className="absolute top-1/2 left-1/3 w-8 h-8 text-secondary/20 -rotate-12 pointer-events-none" />
                <div className="absolute top-1/4 left-1/2 w-3 h-3 rounded-full bg-accent/40 animate-ping pointer-events-none"></div>
                <div className="absolute bottom-1/4 right-1/3 w-2 h-2 rounded-full bg-primary/50 animate-pulse pointer-events-none"></div>

                {/* Geometric Fret Patterns */}
                <div className="absolute -top-24 -left-24 text-primary opacity-[0.03] transform scale-125 -rotate-6">
                    <GeometricFret />
                </div>
                <div className="absolute -bottom-24 -right-24 text-primary opacity-[0.04] transform scale-150 rotate-12">
                    <GeometricFret />
                </div>

                {/* Extra Stars scattered */}
                <StarMotif className="absolute top-[10%] right-[10%] w-5 h-5 text-accent/50 animate-float" style={{ animationDelay: '0.3s' }} />
                <StarMotif className="absolute top-[20%] left-[60%] w-3 h-3 text-primary/30 animate-float" style={{ animationDelay: '1.5s' }} />
                <StarMotif className="absolute bottom-[40%] right-[5%] w-7 h-7 text-[#4a8b8c]/30 -rotate-12 animate-float" style={{ animationDelay: '2s' }} />
                <StarMotif className="absolute bottom-[15%] left-[40%] w-4 h-4 text-secondary/25 rotate-45 animate-pulse" />
                <StarMotif className="absolute top-[55%] right-[30%] w-3 h-3 text-accent/40 animate-float" style={{ animationDelay: '0.7s' }} />

                {/* Extra Clovers with solid center */}
                <Clover className="absolute top-[15%] right-[20%] w-12 h-12 text-[#9dc775]/15 rotate-12 animate-float pointer-events-none" style={{ animationDelay: '1s' }} />
                <Clover className="absolute bottom-[20%] right-[15%] w-10 h-10 text-primary/10 -rotate-6 animate-float pointer-events-none" style={{ animationDelay: '2.5s' }} />
                <Clover className="absolute top-[40%] left-[5%] w-8 h-8 text-[#4a8b8c]/15 rotate-45 animate-float pointer-events-none" style={{ animationDelay: '3s' }} />

                {/* Extra solid-center blobs */}
                <div className="absolute top-[10%] left-[70%] w-4 h-4 rounded-full bg-accent/60 blur-[1px] animate-float pointer-events-none" style={{ animationDelay: '1.3s' }}></div>
                <div className="absolute bottom-[30%] left-[15%] w-3 h-3 rounded-full bg-primary/50 blur-[1px] animate-float pointer-events-none" style={{ animationDelay: '2.1s' }}></div>
                <div className="absolute top-[65%] right-[25%] w-2 h-2 rounded-full bg-[#9dc775]/60 blur-[1px] animate-pulse pointer-events-none"></div>

                {/* Giant Watermark Text */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[150px] md:text-[250px] font-gasoek text-primary opacity-[0.03] pointer-events-none whitespace-nowrap z-0 -rotate-6">USWAH</div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center relative z-10">
                    {/* Left Column: Text & Content */}
                    <div className="md:col-span-6 relative">
                        {/* Huge Heading */}
                        <div className="relative mb-14">
                            <div className="absolute -top-12 left-0 md:-top-16 md:left-2 z-10 drop-shadow-lg rotate-[-4deg]">
                                <span aria-hidden="true" className="font-display-decorative text-7xl md:text-8xl tracking-wider capitalize absolute left-0 top-0 text-transparent [-webkit-text-stroke:8px_#fbf8ff] z-0 pointer-events-none">Tentang</span>
                                <span className="font-display-decorative text-transparent bg-clip-text bg-gradient-to-r from-[#001b3d] to-[#0074e2] text-7xl md:text-8xl tracking-wider capitalize relative z-10">Tentang</span>
                            </div>
                            <h3 className="font-gasoek text-transparent bg-clip-text bg-gradient-to-r from-[#005cb5] to-[#9dc775] uppercase text-7xl md:text-9xl tracking-tight leading-none drop-shadow-xl relative z-0">KAMI</h3>
                            {/* Decorative Line under heading */}
                            <div className="absolute -bottom-6 left-0 w-32 h-2 bg-gradient-to-r from-accent to-transparent"></div>
                        </div>

                        <div className="space-y-6 relative z-20">
                            {/* Rich Cards */}
                            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl shadow-primary/10 border border-white group transition-transform duration-500 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/20 to-transparent rounded-bl-full pointer-events-none"></div>
                                <h4 className="font-berkshire text-primary text-xl mb-3 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                        <span className="w-3 h-3 rounded-full bg-accent transition-transform duration-500"></span>
                                    </div>
                                    Sejarah Singkat
                                </h4>
                                <p className="font-jakarta text-on-surface-variant leading-relaxed md:text-lg pl-11">
                                    Berdiri sejak puluhan tahun lalu, LDK Uswah telah menjadi pilar utama dakwah di lingkungan UPNVJ, melahirkan generasi penerus yang cerdas, tangguh, dan religius.
                                </p>
                            </div>

                            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl shadow-primary/10 border border-white group transition-transform duration-500 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-secondary/20 to-transparent rounded-bl-full pointer-events-none"></div>
                                <h4 className="font-berkshire text-primary text-xl mb-3 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                        <span className="w-3 h-3 rounded-full bg-secondary transition-transform duration-500"></span>
                                    </div>
                                    Visi & Misi
                                </h4>
                                <p className="font-jakarta text-on-surface-variant leading-relaxed md:text-lg pl-11">
                                    Menjadi poros dakwah kampus yang inklusif, prestatif, dan kontributif. Menyelenggarakan kajian, pelatihan, dan pengabdian masyarakat secara berkelanjutan.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Dynamic Image Composition */}
                    <div className="md:col-span-6 relative mt-16 md:mt-0 pl-0 md:pl-10 flex justify-center md:justify-end">
                        <div className="relative w-full max-w-[400px]">
                            {/* Abstract Background Frame */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-[40px] transform rotate-3 scale-105 pointer-events-none"></div>
                            <div className="absolute inset-0 border-2 border-primary/20 rounded-[40px] transform -rotate-3 scale-105 pointer-events-none"></div>

                            {/* Main Photo Box */}
                            <div className="w-full aspect-[4/5] md:aspect-square rounded-[40px] bg-white border-4 border-white shadow-2xl flex items-center justify-center relative overflow-hidden group z-10">
                                <img alt="Dokumentasi Uswah" className="w-full h-full object-cover transition-all duration-700 relative z-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnNbi6G4xS95AgJQV-4yjfMwipNBkz4oWqSyCzX0AvjvC_mpIPbp4LrFiC3I_6gG5rSYu0sIFYGkGO3ISluuwQYHPsyr3hiFcFgRciwmLpfi7GTBI0Neo2K6wsPP-hW6lD22QAkfX_knzGIG1e15lr-dT2vY4cbyP1M_03FKTZIMhJn2tHIAyowfL7rI2yRJ23p-ziHXva-qIzD9NzLF8qDS9uaOycs3-oE4ha57sUw3XXl-2Yt2Oc" />
                                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                            </div>

                            {/* Floating Badges */}

                        </div>

                        {/* Small Decorative Elements */}
                        <div className="absolute top-10 -right-5 w-20 h-20 bg-accent/10 rounded-full blur-xl pointer-events-none z-0"></div>
                        <Sparkle className="absolute top-12 -right-2 w-8 h-8 text-accent animate-pulse z-20" />
                        <div className="absolute -bottom-4 right-10 font-label-caps text-xs text-primary/40 tracking-[0.3em] rotate-90 origin-right">EST. 1998</div>
                    </div>
                </div>

                {/* Wavy Transition to next section (Dark Floor) */}
                <div className="absolute bottom-0 left-0 w-full leading-[0] z-0 pointer-events-none">
                    <svg className="relative block w-full h-[100px] md:h-[150px]" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#0f172a"></path>
                    </svg>
                </div>
            </section>

            {/* LDF Section: Unified with Dark Patterns */}
            <section id="ldf" className={clsx(
                "relative z-20 -mt-1 pt-[100px] pb-[120px] px-margin-mobile md:px-margin-desktop",
                "bg-[#0f172a] text-surface transition-all duration-1000 opacity-100")}>

                {/* Background Grid Accent */}
                <div className="absolute -top-[100px] md:-top-[150px] left-0 right-0 bottom-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none z-0"
                    style={{
                        WebkitMaskImage: `linear-gradient(black, black), url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 360"><defs><filter id="b" x="-10%" y="-100%" width="120%" height="300%"><feGaussianBlur stdDeviation="0, 60" /></filter><mask id="m"><rect width="1200" height="360" fill="white" /><g transform="translate(0, 240)"><path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="black" filter="url(%23b)" transform="translate(0, -50)" /><path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="black" /></g></mask></defs><rect width="1200" height="360" fill="black" mask="url(%23m)" /></svg>')`,
                        WebkitMaskPosition: 'top left, bottom left',
                        WebkitMaskSize: '100% calc(100% - 239px), 100% 240px',
                        WebkitMaskRepeat: 'no-repeat, no-repeat',
                        maskImage: `linear-gradient(black, black), url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 360"><defs><filter id="b" x="-10%" y="-100%" width="120%" height="300%"><feGaussianBlur stdDeviation="0, 60" /></filter><mask id="m"><rect width="1200" height="360" fill="white" /><g transform="translate(0, 240)"><path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="black" filter="url(%23b)" transform="translate(0, -50)" /><path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="black" /></g></mask></defs><rect width="1200" height="360" fill="black" mask="url(%23m)" /></svg>')`,
                        maskPosition: 'top left, bottom left',
                        maskSize: '100% calc(100% - 239px), 100% 240px',
                        maskRepeat: 'no-repeat, no-repeat'
                    }}></div>

                {/* Complex Layered Ornaments & Motifs */}
                <div className="absolute inset-0 pointer-events-none z-[5]">
                    {/* Top-left blue blob */}
                    <div className="absolute top-8 left-8 w-[65px] h-[65px] rounded-full opacity-50 blur-[8px]" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.6) 0%, rgba(59,130,246,0.2) 30%, transparent 70%)' }}></div>

                    {/* Sharp static sparkles — like the IG posts */}
                    <Sparkle className="absolute top-[12%] left-[38%] w-4 h-4 text-white/20" />
                    <Sparkle className="absolute top-[22%] left-[50%] w-3 h-3 text-teal-300/30" />
                    <Sparkle className="absolute top-[55%] left-[36%] w-5 h-5 text-blue-300/15" />
                    <Sparkle className="absolute top-[80%] left-[42%] w-3 h-3 text-emerald-300/25" />
                    <Sparkle className="absolute top-[35%] right-[8%] w-4 h-4 text-white/15" />
                    <Sparkle className="absolute top-[68%] left-[8%] w-3 h-3 text-teal-200/20" />
                    <Sparkle className="absolute top-[45%] left-[48%] w-2 h-2 text-white/25" />

                    {/* Static blurry sparkles — atmospheric */}
                    <Sparkle className="absolute top-[18%] left-[44%] w-6 h-6 text-blue-300/20 blur-[2px]" />
                    <Sparkle className="absolute top-[65%] left-[40%] w-8 h-8 text-teal-300/10 blur-[3px]" />
                    <Sparkle className="absolute top-[30%] right-[12%] w-5 h-5 text-emerald-300/15 blur-[2px]" />

                    {/* Static small dots */}
                    <div className="absolute top-[15%] left-[47%] w-2 h-2 rounded-full bg-teal-400/40"></div>
                    <div className="absolute top-[50%] left-[40%] w-1.5 h-1.5 rounded-full bg-blue-300/50"></div>
                    <div className="absolute top-[72%] left-[46%] w-2 h-2 rounded-full bg-white/20"></div>
                    <div className="absolute top-[38%] left-[33%] w-1.5 h-1.5 rounded-full bg-emerald-400/30"></div>
                    <div className="absolute top-[88%] left-[10%] w-2 h-2 rounded-full bg-teal-300/35"></div>
                    <div className="absolute top-[28%] right-[6%] w-1.5 h-1.5 rounded-full bg-blue-400/40"></div>

                    {/* Static star motifs */}
                    <StarMotif className="absolute top-[30%] left-[8%] w-4 h-4 text-blue-300/25 rotate-12" />
                    <StarMotif className="absolute top-[85%] left-[15%] w-5 h-5 text-teal-200/20 -rotate-6" />
                    <StarMotif className="absolute top-[42%] left-[44%] w-3 h-3 text-white/15 rotate-45" />

                    {/* Diagonal light rays — like the IG reference */}
                    <div className="absolute top-0 left-[30%] w-[2px] h-[40%] bg-gradient-to-b from-white/10 via-white/5 to-transparent rotate-[25deg] origin-top"></div>
                    <div className="absolute top-0 left-[55%] w-[1px] h-[35%] bg-gradient-to-b from-teal-300/10 via-teal-300/3 to-transparent rotate-[15deg] origin-top"></div>
                    <div className="absolute top-[10%] right-[15%] w-[1px] h-[30%] bg-gradient-to-b from-white/8 to-transparent rotate-[-20deg] origin-top"></div>

                    {/* === ANIMATED elements (subtle, fewer) === */}

                    {/* Floating sparkles — slow */}
                    <Sparkle className="absolute top-[8%] left-[35%] w-3 h-3 text-white/30 animate-float" style={{ animationDelay: '0.5s' }} />
                    <Sparkle className="absolute top-[60%] left-[48%] w-4 h-4 text-teal-300/25 animate-float" style={{ animationDelay: '2s' }} />
                    <Sparkle className="absolute top-[75%] right-[10%] w-3 h-3 text-blue-300/20 animate-float" style={{ animationDelay: '3s' }} />

                    {/* Pulsing dots */}
                    <div className="absolute top-[20%] left-[52%] w-2 h-2 rounded-full bg-emerald-400/50 animate-pulse"></div>
                    <div className="absolute top-[90%] right-[25%] w-2 h-2 rounded-full bg-teal-300/40 animate-pulse" style={{ animationDelay: '1s' }}></div>

                    {/* Pojok Kanan Atas: Clover — static, slightly blurred */}
                    <Clover className="absolute top-10 right-4 w-[100px] h-[100px] text-emerald-400/50 blur-[2px]" />
                    {/* Small static clovers in the gap */}
                    <Clover className="absolute top-[25%] left-[45%] w-6 h-6 text-teal-300/20 rotate-45" />
                    <Clover className="absolute top-[58%] left-[42%] w-5 h-5 text-emerald-400/15 -rotate-12 blur-[1px]" />

                    {/* Blobs — static atmospheric */}
                    <div className="absolute bottom-32 right-4 w-[150px] h-[150px] bg-emerald-400/20 rounded-full blur-[40px]"></div>
                    <div className="absolute bottom-[15%] right-[20%] w-[250px] h-[250px] bg-blue-400/15 rounded-full blur-[60px]"></div>
                    <div className="absolute top-20 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px]"></div>

                    {/* Bottom star — static */}
                    <StarMotif className="absolute bottom-28 left-5 w-8 h-8 text-blue-300/20 blur-[1px] -rotate-12" />
                </div>

                <div className="relative z-10">

                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
                            {/* Left Column: Title */}
                            <div className="w-full lg:flex-1 lg:shrink-0 text-left">
                                <h2 className="text-5xl lg:text-6xl font-gasoek uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-lime-400 rotate-[-2deg] origin-left mb-2">
                                    Lembaga
                                </h2>
                                <div className="flex items-center gap-4 my-2 lg:pl-6">
                                    <h2 className="text-5xl lg:text-6xl font-gasoek uppercase tracking-wider text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                                        Dakwah
                                    </h2>
                                </div>
                                <h2 className="text-5xl lg:text-6xl font-gasoek uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-lime-400 lg:pl-12 rotate-[1deg] origin-left mt-2">
                                    Fakultas
                                </h2>
                                <p className="mt-8 text-slate-300 max-w-sm">
                                    Pilih dan kenali lebih jauh lembaga dakwah di tiap fakultas yang siap mewadahi potensi dan kontribusi kamu. Geser kartu untuk melihat semua.
                                </p>
                            </div>

                            {/* Right Column: Cards Slider */}
                            <div className="w-full lg:w-[550px] lg:shrink-0 overflow-hidden mt-8 lg:mt-0 relative z-20">
                                <LdfCarousel />
                            </div>
                        </div>
                    </div>
                </div>


                {/* SVG Wave at the bottom of LDF Section to transition to Informasi Section */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30">
                    <svg className="relative block w-full h-[50px] md:h-[80px]" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current text-surface" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
                    </svg>
                </div>
            </section>
            {/* Informasi Section */}
            <section className="py-[120px] px-margin-mobile md:px-margin-desktop bg-surface relative overflow-hidden">
                {/* Latar Belakang / Ornamen (Z-0) */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    {/* Islamic Geometric Fret Pattern - Kanan Atas & Kiri Bawah */}
                    <div className="absolute -top-32 -right-32 text-primary opacity-[0.03] transform scale-150 rotate-12">
                        <GeometricFret />
                    </div>
                    <div className="absolute -bottom-32 -left-32 text-primary opacity-[0.03] transform scale-150 -rotate-12">
                        <GeometricFret />
                    </div>

                    {/* Soft Glowing Blobs */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-accent/10 to-transparent rounded-full blur-3xl opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl opacity-50"></div>
                </div>

                <div className="relative z-10">
                    <div className="flex justify-between items-end mb-16 relative">
                        {/* Star Ornaments dekat judul */}
                        <StarMotif className="absolute -top-8 -left-4 w-6 h-6 text-accent/60" />
                        <StarMotif className="absolute -top-2 left-64 w-3 h-3 text-primary/40 animate-pulse" />
                        <StarMotif className="absolute top-8 -right-8 w-8 h-8 text-secondary/30" />

                        <h2 className="font-headline-xl text-primary uppercase text-5xl md:text-6xl text-headline-xl">Informasi Terbaru</h2>
                        <Link className="font-label-caps text-primary underline underline-offset-4 decoration-2" href="/news">Lihat Semua</Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Info Item 1 */}
                        <div className="group cursor-pointer bg-white border border-outline-variant/30 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
                            <div className="aspect-video bg-surface-container relative">
                                <img alt="News 1" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiKAguTFhyjdsXowYp-VQ1yqqgD_sUfzOoBlOKzcvj6XWFVDoY-7p0XQ1FQe3wrERoX-OAodWs4DOPjWCyX0nwHXw6w8FbpFVRLwTF9OM6MBeBy5NyNiKYZfRC58lYKlO_p_1YqKN4jX74Au_4rsG3uzo0NmD55h1ZoNZPBLBcrH8t1i5yKGViDUSM0uHXTyZpMfeoako9CShuY58VT7kOt3nQdjxMNHavWtSXkGd2CApaa1vTR033" />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-label-caps tracking-widest text-on-surface shadow-sm">
                                    ANNOUNCEMENT
                                </div>
                            </div>
                            <div className="p-6 flex flex-col grow">
                                <div className="flex justify-between items-center mb-4 text-outline font-label-caps text-xs tracking-wider">
                                    <span>24 Okt 2024</span>
                                    <span className="material-symbols-outlined text-lg">send</span>
                                </div>
                                <h4 className="font-title-lg text-on-surface mb-3 line-clamp-2">Pendaftaran Open Recruitment Kabinet Qitharah 26 Resmi Dibuka</h4>
                                <p className="font-body-md text-on-surface-variant opacity-80 line-clamp-3 mb-6">
                                    Siapkan dirimu untuk menjadi bagian dari pengurus Lembaga Dakwah Kampus Uswah UPNVJ. Pendaftaran kini telah resmi dibuka untuk seluruh mahasiswa muslim.
                                </p>
                                <div className="mt-auto flex items-center gap-2 font-label-caps text-xs text-on-surface group-hover:text-primary transition-colors">
                                    Read Article <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                                </div>
                            </div>
                        </div>

                        {/* Info Item 2 */}
                        <div className="group cursor-pointer bg-white border border-outline-variant/30 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
                            <div className="aspect-video bg-surface-container relative">
                                <img alt="News 2" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFt9eIUkFfjjdVAcdAqgAzifUCCg9VqNGkvf7VG6Imd5d3aNxSVIOR6XkUPeN26mabC8FMKHXVFx6SPq7suLlKmGimaEn8Dmje1cj6QB82BWFX-7kygghUxwr7LixIiAXzpZHIIfstDmTKCcOtLRR1WLJe9GGwActaINZ9GURIOyIDTXk-11TYikmzmvMroq2cQ4dX9-nSOX4l85tyfjKpHK_I7JMVpkfVYlw2ixxytofflpyYmW8F" />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-label-caps tracking-widest text-on-surface shadow-sm">
                                    EVENT
                                </div>
                            </div>
                            <div className="p-6 flex flex-col grow">
                                <div className="flex justify-between items-center mb-4 text-outline font-label-caps text-xs tracking-wider">
                                    <span>15 Okt 2024</span>
                                    <span className="material-symbols-outlined text-lg">send</span>
                                </div>
                                <h4 className="font-title-lg text-on-surface mb-3 line-clamp-2">Rekapitulasi Kegiatan Uswah Fair 2024: Syiar Tanpa Batas</h4>
                                <p className="font-body-md text-on-surface-variant opacity-80 line-clamp-3 mb-6">
                                    Simak rangkuman lengkap dari rangkaian kegiatan Uswah Fair 2024 yang telah berlangsung meriah, membawa semangat syiar Islam di lingkungan kampus.
                                </p>
                                <div className="mt-auto flex items-center gap-2 font-label-caps text-xs text-on-surface group-hover:text-primary transition-colors">
                                    Read Article <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                                </div>
                            </div>
                        </div>

                        {/* Info Item 3 */}
                        <div className="group cursor-pointer bg-white border border-outline-variant/30 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
                            <div className="aspect-video bg-surface-container relative">
                                <img alt="News 3" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALSh3sEt4q6kZf7oHaRJlWP1aA9DBoNGvD4keMBSE6Unt2IEP8eL2W9gj-JBdNrsYjJ0iOH5A1_gu1NB6sczxUY5iPNG4wfr7IRRcMxlzLt_LkEjiXOyJWBzurpFsLnUX6hCwRReAsZsE_jN5W7s9CWoQUxgO3BHikVkk__8vuZpu8csz0772ssjjO7WdBioOWmowS5gjT6tUyVeubDL7Y-YqtpXbMqNqb3lDfLjs4wKNxM-nk-Vtr" />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-label-caps tracking-widest text-on-surface shadow-sm">
                                    KAJIAN
                                </div>
                            </div>
                            <div className="p-6 flex flex-col grow">
                                <div className="flex justify-between items-center mb-4 text-outline font-label-caps text-xs tracking-wider">
                                    <span>02 Okt 2024</span>
                                    <span className="material-symbols-outlined text-lg">send</span>
                                </div>
                                <h4 className="font-title-lg text-on-surface mb-3 line-clamp-2">Kajian Rutin: Memahami Fiqh Kontemporer di Era Digital</h4>
                                <p className="font-body-md text-on-surface-variant opacity-80 line-clamp-3 mb-6">
                                    Mari tingkatkan pemahaman agama kita melalui kajian rutin minggu ini, membahas isu-isu fiqh kontemporer yang relevan dengan tantangan masa kini.
                                </p>
                                <div className="mt-auto flex items-center gap-2 font-label-caps text-xs text-on-surface group-hover:text-primary transition-colors">
                                    Read Article <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </main >
    )
};
