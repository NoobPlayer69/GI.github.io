
import './App.css';

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import About from './Components/AboutUs';

import Error from './Components/Error';
import Home from './Components/Home';
import Glimpses from './Components/Glimpses';
import Field from './Components/FieldPhotos';
import Lab from './Components/LabPhotos';
import React from 'react';
import Gallery from './Components/Gallery';
import News from './Components/News';
import Blog from './Components/Blog';
import Blog1 from './Components/Blogs/Blog1';
import Blog2 from './Components/Blogs/Blog2';
import Blog3 from './Components/Blogs/Blog3';
import Blog4 from './Components/Blogs/Blog4';
import Blog5 from './Components/Blogs/Blog5';
import Blog6 from './Components/Blogs/Blog6';
// import Blog7 from './Components/Blogs/Blog7';
// import Blog8 from './Components/Blogs/Blog8';
// import Blog9 from './Components/Blogs/Blog9';


import Eresources from './Components/Bhu';
import Blogpage2 from './Components/Blogpages/BlogPage2';




function App() {



  return (


    <BrowserRouter>


      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/AboutUs" component={About} />
        <Route exact path="/E-Resources" component={Eresources} />
        <Route exact path="/Gallery" component={Gallery} />
        <Route exact path="/Gallery/GlimpsesofPast" component={Glimpses} />
        <Route exact path="/Gallery/FieldPhotos" component={Field} />
        <Route exact path="/Gallery/LabPhotos" component={Lab} />
        <Route exact path="/Blog" component={Blog} />
        <Route exact path="/News" component={News} />
        <Route exact path="/Blog/Blog1" component={Blog1} />
        <Route exact path="/Blog/Blog2" component={Blog2} />
        <Route exact path="/Blog/Blog3" component={Blog3} />
        <Route exact path="/Blog/Blog4" component={Blog4} />
        <Route exact path="/Blog/Blog5" component={Blog5} />
        <Route exact path="/Blog/Blog6" component={Blog6} />
        {/* <Route exact path="/Blog/Blog7" component={Blog7} />
        <Route exact path="/Blog/Blog8" component={Blog8} />
        <Route exact path="/Blog/Blog9" component={Blog9} /> */}
        <Route exact path="/Blog/Blogpages1" component={Blogpage2} />


        <Route component={Error} />
      </Switch>
    </BrowserRouter>




  );
}

export default App;
