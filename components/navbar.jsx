"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../public/img/logo.svg";
import Link from "next/link";
import { HiX, HiMenu } from "react-icons/hi";

const Navbar = () => {

    const [show, setShow] = useState(false);
    return (
        <div className="fixed w-full lg:px-10 px-4 bg-[#F1F6F9] py-4 flex justify-between items-center">
            <Image src={logo} alt="logo" width={40} height={40} />
            <div className="flex items-center bg-transparent border-[#AFB1B6] max-w-max border rounded-lg py-[10px] px-2 lg:ml-10 mr-16">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#AFB1B6] mr-2" viewBox="0 0 24 24"><path fill="currentcolor" d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989t-1.96.35q-2.402 0-4.066-1.663T3.808 9.503T5.47 5.436t4.064-1.667t4.068 1.664T15.268 9.5q0 1.042-.369 2.017t-.97 1.668l6.262 6.261zM9.539 14.23q1.99 0 3.36-1.37t1.37-3.361t-1.37-3.36t-3.36-1.37t-3.361 1.37t-1.37 3.36t1.37 3.36t3.36 1.37"/></svg>
                <input type="text" placeholder="Mau belajar apa hari ini?" className="text-[#AFB1B6] text-base font-light bg-transparent"></input>
            </div>

            <HiMenu 
                size={30}
                className="text-[#14274E] absolute top-7 right-7 cursor-pointer lg:hidden"
                onClick={(prev) => setShow(!prev.show)} />
            <div className={`fixed lg:relative bg-[#F1F6F9] top-0 w-full h-auto ${ show ? "right-0" : "-right-full"} lg:right-0 flex gap-10 flex-col lg:flex-row justify-center lg:justify-end items-center`}>
                <HiX 
                    size={30}
                    className="text-[#14274E] absolute top-7 right-7 cursor-pointer lg:hidden"
                    onClick={() => setShow(false)} />
                <Link href="#" className="hover:border-b-[#6BFFBF] hover:border-b-4 text-[#14274E]">Program</Link>
                <Link href="#" className="hover:border-b-[#6BFFBF] hover:border-b-4 text-[#14274E]">Corporate</Link>
                <Link href="#" className="hover:border-b-[#6BFFBF] hover:border-b-4 text-[#14274E]">Tentang</Link>
                <Link href="#" className="bg-[#14274E] max-w-max text-white py-3 px-4 text-base font-medium">Masuk</Link>
                <Link href="#" className="bg-transparent border border-[#14274E] max-w-max text-[#14274E] py-3 px-4 text-base font-medium">Daftar</Link>
            </div>
        </div>
    )
}


export default Navbar;