
import React, { useEffect } from 'react';
import ScrollCss from './ScrollToTop.module.css';

const ScrollToTop = () => {
    // Scroll To Top 
    const [position, setPosition] = React.useState({top: 0, left: 0})

    React.useEffect(() => {
        window.scroll({
            top: position.top,
            left: position.left,
            behavior: 'smooth'
        })
    })

    const [visibility, setVisibility] = React.useState(false)
    
    const scrollTop = React.useRef()
    React.useEffect(() => {
        window.addEventListener('scroll', (e) => {
            window.scrollY > 200 
            ? scrollTop.current.style.visibility = 'visible'
            : scrollTop.current.style.visibility = 'hidden'
        })
    }) 
    
    return (
        <>
            <button type='button' 
                onClick={() => setPosition({...position, position: {top: 0, left: 0}})} className={`${ScrollCss.scrollTop}`} ref={scrollTop} 
            > <i className="fas fa-chevron-up"></i> </button>
        </>
    );
};

export default ScrollToTop;