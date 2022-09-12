import React from "react";
import { Link } from "react-router-dom";
import field from "./Visuals/Field.jpg";
import lab from "./Visuals/Lab.jpg";


import Menu from "./Menu";

const Gallery = () => {
    return (
        <><Menu className="mt-10 mb-10"/>
            <div className="  grid grid-cols-3 lg:gap-3 justify-items-center mt-10 ">
                <Link to='/Gallery/LabPhotos' className="LabPhotos " >
                    <div className="max-w-sm rounded overflow-hidden shadow-lg py-10 hover:cursor-pointer hover:bg-slate-500 hover:scale-105">
                        <img src={lab} alt="GLIMPSES" className="w-full px-3" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Lab Photos</div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to='/Gallery/FieldPhotos' className="FieldPhotos" >
                <div className="max-w-sm rounded overflow-hidden shadow-lg py-10 hover:cursor-pointer hover:bg-slate-500 hover:scale-105">
                    <img src={field} alt="GLIMPSES" className="w-full px-3" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Field Photos</div>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                </div>
                </Link>
                <Link to='/Gallery/GlimpsesofPast' className="Glimpses" > 
                 <div className="max-w-sm rounded overflow-hidden shadow-lg py-10 hover:cursor-pointer hover:bg-slate-500 hover:scale-105">
                    <img src={"/Visuals/Past.jpg"} alt="GLIMPSES" className="w-full px-3" />
                    <div class="px-6 py-4 mt-6">
                        <div class="font-bold text-xl mb-2">Glimpses of Past</div>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                 </div>
                </Link>

            </div>
        </>
    )

}

export default Gallery;