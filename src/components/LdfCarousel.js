"use client";
import { useRef, useState } from "react";

export default function LdfCarousel() {
    const scrollContainerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        if (!scrollContainerRef.current) return;
        const container = scrollContainerRef.current;
        const scrollPosition = container.scrollLeft;
        const children = container.children;
        
        let minDistance = Infinity;
        let newIndex = 0;

        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            const distance = Math.abs(child.offsetLeft - scrollPosition);
            if (distance < minDistance) {
                minDistance = distance;
                newIndex = i;
            }
        }
        
        if (newIndex !== activeIndex) {
            setActiveIndex(newIndex);
        }
    };

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = container.children[0]?.offsetWidth || 250;
            const gap = 24;
            const scrollAmount = cardWidth + gap;
            
            container.scrollBy({
                left: direction === 'next' ? scrollAmount : -scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const scrollToCard = (index) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const children = container.children;
            if (children[index]) {
                const child = children[index];
                container.scrollTo({
                    left: child.offsetLeft,
                    behavior: 'smooth'
                });
            }
        }
    };

    const ldfs = [
        {
            id: 'AS',
            name: 'Asy-Syifaa',
            faculty: 'Kedokteran',
            desc: 'Mengintegrasikan nilai-nilai keislaman dalam dunia medis dan kesehatan mahasiswa kedokteran.',
            colorClass: 'text-primary-fixed-dim',
            textHover: 'group-hover:text-primary-fixed-dim',
            borderHover: 'hover:border-primary-fixed-dim/50',
            bgGradient: 'from-primary-fixed-dim/20',
            bgGradientHover: 'group-hover:from-primary-fixed-dim/40',
            iconBg: 'bg-primary-fixed/10',
            iconBgHover: 'group-hover:bg-primary-fixed/20',
            image: '/Logo asy-syifa.png',
            invertLogo: true
        },
        {
            id: 'AR',
            name: 'Ar-Risalah',
            faculty: 'Hukum',
            desc: 'Wadah pengkajian hukum Islam dan pembinaan moral bagi calon penegak keadilan.',
            colorClass: 'text-[#9dc775]',
            textHover: 'group-hover:text-[#9dc775]',
            borderHover: 'hover:border-[#9dc775]/50',
            bgGradient: 'from-[#9dc775]/20',
            bgGradientHover: 'group-hover:from-[#9dc775]/40',
            iconBg: 'bg-[#9dc775]/10',
            iconBgHover: 'group-hover:bg-[#9dc775]/20',
            image: '/Logo Ar-Risalah2025.png'
        },
        {
            id: 'AN',
            name: 'An-Nahl',
            faculty: 'Ekonomi & Bisnis',
            desc: 'Fokus pada pengembangan ekonomi syariah dan integritas profesional mahasiswa ekonomi.',
            colorClass: 'text-primary-fixed-dim',
            textHover: 'group-hover:text-primary-fixed-dim',
            borderHover: 'hover:border-primary-fixed-dim/50',
            bgGradient: 'from-primary-fixed-dim/20',
            bgGradientHover: 'group-hover:from-primary-fixed-dim/40',
            iconBg: 'bg-primary-fixed/10',
            iconBgHover: 'group-hover:bg-primary-fixed/20',
            image: '/Logo KSMI AN-NAHL .png'
        },
        {
            id: 'AJ',
            name: 'Al-Jihad',
            faculty: 'Teknik',
            desc: 'Membangun karakter insinyur muslim yang inovatif, solutif, dan tetap bertaqwa.',
            colorClass: 'text-[#9dc775]',
            textHover: 'group-hover:text-[#9dc775]',
            borderHover: 'hover:border-[#9dc775]/50',
            bgGradient: 'from-[#9dc775]/20',
            bgGradientHover: 'group-hover:from-[#9dc775]/40',
            iconBg: 'bg-[#9dc775]/10',
            iconBgHover: 'group-hover:bg-[#9dc775]/20',
            image: '/Logo ALJIHAD.png'
        },
        {
            id: 'AH',
            name: 'Al-Hakim',
            faculty: 'Ilmu Sosial & Politik',
            desc: 'Mengawal isu-isu sosial politik dari perspektif Islam yang moderat dan cerdas.',
            colorClass: 'text-primary-fixed-dim',
            textHover: 'group-hover:text-primary-fixed-dim',
            borderHover: 'hover:border-primary-fixed-dim/50',
            bgGradient: 'from-primary-fixed-dim/20',
            bgGradientHover: 'group-hover:from-primary-fixed-dim/40',
            iconBg: 'bg-primary-fixed/10',
            iconBgHover: 'group-hover:bg-primary-fixed/20',
            image: '/Logo FKI.png'
        }
    ];

    return (
        <div className="w-full relative">
            {/* The horizontal scroll container */}
            <div 
                ref={scrollContainerRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory custom-scrollbar pr-[50vw] md:pr-[20vw] pl-4 md:pl-0" 
            >
                {ldfs.map((ldf, i) => {
                    const isActive = i === activeIndex;
                    return (
                    <div 
                        key={i} 
                        className={`snap-start shrink-0 ${!isActive ? 'cursor-pointer select-none' : ''}`}
                        onClick={() => !isActive && scrollToCard(i)}
                    >
                        <div className={`w-[280px] md:w-[250px] group relative bg-white/5 hover:bg-white/10 border border-white/10 ${ldf.borderHover} backdrop-blur-md p-5 md:p-6 rounded-tl-[30px] rounded-br-[30px] rounded-tr-xl rounded-bl-xl transition-all duration-700 overflow-hidden flex flex-col ${isActive ? 'opacity-100' : 'opacity-40 grayscale-[50%] blur-[1px]'}`}>
                            <div className="flex justify-between items-start mb-4 relative z-10">
                                <div className="flex flex-col flex-1 pr-2">
                                    <h3 className={`font-headline-lg text-lg md:text-xl text-white uppercase ${ldf.textHover} transition-colors leading-tight`}>{ldf.name}</h3>
                                    <span className={`font-label-caps ${ldf.colorClass} text-[9px] md:text-[10px] uppercase tracking-widest mt-1 inline-block`}>{ldf.faculty}</span>
                                </div>
                                <div className="flex-shrink-0">
                                    <img src={ldf.image} alt={ldf.name} className={`h-12 w-12 md:h-14 md:w-14 object-contain opacity-90 group-hover:opacity-100 transition-all drop-shadow-md ${ldf.invertLogo ? 'brightness-0 invert' : ''}`} />
                                </div>
                            </div>
                            <p className="text-xs md:text-sm text-surface-dim/80 leading-relaxed relative z-10">
                                {ldf.desc}
                            </p>
                        </div>
                    </div>
                )})}
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 justify-end mt-4 pr-4">
                <button 
                    onClick={() => scroll('prev')}
                    className="w-14 h-14 rounded-full border-2 border-white/20 bg-white/5 hover:bg-white/20 hover:border-white/40 flex items-center justify-center text-white transition-all active:scale-95"
                    aria-label="Previous"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <button 
                    onClick={() => scroll('next')}
                    className="w-14 h-14 rounded-full border-2 border-white/20 bg-white/5 hover:bg-white/20 hover:border-white/40 flex items-center justify-center text-white transition-all active:scale-95"
                    aria-label="Next"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
            </div>
        </div>
    );
}
