import React, {useEffect} from 'react'
import './GoTopButton.css'


function GoTopButton() {
    useEffect(() => {
        let mybutton = document.getElementById("backToTopID");
        window.onscroll = function() {scrollFunction()};
        function scrollFunction() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                mybutton.style.visibility = 'visible';
                mybutton.style.opacity = 1;
            } else {
                mybutton.style.visibility = 'hidden';
                mybutton.style.opacity = 0;
            }
        }
      });
    function scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <div style={{position: 'fixed', bottom: '30px', right: '20px', cursor: 'pointer', transition: 'opacity 0.2s linear 0s, visibility', opacity: 1, visibility: 'visible'}}>
            <div id="backToTopID" className="scrollUpButtonstyle__ScrollUpButtonWrapper" onClick={scrollToTop}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M412.6 227.1L278.6 89c-5.8-6-13.7-9-22.4-9h-.4c-8.7 0-16.6 3-22.4 9l-134 138.1c-12.5 12-12.5 31.3 0 43.2 12.5 11.9 32.7 11.9 45.2 0l79.4-83v214c0 16.9 14.3 30.6 32 30.6 18 0 32-13.7 32-30.6v-214l79.4 83c12.5 11.9 32.7 11.9 45.2 0s12.5-31.2 0-43.2z" />
                </svg>
            </div>
        </div>
    )
}

export default GoTopButton;
