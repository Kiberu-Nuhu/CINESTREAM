import React from "react";
 

export default function Section7() {
    return (
       <div className=" grid grid-cols-2 grid-rows-2 bg-slate-800 p-20 gap-5">
            <div>
                <div>
                    <img src=" ./assets/oldcharms.webp" alt="oldies" height={700} width={700} className=" rounded-3xl"/>
                </div>
                <div className=" text-yellow-600 text-[32px] pt-4">
                    OLD CHARMS
                </div>
                <div className=" text-white text-[20px]">
                    Relive the golden era of cinema with black-and-white <br />  classics.
                </div>
            </div>
            <div>
                <div>
                    <img src=" ./assets/block.webp" alt="BLOCK" height={700} width={700} className=" rounded-3xl"/>
                </div>
                <div className=" text-yellow-600 text-[32px] pt-4">
                    BLOCKBUSTERS
                </div>
                <div className=" text-white text-[20px]">
                    Explore the biggest franchises and <br />star-studded spectacles.
                </div>
            </div>
            <div>
                <div>
                    <img src=" ./assets/scifi.webp" alt="SCI-FI" height={700} width={700} className=" rounded-3xl"/>
                </div>
                <div className=" text-yellow-600 text-[32px] pt-4">
                    SCI-FI WORLD
                </div>
                <div className=" text-white text-[20px]">
                    Venture into uncharted galaxies and <br />parallel  dimensions.
                </div>
            </div>
            <div>
                <div>
                    <img src=" ./assets/nature.webp" alt="NATURE" height={700} width={700} className=" rounded-3xl"/>
                </div>
                <div className=" text-yellow-600 text-[32px] pt-4">
                    NATURE DOCS
                </div>
                <div className=" text-white text-[20px]">
                    Witness the wonder and beauty of wild earth and <br /> its  creatures.
                </div>
            </div>
       </div>
    );
}
        