import React from "react";
import vid from './Visuals/Hello.mp4';
import pic from './Visuals/5.JPG'
import fb from './Visuals/fb.png'
import yt from './Visuals/Yt.png'
import insta from './Visuals/Insta.png'
import Link from './Visuals/L.png'
import fold from './Visuals/folds.png'
import Menu from "./Menu";


const Home = () => {

    return (
        <>
            <div className="flex flex-col min-h-screen min-w-full ">


                <video src={vid} autoPlay loop muted className="object-cover w-full "></video>
                <div className="z-1  w-full absolute">
                    <Menu />
                </div>
            </div>

            <div>
                {/* <h1 className="flex justify-center mt-10"> Presidential Address</h1> */}


                <div className="w-full rounded overflow-hidden mt-20 flex justify-center">
                    <img className=" w-1/4 border-8 border-indigo-200 rounded-full" src={pic} alt="ArSir" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 -mt-1">About the department</div>
                        <p className="text-gray-700 text-base flex ">
                            <p className="text-5xl ">"</p><br />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br />
                            Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.lorem34
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi quis harum, numquam voluptas qui optio,<br />
                            ipsum temporibus est modi eveniet a, adipisci facere quo alias velit necessitatibus? Tempora ducimus eveniet magni ea incidunt ipsa nam officia veniam in nostrum. Maiores est eaque, <br />
                            laborum id amet assumenda minus perspiciatis adipisci qui rerum beatae maxime, corrupti architecto!<br />

                        </p>
                        <p className="text-5xl">"</p>
                    </div>

                </div>



            </div>

            <div className="grid grid-cols-3 mt-20">
                
                    <div className="col-span-2">
                        <div>
                            Contact Us <br />
                            GEOLOGICAL INSTITUTE, PRESIDENCY UNIVERSITY <br />
                            86, 1, College St, Calcutta University,<br />
                            College Square, Kolkata, West Bengal 700073<br />
                            Phone No:<br />
                            <div className="grid grid-cols-4 gap-4">
                                <a href="https://www.facebook.com/geolinstitute"><img src={fb} alt="pic" className="w-48 h-36 rounded-full"></img></a>
                                <a href="https://www.instagram.com/geological_institute_presiuniv/"><img src={insta} alt="pic" className="w-48 h-36 rounded-full"></img></a>
                                <a href="https://www.linkedin.com/company/geological-institute-presidency-university-kolkata/"><img src={Link} alt="pic" className="w-48 h-36 rounded-full"></img></a>
                                <a href="https://www.youtube.com/c/GeologicalInstitutePresidencyUniversity"><img src={yt} alt="pic" className="w-48 h-36 rounded-full"></img></a>
                            </div>

                        </div>
                    </div>
                    <div className="bg-slate-500 mt-6 mr-6 mb-6">6

                    </div>
                
            </div>
        </>


    )

}

export default Home;