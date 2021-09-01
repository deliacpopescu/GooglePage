import React from 'react';
import apps from './../../images/apps.png';
import me from './../../images/me.jpeg';
import calendar from './../../images/calendar.png';
import drive from './../../images/drive.png';
import gmail from './../../images/gmail.png';
import gmap from './../../images/gmap.png';
import photos from './../../images/photos.png';
import youtube from './../../images/youtube.png';
import './Header.css';

function Header(){
    return(
       <div id="header" class="d-flex justify-content-end">
           <a href="https://www.google.com" class="p-3">Gmail</a>
           <a href="https://www.google.com" class="p-3">Images</a>
                 <img id="app-img" src={apps} alt="apps" />
                 {/* <span class="tooltiptext">Google Apps</span> */}
              
                <div class="google-apps d-flex flex-column ">
                    <div class="d-flex justify-content-around mt-3 mb-3">
                        <img src={calendar} alt="calendar"/>
                        <img src={drive} alt="drive"/>
                        <img src={gmail} alt="gmail"/>
                    </div>   
                    <div class="d-flex justify-content-around mt-3">     
                        <img src={gmap} alt="gmap"/>
                        <img src={photos} alt="photos"/>
                        <img src={youtube} alt="youtube"/>
                    </div>
                </div>
           
           <img id="me" src={me} alt="me" class="rounded-circle p-3" ></img>  
       </div>
    )
}

export default Header;