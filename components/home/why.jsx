import React from "react";
import Image from "next/image";
import Belajar from "../../public/img/belajar.png";
import Materi from "../../public/img/materi.png";
import Mentor from "../../public/img/mentor.png";


const Why = () => {
    return (
        <div className="py-[65px] bg-[#f1f6f9]">
            <div className="grid lg:grid-cols-3 grid-cols-1">
                <div>
                    <div className="bg-white h-[442px] p-6">
                        <h1 className="text-[22px] font-medium text-[#14274e]">Belajar lebih flexibel</h1>
                        <div className="mt-4 py-12 px-10 mx-auto flex items-center self-center">
                            <Image src={Belajar} alt="belajar" height={254} width={300} />
                        </div>
                    </div>
                    <div className="bg-[#14274e] p-6">
                        <p className="text-base font-light text-white">Belajar kapan pun, di mana pun, secara mandiri. Bebas memilih kelas sesuai minat belajar.</p>
                    </div>
                </div>
                <div>
                    <div className="bg-[#f8f8f8] h-[442px] p-6">
                        <h1 className="text-[22px] font-medium text-[#14274e]">Materi ter-up to date</h1>
                        <div className="mt-4 py-12 px-10 mx-auto flex items-center self-center">
                            <Image src={Materi} alt="materi" height={285} width={300} />
                        </div>
                    </div>
                    <div className="bg-[#6bffbf] p-6">
                        <p className="text-base font-light text-[#262627]">Kurikulum dikembangkan bersama perusahaan dan pemilik teknologi dunia sesuai kebutuhan industri terkini.</p>
                    </div>
                </div>
                <div>
                    <div className="bg-white h-[442px] p-6">
                        <h1 className="text-[22px] font-medium text-[#14274e]">Mentor berpengalaman</h1>
                        <div className="mt-4 py-12 px-10 mx-auto flex items-center self-center">
                            <Image src={Mentor} alt="mentor" height={196} width={300} />
                        </div>
                    </div>
                    <div className="bg-[#14274e] p-6">
                        <p className="text-base font-light text-white">Pengajar dengan pengalaman nyata sebagai praktisi mampu membuat Anda lebih mengenal industri.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Why;