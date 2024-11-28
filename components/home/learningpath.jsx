"use client";
import Link from "next/link";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function LearningPath () {

    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0); // Menyimpan indeks slide saat ini

    const settings = {
        className: "center",
        infinite: false, 
        centerPadding: "60px",
        slidesToShow: 2,
        swipeToSlide: true,
        afterChange: function(index) {
            setCurrentSlide(index); // Memperbarui indeks slide saat ini
            console.log(`Current slide index: ${index}`);
        }
    };

    const goToPrev = () => {
        console.log("Going to previous slide");
        if (sliderRef.current) {
            const newIndex = currentSlide === 0 ? data.length - 1 : currentSlide - 1;
            console.log(`Moving to slide index: ${newIndex}`);
            sliderRef.current.slickGoTo(newIndex);
        } 
    };
    
    const goToNext = () => {
        console.log("Going to next slide");
        if (sliderRef.current) {
            const newIndex = currentSlide === data.length - 1 ? 0 : currentSlide + 1;
            console.log(`Moving to slide index: ${newIndex}`);
            sliderRef.current.slickGoTo(newIndex);
        }
    };

    return (
        <div className="bg-[#f1f6f9]">
            <div className="container py-14 lg:px-0 px-4">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-[528px] mr-[72px] flex flex-col self-center">
                        <h1 className="text-[32px] font-normal text-[#262627]">Learning Path</h1>
                        <p className="text-2xl font-light text-[#262627] mt-4">Mulailah perjalanan belajar Anda di Learning Path Aplus! Tingkatkan pengetahuan dan keterampilan dengan panduan terstruktur untuk mencapai tujuan Anda. Yuk, belajar bersama sekarang!</p>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <Link href="#" className="text-sm font-medium text-[#14274e] flex right-0 text-right justify-end lg:mb-16 mb-6 lg:mt-0 mt-6">
                            Lihat Selengkapnya 
                        </Link>
                        <div className="flex flex-row overflow-hidden slider-container">
                            <div className="w-full">
                            <Slider ref={sliderRef} {...settings}>
                                {data.map((d) => (
                                    <div className="gap-8">
                                        <div key={d.name} className="h-[380px]" style={{ margin: "0 24px" }}>
                                            <div className="h-[380px] absolute overflow-hidden object-cover">
                                                <img src={d.img} alt="" className="w-full"/>
                                            </div>
                                            
                                            <div className="relative mx-auto bottom-0 text-center flex items-end self-end w-full">
                                                <h1 className="text-[22px] font-medium text-white px-6 pb-6 pt-64">{d.name}</h1>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    
                                ))}
                            </Slider>
                            </div>

                        </div>

                        <div className="flex justify-end right-0 mt-4">
                            <button onClick={goToPrev} className="bg-[#14274e] w-14 h-12 py-3 px-4 rounded mr-6 hidden sm:block">
                                <HiChevronLeft size={24} />
                            </button>
                            <button onClick={goToNext} className="bg-[#14274e] w-14 h-12 py-3 px-4 rounded hidden sm:block">
                                <HiChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};


const data = [
    {
        name: `Android Developer`, 
        img: `img/android.jpg`,
    },
    {
        name: `Graphic Design`,
        img: `img/graphic.jpg`,
    },
    {
        name: `Frontend Developer`,
        img: `img/frontend.jpg`,
    },
    {
        name: `Machine Learning`,
        img: `img/machine.jpg`
    },
];

export default LearningPath;