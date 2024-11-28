
"use client";
import Link from "next/link";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";


function Bootcamp () {

    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0); // Menyimpan indeks slide saat ini

    const settings = {
        className: "center",
        infinite: false,
        centerMarging: true, 
        centerPadding: "60px",
        slidesToShow: 4,
        swipeToSlide: true,
        afterChange: function(index) {
            setCurrentSlide(index); // Memperbarui indeks slide saat ini
            console.log(`Current slide index: ${index}`);
        },
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
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
        <div className="container bg-white py-14 lg:px-0 px-4">
            <div className="mx-auto text-center">
                <h1 className="text-[32px] font-normal text-[#262627]">Bootcamp</h1>
                <p className="text-2xl font-light text-[#262627] mt-2">
                    Bergabunglah dengan bootcamp kami dan tingkatkan keterampilan Anda ke level berikutnya! 
                    Jangan lewatkan kesempatan untuk belajar dan berkembang bersama para ahli di industri.
                </p>
            </div>
            <div className="mt-6">
                <Link href="#" className="text-sm font-medium text-[#14274e] flex right-0 text-right justify-end mb-4">
                    Lihat selengkapnya
                </Link>
                <div className="flex flex-row overflow-hidden slider-container">
                    <div className="w-full">
                    <Slider ref={sliderRef} {...settings}>
                    {data.map((d) => (
                        <div className="gap-8">
                            <div key={d.name} className="bg-[#14274E] h-[380px]" style={{ margin: "0 16px" }}>
                                <div className="h-[212px] w-full overflow-hidden relative">
                                    <img src={d.img} alt="" className="w-full h-[212px] object-cover"/>
                                </div>

                                <div className="py-4 pl-4 pr-9">
                                    <p className="text-[22px] font-medium text-white mb-8">{d.name}</p>
                                    <p className="text-base font-medium text-[#6bffbf]">{d.session}</p>
                                    <p className="text-base font-medium text-white">{d.date}</p>
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
    );
};

const data = [
    {
        img: `img/fullstack.jpg`,
        name: `Full-stack Web Developer`, 
        session: `BATCH 4`,
        date: `Februari 2025`, 
    }, 
    {
        img: `img/uiux.jpg`,
        name: `UI/UX Design`, 
        session: `BATCH 2`,
        date: `Januari 2025`, 
    }, 
    {
        img: `img/hr.jpg`,
        name: `Human Resources`, 
        session: `BATCH 1`,
        date: `Desember 2024`, 
    }, 
    {
        img: `img/digital.jpg`,
        name: `Digital Marketer`, 
        session: `BATCH 3`,
        date: `Januari 2025`, 
    }, 
    {
        img: `img/react.jpg`,
        name: `React Developer`, 
        session: `BATCH 3`,
        date: `Maret 2025`, 
    }, 
    {
        img: `img/visual.jpg`,
        name: `Visual Design`, 
        session: `BATCH 5`,
        date: `Maret 2025`, 
    },
    {
        img: `img/projectmanager.jpg`,
        name: `Project Manager`, 
        session: `BATCH 6`,
        date: `Januari 2025`, 
    },  
    {
        img: `img/data.jpg`,
        name: `Data Scientist`, 
        session: `BATCH 2`,
        date: `Maret 2025`, 
    }, 
];


export default Bootcamp;