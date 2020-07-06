import React, { useState, useEffect, useContext, useRef } from "react";
import './index.scss';
import { HeaderThemeContext } from "../../App";

const Header = (props) => {
    const [count, setCount] = useState(0);
    const isLight = useContext(HeaderThemeContext);
    const spanEl = useRef(null);

    useEffect(() => {
        console.log(`Button Clicked: ${count} #times`);
    }, [count]);

    useEffect(() => {
        console.log(`Header is Light: ${isLight}`);
    }, [isLight]);

    useEffect(() => {
        console.log('Component Mounted');
        console.log(spanEl.current.__proto__);
        spanEl.current.addEventListener('click', () => console.log('Clicked'));
        return () => {
            console.log('Component UnMounted');
            spanEl.current.removeEventListener('click', () => {});
        };
    }, []);
 
    return (
        <header className={isLight ? 'light' : 'dark'}>
            <div className="head head_left">
                <b>StarWars</b>
            </div>
            <div className="head head_right">
                <button onClick={() => setCount(count + 1)}>Count: {count}</button>
                <span ref={spanEl}>&nbsp;Ref</span>
            </div>
        </header>
    );
}

export default Header;