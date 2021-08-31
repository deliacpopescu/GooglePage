import React from 'react';
import apps from './../../images/apps.png';
import me from './../../images/me.jpeg'
import './Header.css';

function Header(){
    return(
       <div id="header" class="d-flex justify-content-end">
           <p class="p-3">Gmail</p>
           <p class="p-3">Images</p>
           <img id="app-img" src={apps} alt="apps"/>
           <img id="me" src={me} alt="me" class="rounded-circle p-3" ></img>  
       </div>
    )
}

export default Header;