import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Visuals/logo.png';

function Blog2() {
  return (
    <><div className=' top-0 left-0'>
      <Link to='/' className=" cursor-pointer">
      <img src={logo} alt="" className='h-20 ml-1 mt-1'/>
      </Link>
    </div>
    <div className=''>This is Blog2 Page</div></>
  )
}

export default Blog2