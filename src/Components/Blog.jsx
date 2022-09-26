import React from "react";
import BlogPageSection from "./BlogPageSection";
import ImageSlider from "./ImageSlider";
import Menu from "./Menu";



const Blog = () => {
   return (
      <>

         <Menu />
         <div className="mt-10 mx-40 ">
            <ImageSlider />
         </div>
          <div className="mt-2 ml-2 mb-2 mr-2">
           <BlogPageSection/>
            
          </div>



      </>
   )

}

export default Blog;
