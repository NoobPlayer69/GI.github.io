import React from "react";
import { Link } from "react-router-dom";
import logo from './Visuals/logo.png';


const Menu = () => {
    return (
        <>
            <nav className="Menu  flex justify-between items-center h-24 w-full text-black relative shadow-sm font-mono" role="navigation">
                <div className="flex float-left w-1/2 space-x-4 align-middle">
                    <img src={logo} alt="hola" className="h-20 ml-1"/>
                    <span className="flex-initial float-left w-2/3 text-5xl mt-4">Geological Institute</span>
                </div>
                
                <div className=" w-1/2">
                    <div className="float-right space-x-6 mr-1 text-2xl">
                <Link to='/' className=" cursor-pointer"> Home</Link>
                <Link to='/AboutUs' className=" cursor-pointer" > About Us</Link>
                <Link to='/E-Resources' className=" cursor-pointer" > E-Resources </Link>
                <Link to='/Gallery' className=" cursor-pointer" > Gallery </Link>
                <Link to='/Blog' className=" cursor-pointer" > Blog</Link>
                <Link to='/News' className=" cursor-pointer" > News</Link>
                </div>
                </div>
            </nav>
        </>
    )
}

export default Menu;