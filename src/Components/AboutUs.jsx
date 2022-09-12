import React from "react";
import img from './Visuals/eg.png'
import Menu from "./Menu";


const About = () => {




     return (
          <>
          
          <Menu />
          
          <div>

               About Us

          </div>
          <div>

                <p className="flex justify-center italic"> Present Committee Members</p>

                <br />
            </div>
          <div className="grid lg:grid-cols-3 grid-rows-6 gap-4 px-2 py-2">
                <div><img src={img} alt="pic" className="w-full" />
                    <div className="flex justify-center">NAME</div>
                    <div className="flex justify-center">POST</div>

                </div>
                <div><img src={img} alt="pic" className="w-full" />
                    <div className="flex justify-center">NAME</div>
                    <div className="flex justify-center">POST</div>

                </div>
                <div><img src={img} alt="pic" className="w-full" />
                    <div className="flex justify-center">NAME</div>
                    <div className="flex justify-center">POST</div>

                </div>



            </div>
          </>
     )
}

export default About;