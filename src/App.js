import './App.css';
import AGoodService from "./pages/AGoodService";
import Déménagement from "./pages/Déménagement";
import Contact from "./pages/Contact";
import Accueil from "./pages/Accueil";
import Cookies from 'js-cookie';
import {
  Route,
  Routes,
  HashRouter
} from "react-router-dom";
import React, { } from 'react';


function App() {

  var cookieLangue;
  console.log(cookieLangue);
  console.log(Cookies.get('langue'), "ee");

  Cookies.get('langue') ? cookieLangue = Cookies.get('langue') : Cookies.set('langue', 'fr');

  return (

      <HashRouter>
        <div className='App'>
          <Routes>
            <Route path="/" element={<Accueil cookie={cookieLangue} />} />
            <Route path="/agoodservice" element={<AGoodService cookie={cookieLangue} />} />
            <Route path="/demenagement" element={<Déménagement cookie={cookieLangue}/>} />
            <Route path="/contact" element={<Contact cookie={cookieLangue} />} />
          </Routes>
        </div>
      </HashRouter>
    ) 

}

export default App;