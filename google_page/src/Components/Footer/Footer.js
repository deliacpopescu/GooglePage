import React from 'react';   
import './Footer.css';

function Footer(){
    return(
        <div id="footer">
            <p  id="country" >Romania</p>
            <div class="links d-flex justify-content-between">
                <div class="first">
                    <a class="p-2 " href="https://about.google/?utm_source=google-RO&utm_medium=referral&utm_campaign=hp-footer&fg=1">About</a>
                    <a class="p-2 " href="https://www.google.com/intl/ro_ro/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">Advertising</a>
                    <a class="p-2 "href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1">Business</a>
                    <a class="p-2 " href="https://google.com/search/howsearchworks/?fg=1">How Search works</a>
                </div>
                <div class="justify-content-end ">
                    <a class="p-2" href="https://policies.google.com/privacy?hl=ro&fg=1">Privacy</a>
                    <a class="p-2" href="https://policies.google.com/terms?hl=ro&fg=1">Terms</a>
                    <a class="p-2" href="www.google.com">Settings</a>
                </div>
            </div>
        </div>

    )
}

export default Footer;
