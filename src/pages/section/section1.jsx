import React, { useEffect } from 'react';
import { Button, Element } from 'react-scroll';
import { Events, scrollSpy } from 'react-scroll';
import { useRef } from 'react';
import NavigationButtons from '../NavigationButton';
function Section1() {
    useEffect(() => {
        Events.scrollEvent.register('begin', () => {});
        Events.scrollEvent.register('end', () => {});

        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);

    return (
        <>
            <Element  style={{ width: "100vw", height: "100vh", backgroundColor: "lightBlue" }} name="section1" className="element">
                <div>
              <h1>THIS IS SECTION 1</h1>
                <NavigationButtons/>
                </div>
              
            </Element>
            <Element style={{ width: "100vw", height: "100vh", backgroundColor: "lightYellow" }} name="section2" className="element">
               
            <NavigationButtons/>
            <h1>THIS IS SECTION 2</h1>
            </Element>
            <Element style={{ width: "100vw", height: "100vh", backgroundColor: "lightGreen" }} name="section3" className="element">
            <h1>THIS IS SECTION 3</h1>
            <NavigationButtons/>
            </Element>
        </>
    );
}

export default Section1;
