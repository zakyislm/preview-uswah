import { clsx } from "clsx";

export default function LDF() {
  return (
    <main className="pt-32">
        {/* Hero Section */}
        <section className="px-margin-desktop mb-32 relative">
            <div className="absolute -top-10 -left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="grid grid-cols-12 gap-gutter transition-all duration-1000 opacity-100">
                <div className="col-span-12 md:col-span-8">
                    <h1 className="font-headline-xl text-headline-xl uppercase mb-8">
                        LEMBAGA DAKWAH<br />
                        <span className="text-outline">FAKULTAS</span>
                    </h1>
                    <div className="asymmetric-border md:ml-asymmetric-offset">
                        <p className="font-body-lg text-body-lg max-w-2xl text-on-surface-variant">
                            LDK Uswah UPNVJ serves as the central umbrella organization, fostering spiritual growth and
                            intellectual leadership across five specialized faculty branches. Each LDF tailors the
                            message of Islam to meet the unique ethical and professional challenges of their respective
                            disciplines.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Directory Section */}
        <section className="px-margin-desktop space-y-48 pb-32">
            {/* LDF 1: ASY-SYIFAA */}
            <div className="grid grid-cols-12 gap-gutter group transition-all duration-1000 opacity-100">
                <div className="col-span-12 md:col-span-5 relative">
                    <div className="aspect-square bg-surface-container relative border border-primary/20 overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ2lYJ5y7sUildR5Lp5yjpChpXNe7xJCO3pEkbJevtvukSiyciPQ9NRlFjSdwih3TP_-haPFSDHCmIQQbCh7BXQkLozCItFssMsVFZlEe_YNt20k0OMuEIP90gB6n57Z5ruNqmC9MR2aeJzcoZgoPuzu4mh1zMgWOmOqOOGldVJvOSaOcS_-OWnnXjpQFaN5F0gu43ONU5dCJvuUTnxhX0tbBKjISmZGk0J6dlMrq9lCuq5FNRSkia" />
                        <div className="absolute bottom-0 left-0 bg-primary text-on-primary px-4 py-2 font-label-caps text-label-caps">
                            Est. Medicine</div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-7 flex flex-col justify-center md:pl-asymmetric-offset">
                    <span className="font-label-caps text-label-caps text-primary mb-4 block">Faculty of Medicine</span>
                    <h2 className="font-headline-lg text-headline-lg mb-6 group-hover:translate-x-4 transition-transform duration-500">ASY-SYIFAA</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                        Dedicated to integrating Islamic values into the medical profession. Asy-Syifaa focuses on medical ethics, holistic healing, and serving the community through the lens of prophetic medicine.
                    </p>
                    <div className="border-t border-primary/20 pt-6">
                        <p className="font-label-caps text-label-caps text-on-surface-variant mb-2">Primary Mission</p>
                        <p className="font-title-md text-title-md italic">"Fostering doctors with divine integrity and professional excellence."</p>
                    </div>
                </div>
            </div>
            
            {/* LDF 2: AR-RISALAH */}
            <div className="grid grid-cols-12 gap-gutter group flex-row-reverse transition-all duration-1000 opacity-100">
                <div className="col-span-12 md:col-span-7 flex flex-col justify-center items-end md:pr-asymmetric-offset text-right">
                    <span className="font-label-caps text-label-caps text-primary mb-4 block">Faculty of Law</span>
                    <h2 className="font-headline-lg text-headline-lg mb-6 group-hover:-translate-x-4 transition-transform duration-500">AR-RISALAH</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed max-w-xl">
                        A forum for legal thinkers to explore the synergy between civil law and Sharia principles. Ar-Risalah advocates for justice, human rights, and ethical governance within the legal framework of Indonesia.
                    </p>
                    <div className="border-t border-primary/20 pt-6 w-full">
                        <p className="font-label-caps text-label-caps text-on-surface-variant mb-2">Primary Mission</p>
                        <p className="font-title-md text-title-md italic">"Upholding justice through the balance of law and spirituality."</p>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-5">
                    <div className="aspect-square bg-surface-container relative border border-primary/20 overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsCT7Zbj4EHEh24qFoMGNCb8dE28npHZqBo8N0dD6fqblTF1xSVOFoyEWpSvq4mL0oIPVzwrxAttVf9td6ffL9yfAYDWeeRnNTEp0dSSIFRTW4pSdOEf232NBeAsYGCV5fJwPjlJHvIuLrujsr9rE_XuV48grr0vOhxJWNsR5w_UT-5UtujSvkIXIteAZiylAd_nKahB95S8yoYdFKmKFSUOnUaynr29rduzZZCFbi4kM_OZFSqwOx" />
                        <div className="absolute bottom-0 right-0 bg-primary text-on-primary px-4 py-2 font-label-caps text-label-caps">
                            Est. Law</div>
                    </div>
                </div>
            </div>
            
            {/* LDF 3: AN-NAHL */}
            <div className="grid grid-cols-12 gap-gutter group transition-all duration-1000 opacity-100">
                <div className="col-span-12 md:col-span-5 relative">
                    <div className="aspect-square bg-surface-container relative border border-primary/20 overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpYsX7e_g826XnCVIQKLtI4xloiY2NBnS0ybHEtFW__L4rJBgaXXIw7RrPFHTTGe1cbcPabX46AHUFWgE3i6b36L9DqckFE1e-lUHl-Eonr2q4PzStn2LV-qmHuqqEXaKKSnKgM5ZeqM92xkepEbn6_6bhVsaHLlSchSFw1R-WMnP4s2HUybQH7rcfHDLPwPnquQh8tRXl4RW4crC5OQ7LVKFrD1Y-EhG_hiiaEJcZgSFLh8x6SvUF" />
                        <div className="absolute bottom-0 left-0 bg-primary text-on-primary px-4 py-2 font-label-caps text-label-caps">
                            Est. Economics</div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-7 flex flex-col justify-center md:pl-asymmetric-offset">
                    <span className="font-label-caps text-label-caps text-primary mb-4 block">Faculty of Economics &amp; Business</span>
                    <h2 className="font-headline-lg text-headline-lg mb-6 group-hover:translate-x-4 transition-transform duration-500">AN-NAHL</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                        Inspired by the bee (An-Nahl), this organization promotes collective growth and ethical business practices. Focusing on Sharia economics and entrepreneurship that benefits the Ummah.
                    </p>
                    <div className="border-t border-primary/20 pt-6">
                        <p className="font-label-caps text-label-caps text-on-surface-variant mb-2">Primary Mission</p>
                        <p className="font-title-md text-title-md italic">"Building an ethical economy through collaborative excellence."</p>
                    </div>
                </div>
            </div>
            
            {/* LDF 4: AL-JIHAD */}
            <div className="grid grid-cols-12 gap-gutter group flex-row-reverse transition-all duration-1000 opacity-100">
                <div className="col-span-12 md:col-span-7 flex flex-col justify-center items-end md:pr-asymmetric-offset text-right">
                    <span className="font-label-caps text-label-caps text-primary mb-4 block">Faculty of Engineering</span>
                    <h2 className="font-headline-lg text-headline-lg mb-6 group-hover:-translate-x-4 transition-transform duration-500">AL-JIHAD</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed max-w-xl">
                        Pioneering the intersection of technology and faith. Al-Jihad prepares future engineers to build a world that is not only technologically advanced but also sustainable and divinely inspired.
                    </p>
                    <div className="border-t border-primary/20 pt-6 w-full">
                        <p className="font-label-caps text-label-caps text-on-surface-variant mb-2">Primary Mission</p>
                        <p className="font-title-md text-title-md italic">"Engineering a future built on technological wisdom and faith."</p>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-5">
                    <div className="aspect-square bg-surface-container relative border border-primary/20 overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATnoy3BO4jIGAD9v3mU0b9rm1Cblp9MqmTRr0ohyH_jcgDGhX4P3jjNSfhO4HZTI0KJF-67mvyKKWeq7jszn56-5Y8AtE9cnjxp5mixZhJ1OCIVAt49m3G4pL4zlouk_5FXsdWXpjnyeVTAPSha6x3Y6avOfTb8BTHQDJJPlslf_qxAbQMkBB4MGZspeplDSYQePAd76URarJjcXqWpqw5SbxGmIhW281GR1G1d0SovZ1dL5OaA315" />
                        <div className="absolute bottom-0 right-0 bg-primary text-on-primary px-4 py-2 font-label-caps text-label-caps">
                            Est. Engineering</div>
                    </div>
                </div>
            </div>
            
            {/* LDF 5: AL-HAKIM */}
            <div className="grid grid-cols-12 gap-gutter group transition-all duration-1000 opacity-100">
                <div className="col-span-12 md:col-span-5 relative">
                    <div className="aspect-square bg-surface-container relative border border-primary/20 overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATgx-DwuZbaYBuHk5Co7j36HEymjq7ujQHDX-cxDw5aCkybPTo5_ECdeVzeV2n_4pK0iodVE5wPE6gCef-bd5q_M6fIhtzpMDLISOUfniNDiH01ge9zIXzzGj6k6Q_Ve-swnlJQGMnmxd9X5-ezAo_bXcCH3tf-wo4kfhP96a74T7UftqzEiAMw7Qx4qkGR2wgqV22nRqh7ldTii5UK9j5MNafviaVu4lDzi7dOMAsaICK5hnie5n7" />
                        <div className="absolute bottom-0 left-0 bg-primary text-on-primary px-4 py-2 font-label-caps text-label-caps">
                            Est. Social Sciences</div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-7 flex flex-col justify-center md:pl-asymmetric-offset">
                    <span className="font-label-caps text-label-caps text-primary mb-4 block">Faculty of Social &amp; Political Sciences</span>
                    <h2 className="font-headline-lg text-headline-lg mb-6 group-hover:translate-x-4 transition-transform duration-500">AL-HAKIM</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                        Fostering wisdom in social and political leadership. Al-Hakim encourages students to engage with society through critical thinking, empathy, and Islamic governance principles.
                    </p>
                    <div className="border-t border-primary/20 pt-6">
                        <p className="font-label-caps text-label-caps text-on-surface-variant mb-2">Primary Mission</p>
                        <p className="font-title-md text-title-md italic">"Cultivating wise leadership for a just and harmonious society."</p>
                    </div>
                </div>
            </div>
        </section>
        
        {/* CTA Section */}
        <section className={clsx(
          "bg-surface-container py-32 px-margin-desktop",
          "text-on-surface text-center"
        )}>
            <h2 className="font-headline-lg text-headline-lg mb-8 uppercase">Ready to find your path?</h2>
            <p className="font-body-lg text-body-lg mb-12 max-w-2xl mx-auto text-on-surface-variant">
                Join the LDF within your faculty and start your journey of spiritual and professional development today.
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
                <button className="px-8 py-4 bg-primary text-on-primary font-label-caps text-label-caps brutalist-button border border-on-surface">Contact Coordinator</button>
                <button className="px-8 py-4 bg-transparent text-primary border-2 border-primary font-label-caps text-label-caps transition-all hover:bg-primary hover:text-on-primary">Learn More</button>
            </div>
        </section>
    </main>
  );
}
