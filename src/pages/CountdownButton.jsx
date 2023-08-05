import React, { useRef } from 'react';
import Section1 from './section/section1';
import { scroller } from 'react-scroll';
import { debounce } from 'lodash';
function App() {
    const sectionRef = useRef(null);

    const handleScroll = debounce((e) => {
        console.log(e.deltaY);
        const delta = e.deltaY;
        const section2Top = sectionRef.current.querySelector('.element[name="section2"]').offsetTop;
        const section1Top = sectionRef.current.querySelector('.element[name="section1"]').offsetTop;
    
        if (delta > 50) {
            // Scroll down
            const section3Top = sectionRef.current.querySelector('.element[name="section3"]').offsetTop;
    
            if (window.scrollY < section2Top ) {
                scroller.scrollTo('section2', {
                    duration: 250,
                    smooth: true
                });
            } else if (window.scrollY < section3Top ) {
                scroller.scrollTo('section3', {
                    duration: 200,
                    smooth: true
                });
            }
        } else {
            // Scroll up
            if (window.scrollY > section2Top ) {
                scroller.scrollTo('section2', {
                    duration: 200,
                    smooth: true
                });
            } else if (window.scrollY > section1Top ) {
                scroller.scrollTo('section1', {
                    duration: 200,
                    smooth: true
                });
            }
        }
    }, 3);


    return (
        <div onWheel={handleScroll} ref={sectionRef}>
            <Section1 />
        </div>
    );
}

export default App;
