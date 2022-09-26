import React from 'react';
import { Link } from "react-router-dom";
import blogpic1 from "../Visuals/Blog/1.png";
import blogpic2 from "../Visuals/Blog/2.png";
import blogpic3 from "../Visuals/Blog/3.png";
import blogpic4 from "../Visuals/Blog/4.png";
import blogpic5 from "../Visuals/Blog/5.png";
import blogpic6 from "../Visuals/Blog/6.png";

function Blogpage1() {
    return (
        <><div>
            <div className="grid grid-cols-3 grid-rows-2 lg:gap-3 justify-items-center mt-10 ml-10 mr-10">
                <Link to='/Blog/Blog1'>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg py-10 hover:cursor-pointer hover:bg-slate-500 hover:scale-105 mt-10">
                        <img src={blogpic1} alt="GLIMPSES" className="w-full px-3" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2 ">
                                <p>Blog 1</p>
                                <div className="relative">
                                    <p className="italic text-lg ">Name</p>
                                    <p className="italic text-xs right-0 top-2 absolute flex items-center">24th October 1994</p>
                                </div>
                            </div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to='/Blog/Blog2'>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg py-10 hover:cursor-pointer hover:bg-slate-500 hover:scale-105 mt-10">
                        <img src={blogpic2} alt="GLIMPSES" className="w-full px-3" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">
                                <p>Blog 2</p>
                                <div className="relative">
                                    <p className="italic text-lg ">Name</p>
                                    <p className="italic text-xs right-0 top-2 absolute flex items-center">24th October 1994</p>
                                </div>
                            </div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to='/Blog/Blog3'>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg py-10 hover:cursor-pointer hover:bg-slate-500 hover:scale-105 mt-10">
                        <img src={blogpic3} alt="GLIMPSES" className="w-full px-3" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">
                                <p>Blog 3</p>
                                <div className="relative">
                                    <p className="italic text-lg ">Name</p>
                                    <p className="italic text-xs right-0 top-2 absolute flex items-center">24th October 1994</p>
                                </div>
                            </div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to='/Blog/Blog4'>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg py-10 hover:cursor-pointer hover:bg-slate-500 hover:scale-105 mt-10">
                        <img src={blogpic4} alt="GLIMPSES" className="w-full px-3" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">
                                <p>Blog 4</p>
                                <div className="relative">
                                    <p className="italic text-lg ">Name</p>
                                    <p className="italic text-xs right-0 top-2 absolute flex items-center">24th October 1994</p>
                                </div>
                            </div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to='/Blog/Blog5'>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg py-10 hover:cursor-pointer hover:bg-slate-500 hover:scale-105 mt-10">
                        <img src={blogpic5} alt="GLIMPSES" className="w-full px-3" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">
                                <p>Blog 5</p>

                                <div className="relative">
                                    <p className="italic text-lg ">Name</p>
                                    <p className="italic text-xs right-0 top-2 absolute flex items-center">24th October 1994</p>
                                </div>
                            </div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to='/Blog/Blog6'>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg py-10 hover:cursor-pointer hover:bg-slate-500 hover:scale-105 mt-10">
                        <img src={blogpic6} alt="GLIMPSES" className="w-full px-3" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">
                                <p>Blog 6</p>
                                <div className="relative">
                                    <p className="italic text-lg ">Name</p>
                                    <p className="italic text-xs right-0 top-2 absolute flex items-center">24th October 1994</p>
                                </div>
                            </div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className='flex items-center justify-center mt-20 mb-20'>
                {/* <button className='mb-20 ml-20'>Previous</button>
                <button className='mb-20 mr-20 absolute right-0'>Next</button> */}
                <Link to="/Blog/Blogpages1"><button className='text-2xl'>Next</button></Link>
            </div>
        </div></>
    )
}

export default Blogpage1