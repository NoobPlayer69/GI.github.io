
import './App.css';

import {
  BrowserRouter,
  Switch, 
  Route,
} from "react-router-dom";

import About from './Components/AboutUs';
import Bhu from './Components/Bhu';
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




function App() {



  return (


    <BrowserRouter>


      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/AboutUs" component={About} />
        <Route exact path="/Bhu"component={Bhu} />
        <Route exact path="/Gallery"component={Gallery} />
        <Route exact path="/Gallery/GlimpsesofPast" component={Glimpses} />
        <Route exact path="/Gallery/FieldPhotos"component={Field} />
        <Route exact path="/Gallery/LabPhotos" component={Lab} />
        <Route exact path="/Blog" component={Blog} />
        <Route exact path="/News" component={News} />
        <Route exact path="/Blog/Blog1" component={Blog1} />
        <Route exact path="/Blog/Blog2" component={Blog2} />
        <Route exact path="/Blog/Blog3" component={Blog3} />

        <Route component={Error} />
        </Switch>
    </BrowserRouter>




  );
}

export default App;
