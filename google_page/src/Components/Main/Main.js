import React from 'react';   
import lupe from './../../images/lupe.png';
import keyboard from './../../images/keyboard.png';
import mic from './../../images/Google_mic.svg.png';
import './Main.css';

function Main(){
return(
<div class="container d-flex-column align-items-center">
    <div id="main" class="d-flex justify-content-center">
        <h1 class="text-primary">G</h1>
        <h1 class="text-danger">o</h1>
        <h1 class="text-warning">o</h1>
        <h1 class="text-primary">g</h1>
        <h1 class="text-success">l</h1>
        <h1 class="text-danger">e</h1>
    </div>
    <div class="col-auto">
        <img id="lupe" src={lupe} alt="lupe"/>
        <input id="search-bar" type="text" class="w-100"></input>
        <img id="keyboard" src={keyboard} alt="keyboard" />
        <img id="mic" src={mic} alt="microphone"/>
    </div>
   
   
    <div class="btns p-3 mt-4">
        <button type="button" class="btn btn-light mr-4">Google Search</button>
        <button type="button" class="btn btn-light">I'm Feeling Lucky</button>
    </div>    

    <div id="language" class="d-inline-flex mt-2">
        <p class="mr-2">Google offered in:</p>
        <a class="mr-2" href="https://www.google.com/setprefs?sig=0_n02S24IAL8XhmM1Ccg-7v2JhgVc%3D&hl=ro&source=homepage&sa=X&ved=0ahUKEwiLxqmH5NvyAhUC7XMBHVKgBWgQ2ZgBCA8">Romana</a>
        <a class="mr-2" href="https://www.google.com/setprefs?sig=0_n02S24IAL8XhmM1Ccg-7v2JhgVc%3D&hl=hu&source=homepage&sa=X&ved=0ahUKEwiLxqmH5NvyAhUC7XMBHVKgBWgQ2ZgBCBA">Magyar</a>
        <a class="mr-2" href="https://www.google.com/setprefs?sig=0_n02S24IAL8XhmM1Ccg-7v2JhgVc%3D&hl=de&source=homepage&sa=X&ved=0ahUKEwiLxqmH5NvyAhUC7XMBHVKgBWgQ2ZgBCBE">Deutsch</a>
    </div>    

 
    
</div>
)
}
export default Main;