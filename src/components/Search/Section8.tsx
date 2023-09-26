import React from "react";
 

export default function Section8() {
    const currentYear = new Date().getFullYear();
    return (
      <div className="bg-slate-700 ">
        <div className="  flex flex-row items-center justify-center gap-4">
            <div>
                <img src="./assets/twitter.svg" alt="twitter" />  
            </div> 
            <div>
                <img src="./assets/instagram.svg" alt="instagram" />
            </div>
            <div>
                <img src="./assets/twitch.svg" alt=" twitch" />          
            </div> 
        </div>
        <div className=" text-[16px] text-white flex items-center justify-center">
            @{currentYear} CineStream. All rights reserved
        </div>
      </div>
    );
}
        