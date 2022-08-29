
import { init } from 'ityped';
import { useEffect, useRef } from "react";
import './portfolio.scss';

export default function Portfolio() {
    const textRef = useRef();


    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            backSpeed: 40,
            strings: ["soon...", "s00n...", "S00N...", "...soon"],
        })
    })
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <h2>Coming <span ref={textRef}></span></h2>
        </div>

    );

}