import Link from "next/link";
import React from "react";
import Image from "next/image";
import Tiktok from "../public/img/tiktok.png";
import Ig from "../public/img/ig.png";
import Yt from "../public/img/yt.png";
import Fb from "../public/img/fb.png";


const Footer = () => {
    return (
        <footer className="bg-[#14274E] py-14">
            <div className="container px-4">
                <div className="flex flex-wrap">
                    <div className="lg:w-[103px] w-full lg:mb-0 mb-6">
                        <h1 className="text-base font-medium mb-3 text-white">Program</h1>
                        <ul className="text-sm font-light text-white">
                            <li className="mb-1 hover:border-b-4 hover:border-[#6BFFBF]"><Link href="#">Bootcamp</Link></li>
                            <li className="mb-1 hover:border-b-4 hover:border-[#6BFFBF]"><Link href="#">Learning Path</Link></li>
                        </ul>
                    </div>
                    <div className="lg:w-[135px] w-full lg:mx-10">
                        <h1 className="text-base font-medium mb-3 text-white">Corporate</h1>
                        <ul className="text-sm font-light text-white">
                            <li className="hover:border-b-4 hover:border-[#6BFFBF]"><Link href="#">Corporate Training</Link></li>
                        </ul>
                    </div>
                    <div className="lg:w-[124px] w-full lg:mt-0 mt-6">
                        <h1 className="text-base font-medium mb-3 text-white">Tentang</h1>
                        <ul className="text-sm font-light text-white">
                            <li className="mb-1 hover:border-b-4 hover:border-[#6BFFBF]"><Link href="#">Perusahaan</Link></li>
                            <li className="mb-1 hover:border-b-4 hover:border-[#6BFFBF]"><Link href="#">Kontak</Link></li>
                            <li className="mb-1 hover:border-b-4 hover:border-[#6BFFBF]"><Link href="#">Karir</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="w-full mt-20 border-t border-white">
                    <div className="flex flex-wrap mt-4">
                        <div className="w-full lg:w-1/2 lg:flex lg:items-center">
                            <h3 className="text-sm font-light text-white">© Aplus 2024. Hak Cipta Dilindungi</h3>
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col lg:justify-end lg:right-0 lg:text-right lg:mt-0 mt-6">
                            <h3 className="text-sm font-light text-white mb-2">Ikuti Kami</h3>
                            <div className="flex lg:justify-end lg:right-0 lg:text-right">
                                <Link href="#" className="mr-2">
                                    <Image src={Tiktok} alt="tiktok" />
                                </Link>
                                <Link href="#" className="mr-2">
                                    <Image src={Ig} alt="ig" />
                                </Link>
                                <Link href="#" className="mr-2">
                                    <Image src={Yt} alt="yt" />
                                </Link>
                                <Link href="#">
                                    <Image src={Fb} alt="fb"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};


export default Footer;