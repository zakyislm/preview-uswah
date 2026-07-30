import Link from "next/link";
import Image from "next/image";

export default function News() {
  return (
    <main className="relative min-h-screen overflow-hidden pt-32">
        {/* Background Ornaments */}
        <div className="absolute top-20 -right-20 w-96 h-96 bg-primary-container rounded-full blurred-ornament"></div>
        <div className="absolute bottom-40 -left-20 w-80 h-80 bg-secondary-container rounded-full blurred-ornament"></div>
        
        {/* Hero Section */}
        <section className="px-margin-desktop pt-24 pb-16 relative z-10">
            <div className="max-w-4xl">
                <h1 className="font-headline-xl text-headline-xl text-primary mb-6">INFORMASI &amp; BERITA</h1>
                <div className="asymmetric-grid-step border-l-4 border-primary pl-8 py-2">
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                        Keep up with the spiritual pulse of UPNVJ. Get the latest announcements, event summaries, and
                        intellectual reflections from Kabinet Qitharah 26.
                    </p>
                </div>
            </div>
        </section>

        {/* Featured News */}
        <section className="px-margin-desktop mb-24 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 relative">
                <div className="md:col-span-7 aspect-[16/9] bg-primary relative overflow-hidden group">
                    <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4wpmfktF5zWelxvIxvKzKkxRk6mj-2GLELZ6pZ5oWYrsXTk9yhy2z6mil48-oyu0i0-U1drVBN7bRIOWm7J9bGMxzEI7M2SNan7ta217O1wr189ZRorwDgNpS_yAPrnKufrP4mMBX_ESvN93q1E1OdyZVevTWjwqdraLn5vlGExZqugkA8tLn_Qa5WOoO7f80YNd26kUG9IXQXhPrkL1hXptMkGWF4rpjpZhNz8VoqxWykKf80j9P" />
                    <div className="absolute top-0 left-0 p-6">
                        <span className="bg-primary text-white font-label-caps px-4 py-1">Featured Announcement</span>
                    </div>
                </div>
                <div className="md:col-span-5 bg-white p-12 flex flex-col justify-center border-t md:border-t-0 md:border-l border-on-surface">
                    <p className="font-label-caps text-primary mb-4">October 24, 2024</p>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Grand Launching Kabinet Qitharah 26: Resonansi Dakwah Kampus</h2>
                    <p className="font-body-md text-on-surface-variant mb-8">Welcoming a new era of spiritual leadership and academic excellence. Read about our vision for the upcoming year and the key programs we are launching to serve the UPNVJ community.</p>
                    <a className="inline-flex items-center gap-2 font-label-caps text-primary group" href="#">
                        Read the Full Article
                        <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                    </a>
                </div>
            </div>
        </section>

        {/* Search and Filter Bar */}
        <section className="px-margin-desktop mb-12 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end gap-gutter border-b border-outline-variant pb-4">
                <div className="flex flex-wrap gap-6">
                    <button className="font-label-caps text-primary border-b-2 border-primary pb-1">All News</button>
                    <button className="font-label-caps text-on-surface-variant hover:text-primary transition-colors">Event</button>
                    <button className="font-label-caps text-on-surface-variant hover:text-primary transition-colors">Kajian</button>
                    <button className="font-label-caps text-on-surface-variant hover:text-primary transition-colors">Article</button>
                    <button className="font-label-caps text-on-surface-variant hover:text-primary transition-colors">Press Release</button>
                </div>
                <div className="w-full md:w-80 relative group">
                    <input className="w-full bg-transparent border-0 border-b-2 border-primary focus:ring-0 px-0 py-2 font-body-md placeholder:text-outline" placeholder="Search archives..." type="text" />
                    <span className="material-symbols-outlined absolute right-0 top-2 text-primary">search</span>
                </div>
            </div>
        </section>

        {/* News Grid */}
        <section className="px-margin-desktop mb-24 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-gutter gap-y-16">
                {/* Card 1 */}
                <article className="flex flex-col">
                    <div className="aspect-[4/3] bg-surface-container-high mb-6 overflow-hidden relative border border-on-surface">
                        <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDipYxccnnLNED-z-Ck18hrZomsWkc68JxL_9glHgzKYcKPdc2LfHYvxk3cX7rLQrygwP-PYTK98CwVfWWn6W2R7aN9ixkt5JENE8uD8bJR3I6_gKLc6MEL-OLwPTTo6XNu0Uk4_QzgVBi42ZNi2ZO-RMZVGnuqHYNvaXSiuZr9_VWW5aQWZpUbuMaGzS2XRlOMqTzHI9h_IpR2oyYbbjIy1MRMw34gs9jBliUmBpVfQhRRDgapCvpR" />
                        <div className="absolute top-4 right-4">
                            <span className="bg-white/90 backdrop-blur-md text-on-surface font-label-caps px-3 py-1 border border-on-surface">Article</span>
                        </div>
                    </div>
                    <div className="flex-1">
                        <p className="font-label-caps text-outline-variant mb-2">Oct 20, 2024</p>
                        <h3 className="font-title-md text-title-md text-on-surface mb-3 hover:text-primary transition-colors cursor-pointer">Menyeimbangkan Akademik dan Dakwah: Tips Mahasiswa Muslim</h3>
                        <p className="font-body-md text-on-surface-variant mb-4 line-clamp-3">Bagaimana cara mengatur waktu di tengah padatnya jadwal kuliah dan organisasi? Simak tips praktis dari rekan-rekan pengurus LDK Uswah...</p>
                    </div>
                    <a className="font-label-caps text-primary flex items-center gap-1 group" href="#">
                        Read More <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">north_east</span>
                    </a>
                </article>
                
                {/* Card 2 */}
                <article className="flex flex-col mt-12 md:mt-0">
                    <div className="aspect-[4/3] bg-surface-container-high mb-6 overflow-hidden relative border border-on-surface">
                        <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUFks56Ih9UFuMkkHkPQ1u_E7vCFdH4uDo2Rsrda5vJaQHyRm3kxEBdkfEzt81K_gQz_wRKarnvCOhBdVwRjUwrHN1QfkhpwRsbFppTDOHqW87YdxgYfDvg2aAZDUsl8KB4QbyKcoWT4my-C0pS3HlGQppdW84iPk2npFhsPi5YZvNfnDUIDSdkXKY7Uvgkpt67cQBGQ9qU3A5oken3EmiEw54_5C-qi6_Az7voQ_ljPSSwNOz40jz" />
                        <div className="absolute top-4 right-4">
                            <span className="bg-white/90 backdrop-blur-md text-on-surface font-label-caps px-3 py-1 border border-on-surface">Event</span>
                        </div>
                    </div>
                    <div className="flex-1">
                        <p className="font-label-caps text-outline-variant mb-2">Oct 18, 2024</p>
                        <h3 className="font-title-md text-title-md text-on-surface mb-3 hover:text-primary transition-colors cursor-pointer">Seminar Keislaman: Islam &amp; Modernitas di Era Digital</h3>
                        <p className="font-body-md text-on-surface-variant mb-4 line-clamp-3">Mengahadirkan pembicara nasional, seminar ini membahas tantangan dan peluang dakwah kreatif bagi generasi Z di lingkungan kampus.</p>
                    </div>
                    <a className="font-label-caps text-primary flex items-center gap-1 group" href="#">
                        READ MORE <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">north_east</span>
                    </a>
                </article>

                {/* Card 3 */}
                <article className="flex flex-col">
                    <div className="aspect-[4/3] bg-surface-container-high mb-6 overflow-hidden relative border border-on-surface">
                        <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzixyIwatxNMGnStHQzLdVA5H4MWRMQPwq07GZjjCepKP2XErrvaMRQqx6J0vbFGt4wcuad2ewF57B6X_wNGWigifZ5GzUx23fM8Zd7xYvi3AEeWWvtdLSr4A8VjhgoJCPpVfBTvbOpi8gm-FXwo0VeG_1vlzP7B0fQEK7HeJIRrpbOfMuBx0u9ahAh6MuMCkLyT15vodshu8cbuEijfSss0-h_J4l0IcOPWJhMRF5lCy0FOZ8bjMO" />
                        <div className="absolute top-4 right-4">
                            <span className="bg-white/90 backdrop-blur-md text-on-surface font-label-caps px-3 py-1 border border-on-surface">Kajian</span>
                        </div>
                    </div>
                    <div className="flex-1">
                        <p className="font-label-caps text-outline-variant mb-2">Oct 15, 2024</p>
                        <h3 className="font-title-md text-title-md text-on-surface mb-3 hover:text-primary transition-colors cursor-pointer">Kajian Rutin: Memahami Adab dalam Menuntut Ilmu</h3>
                        <p className="font-body-md text-on-surface-variant mb-4 line-clamp-3">Ringkasan kajian pekanan mengenai pentingnya menjaga adab sebelum ilmu, berdasarkan kitab-kitab klasik ulama terdahulu.</p>
                    </div>
                    <a className="font-label-caps text-primary flex items-center gap-1 group" href="#">
                        READ MORE <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">north_east</span>
                    </a>
                </article>

                {/* Card 4 */}
                <article className="flex flex-col">
                    <div className="aspect-[4/3] bg-surface-container-high mb-6 overflow-hidden relative border border-on-surface">
                        <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhapTM0fWT_Rd5tAV6fgwDoy1EmQGM8KkcSH-y5WyCURzIZjeqlO1-pZAlOgT7u2AyeNkFWjiycrh2aDeyKopZw1KedYalPTFQmeEHWLf77lXtAtmmeZm0kCh2CVz1EjVnSSot5eEPKPNWpR3-qOn1wzXEhigBE8_SaEmdbzB_5-LXS1AFQCu5OqRJjuyuGDsjb-pZ3jYaOI7yDhpPcWD80Y5-a3X3l9EZBDB5vCQAH8YcnnCsubv4" />
                        <div className="absolute top-4 right-4">
                            <span className="bg-white/90 backdrop-blur-md text-on-surface font-label-caps px-3 py-1 border border-on-surface">Press Release</span>
                        </div>
                    </div>
                    <div className="flex-1">
                        <p className="font-label-caps text-outline-variant mb-2">Oct 12, 2024</p>
                        <h3 className="font-title-md text-title-md text-on-surface mb-3 hover:text-primary transition-colors cursor-pointer">Pernyataan Sikap LDK Uswah Terkait Isu Kemanusiaan Global</h3>
                        <p className="font-body-md text-on-surface-variant mb-4 line-clamp-3">LDK Uswah UPNVJ secara resmi mengeluarkan pernyataan sikap dan ajakan solidaritas untuk membantu saudara kita yang tertimpa musibah.</p>
                    </div>
                    <a className="font-label-caps text-primary flex items-center gap-1 group" href="#">
                        READ MORE <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">north_east</span>
                    </a>
                </article>

                {/* Card 5 (Offset Layout) */}
                <article className="flex flex-col mt-12 md:mt-24">
                    <div className="aspect-[4/3] bg-surface-container-high mb-6 overflow-hidden relative border border-on-surface">
                        <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaPOhcgekXb2XnDQkMmnqUx9PN9UVQOFB7JPY5iHreGFXuC-A9xjYWRnHEWmZGJFIAyOwSxM4lDSLIKcXa4PozNNOdNuj7eDMQwQXVWEg759pA9cVWYvvG-3ot_fWMnPrvyqF9jZrdT5RAy_OSIuSxt93Zg3D5jq2zV75GDdf8S-dbXyzgkSCdfMgH5iygNjhgzMucss7N50P9ducTWcMzn9-NNhGH-rhDmjHUM5TZXdrYDioir7Iz" />
                        <div className="absolute top-4 right-4">
                            <span className="bg-white/90 backdrop-blur-md text-on-surface font-label-caps px-3 py-1 border border-on-surface">Event</span>
                        </div>
                    </div>
                    <div className="flex-1">
                        <p className="font-label-caps text-outline-variant mb-2">Oct 10, 2024</p>
                        <h3 className="font-title-md text-title-md text-on-surface mb-3 hover:text-primary transition-colors cursor-pointer">Social Act: Bakti Sosial Serentak di Lingkungan Kampus</h3>
                        <p className="font-body-md text-on-surface-variant mb-4 line-clamp-3">Rangkuman kegiatan sosial yang melibatkan ratusan mahasiswa UPNVJ dalam aksi nyata membantu masyarakat sekitar.</p>
                    </div>
                    <a className="font-label-caps text-primary flex items-center gap-1 group" href="#">
                        READ MORE <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">north_east</span>
                    </a>
                </article>

                {/* Card 6 */}
                <article className="flex flex-col">
                    <div className="aspect-[4/3] bg-surface-container-high mb-6 overflow-hidden relative border border-on-surface">
                        <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZiWHJMSyyLyVz2hdOspDA_z69MSIx1PlyLNyB55PCjfUBaQXIdVGv89XAPjz4_dg4LUPpAntaVAfYtVCxaBwMijrTfKysITx_0mqTRLFk3_vMBgE2Qh2_DFqAu_tFLyo_BedL95mGZdCa0hqYRzdQiJnWcuguovD409YxQuDS3LqMom6uiIoCrkUQOIAhEmy2suGZvJjxEtXeNOnIyZv_J2uT_LCfNdvELFoI8gCDujssh4YsB08i" />
                        <div className="absolute top-4 right-4">
                            <span className="bg-white/90 backdrop-blur-md text-on-surface font-label-caps px-3 py-1 border border-on-surface">Article</span>
                        </div>
                    </div>
                    <div className="flex-1">
                        <p className="font-label-caps text-outline-variant mb-2">Oct 05, 2024</p>
                        <h3 className="font-title-md text-title-md text-on-surface mb-3 hover:text-primary transition-colors cursor-pointer">Refleksi: Menemukan Ketenangan di Tengah Hiruk Pikuk Kuliah</h3>
                        <p className="font-body-md text-on-surface-variant mb-4 line-clamp-3">Tulisan reflektif tentang menjaga kesehatan mental dan spiritual sebagai mahasiswa di era informasi yang sangat cepat.</p>
                    </div>
                    <a className="font-label-caps text-primary flex items-center gap-1 group" href="#">
                        READ MORE <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">north_east</span>
                    </a>
                </article>
            </div>
        </section>

        {/* Pagination */}
        <section className="px-margin-desktop mb-24 flex justify-center relative z-10">
            <button className="bg-white text-primary border border-on-surface px-12 py-4 font-label-caps brutalist-button flex items-center gap-3 group">
                Load More Posts
                <span className="material-symbols-outlined group-hover:rotate-180 transition-transform duration-500">expand_more</span>
            </button>
        </section>

        {/* CTA Section */}
        <section className="px-margin-desktop mb-24 relative z-10">
            <div className="bg-on-surface text-surface-bright p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
                    <svg className="w-full h-full fill-current" viewBox="0 0 100 100">
                        <path d="M0 0 L100 0 L100 100 Z"></path>
                    </svg>
                </div>
                <div className="relative z-10 max-w-2xl">
                    <h2 className="font-headline-lg text-headline-lg mb-6">SUBSCRIBE TO OUR NEWSLETTER</h2>
                    <p className="font-body-lg text-body-lg opacity-80 mb-8">Never miss an update. Get the monthly summary of activities and exclusive articles directly in your inbox.</p>
                    <form className="flex flex-col md:flex-row gap-4">
                        <input className="flex-1 bg-white/10 border-0 border-b-2 border-primary focus:ring-0 text-white placeholder:text-white/50 py-4 px-4" placeholder="Your academic email" type="email" />
                        <button className="bg-primary text-white font-label-caps px-12 py-4 brutalist-button border-on-surface">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    </main>
  );
}
