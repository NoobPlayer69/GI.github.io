import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Visuals/logo.png';
import pic1 from '../Visuals/Blog/1.png';

function Blog1() {
  return (
    <><span className='flex top-0 left-0 '>
      <Link to='/' className=" cursor-pointer">
        <img src={logo} alt="" className='h-20 ml-1 mt-1' />
      </Link>
      <div className='flex items-center justify-center w-full text-5xl'>
      <p className=''> Geological Institute</p></div>
    </span>
    <div className=''>
    <div className='mt-10 flex items-center justify-center text-3xl italic'>Blog Name</div>
    <div className='mt-2 flex items-center justify-center'>22nd July 1959</div>
    </div>
    <div className='flex items-center justify-center mt-10'>
    <div className='w-3/5 h-full bg-slate-400 '>
     <img src={pic1} className='float-right' alt='hello'/> 
     <div className='mt-20'>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab vitae porro sunt. Voluptas officiis expedita veniam similique odio magnam eius perferendis autem exercitationem quo illum itaque sit aliquam necessitatibus delectus facere in, fugiat provident laborum incidunt.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum assumenda porro error quas minus excepturi corrupti molestiae deserunt non amet tenetur, qui officiis ab totam nemo doloremque iusto pariatur possimus, debitis libero temporibus eius, repellat quam. Odio labore nesciunt voluptate. Molestiae laudantium non rerum voluptatum repudiandae voluptas, alias exercitationem aperiam facere tenetur nobis est aliquid magnam similique! Quibusdam iste repellat delectus saepe, maiores expedita nisi quae distinctio rem sit, pariatur maxime, magnam fuga amet? Commodi eligendi vel sapiente laborum voluptas non fugiat iusto ut, fugit, error ullam. Libero iusto molestiae doloribus amet quisquam error recusandae quia, fuga, possimus voluptatum cupiditate?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur praesentium porro itaque possimus officiis voluptate animi veniam nam quae consectetur eveniet eaque repellat unde earum voluptates distinctio excepturi consequatur, ea aliquam, reprehenderit voluptatem error dignissimos. Dolorum, enim ipsam quae sunt voluptas animi magni neque ad facilis! Veniam necessitatibus ipsam placeat inventore? Quia eum ullam error sequi repellendus temporibus eaque deleniti dignissimos similique eos officiis obcaecati facere aperiam quod, quis commodi fuga! Nam eaque, dolores unde nulla distinctio eos laborum id quibusdam, quos impedit, consequatur obcaecati. Quasi quisquam natus ea provident nostrum exercitationem nam dicta placeat ducimus dolorum fugiat similique, sunt itaque. Obcaecati eaque quis magni. Iure quos, sunt perferendis magni voluptates consequuntur deleniti et ratione, quae error a soluta eaque delectus voluptatem est fugit autem alias maxime, saepe sequi vitae! Aut, eaque. Explicabo suscipit est, doloremque, illum repellat iusto amet et omnis tempore quae magni laudantium consequatur voluptatum harum, quisquam exercitationem ratione expedita! Vitae beatae sit nam cupiditate saepe velit libero minima quod totam? Voluptatibus a at laudantium est ad officiis tempora nisi aperiam aspernatur officia itaque porro accusantium amet reiciendis numquam enim distinctio iusto aliquam dolor incidunt id, nostrum commodi? Quam maiores voluptatum enim obcaecati sint vel sed ratione.
    </div>
    </div>
    </div>
    </>
  )
}

export default Blog1