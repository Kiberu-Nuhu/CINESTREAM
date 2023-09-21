import React from "react";
 

export default function Section3() {
    return (
        <div className=" bg-slate-800 pb-[30px]">
            <div className=" text-white flex items-center justify-center text-[48px]">
                Search Movies
            </div>
            <div className=" flex items-center justify-center text-white text-center ">
                Discover hidden gems, all-time <br /> favorites, and everything in <br /> between. Enter a movie title and <br /> unravel your next cinematic <br /> adventure!
            </div>
            <div className="flex items-center justify-center">
                <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full p-3">
                    Search
                </button>
                <button className=" bg-black hover:bg-slate-900 text-white font-bold py-2 px-2 rounded-full p-3">
                    Browse Genres
                </button>
            </div>
        </div>
    );
}
        