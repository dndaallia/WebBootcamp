"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";

function Contact () {
    const [isOpen, setIsOpen] = useState(false);
        const [selectedOption, setSelectedOption] = useState("Pilih Kategori");
      
        // Opsi menu dropdown
        const menuOptions = ["Langganan", "Corporate"];
      
        // Fungsi untuk toggle dropdown
        const toggleDropdown = () => setIsOpen(!isOpen);
      
        // Fungsi untuk memilih opsi
        const handleOptionClick = (option) => {
          setSelectedOption(option); // Set teks tombol dengan opsi yang dipilih
          setIsOpen(false); // Tutup dropdown
            };
    return (
        <div className="bg-white py-14">
            <div className="container px-4">
                <div className="mx-auto text-center mb-10">
                    <h1 className="text-[32px] font-normal text-[#262627]">Tunggu Apalagi</h1>
                    <p className="text-2xl font-light text-[#262627] mt-2">Tingkatkan skill Anda dengan Aplus. Hubungi kami untuk informasi lebih lanjut</p>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 lg:mb-0 mb-4">
                        <div className="flex items-center bg-white rounded-lg border border-[#afb1b6] py-[10px] px-3">
                            <HiOutlineMail size={24} />
                            <input type="email" placeholder="Masukan email anda" className="w-full text-[#afb1b6] text-base font-light pl-2 focus:outline-none"></input>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 lg:pl-2">
                        <div className="relative inline-block items-center text-left bg-white rounded-lg border border-[#afb1b6] w-full py-[10px]">
                            <div className="flex">
                                <div className="mr-2 ml-3 flex items-center">
                                    <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="w-6 h-6 text-[#14274E]" 
                                    viewBox="0 0 24 24">
                                        <path fill="currentColor" 
                                        d="M6.5 11L12 2l5.5 9zm11 11q-1.875 0-3.187-1.312T13 17.5t1.313-3.187T17.5 13t3.188 1.313T22 17.5t-1.312 3.188T17.5 22M3 21.5v-8h8v8zM17.5 20q1.05 0 1.775-.725T20 17.5t-.725-1.775T17.5 15t-1.775.725T15 17.5t.725 1.775T17.5 20M5 19.5h4v-4H5zM10.05 9h3.9L12 5.85zm7.45 8.5"/>
                                    </svg>
                                </div>
                                <div>
                                    {/* Button untuk membuka dropdown */}
                                    <button
                                        onClick={toggleDropdown}
                                        className="inline-flex justify-between w-full pl-2 items-center text-sm font-medium text-[#AFB1B6] bg-white rounded-md"
                                    >
                                        
                                        {selectedOption}
                                        <svg
                                        className="w-6 h-6 ml-2 -mr-1 text-[#14274E]"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                        </svg>
                                    </button>

                                    {/* Dropdown menu */}
                                    {isOpen && (
                                        <div
                                        className="absolute w-full mt-2 bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                        role="menu"
                                        >
                                        <div className="py-1" role="none">
                                            {menuOptions.map((option, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleOptionClick(option)}
                                                className="text-[#AFB1B6] block w-full px-4 py-2 text-left text-sm hover:bg-[#14274E]"
                                                role="menuitem"
                                            >
                                                {option}
                                            </button>
                                            ))}
                                        </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="w-full mt-4">
                    <div className="bg-white w-full rounded-lg h-[100px] border border-[#afb1b6] pt-[10px] pl-3 pr-4">
                        <input type="text" placeholder="Pesan" className="w-full text-[#afb1b6] text-base font-light focus:outline-none"></input>
                    </div>
                    
                </div>
                <div className="flex lg:justify-end lg: right-0 mt-4">
                <Link href="#" className="w-[102px] h-[48px] py-3 px-4 bg-[#14274E] rounded-[3px] text-white text-base font-medium text-center">Kirim</Link>
                </div>
            </div>
        </div>
    );
};
        


export default Contact;