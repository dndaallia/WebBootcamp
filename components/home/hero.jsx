import Link from "next/link";
import React from "react";
import Image from "next/image";
import imghero from "../../public/img/ilustrationhero.png";


const Hero = () => {
    return (
        <div className="py-14 bg-[#F1F6F9]">
            <div className="container items-center lg:px-0 px-4">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 flex flex-col self-center order-2 lg:order-1 mt-10 lg:mt-0">
                        <h1 className="text-[64px] font-light text-[#14274e] leading-[72px] mb-7 lg:max-w-[409px]">Upgrade skill Anda hari ini!</h1>
                        <p className="text-base font-light text-[#14274e] mb-14 lg:max-w-[409px]">Yuk, mulai belajar di A<span className="font-medium">Plus!</span> Temukan berbagai materi menarik dan pelajari keterampilan baru untuk mendukung perkembangan diri Anda. Belajar jadi lebih mudah dan menyenangkan bersama kami!</p>
                        <Link href="#" className="bg-[#14274e] rounded-sm max-w-max py-3 px-4 text-white text-base font-medium">Belajar Sekarang</Link>
                    </div>
                    <div className="w-full lg:w-1/2 lg:max-w-[656px] flex items-center justify-center lg:justify-end order-1 lg:order-2">
                        <Image src={imghero} alt="hero" className="w-[288px] h-[234px] lg:w-[656px] lg:h-[534px]" />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Hero;