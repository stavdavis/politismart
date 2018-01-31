import React from 'react';
import './pick_switch.css';

export default function PickSwitch(props) {
    return (
        <div className="slidecontainer">
            <div className="slider-title">{props.title}: </div>
            <input 
                type="range" 
                min="0" 
                max="2" 
                defaultValue="1" 
                className="slider" 
                id="myRange" 
                onChange={e => props.onChange(e.target.value)} />
        </div>
    );
}