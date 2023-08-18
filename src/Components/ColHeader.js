import React from "react";
import "./User.css";
import { AiOutlinePlus } from "react-icons/ai";
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import User from './User.js'
function ColHeader() {
    return (
        <div className="card">
        <div className="headeruser">
         <style>
            @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto:wght@300&display=swap');
        </style>
        
            <div className="info">
                <p className="name">Abhijeet Maity &nbsp; &nbsp;&nbsp;</p>
                <p className="number">1</p>
            </div>
            <div className="icons">
                <AiOutlinePlus />
                <BiDotsHorizontalRounded />
            </div>
        </div>
        <User/>
        </div>
    );
}
export default ColHeader;