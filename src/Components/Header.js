import React from "react";
import './Header.css'
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { TbAdjustmentsHorizontal } from "react-icons/tb";


function Header() {
    const [showList, setShowList] = useState(false);
    
    return (
        <div>
        <div className="header">
            <div className="select" onClick={()=>setShowList(!showList)}>
            <div className="divs"><TbAdjustmentsHorizontal /></div>
            <div className="option">Display</div>
                <div className="divs"><AiOutlineDown /></div>
            </div>
            </div>
            {showList &&
            <div className="popup">
                <div className="row">
                    <div className="font">Grouping</div>
                    <div className="selects">
                        <AiOutlineDown />
                </div>
                </div>
                    <div className="row">
                        <div className="font">Ordering</div>
                        <div className="selects">
                            <AiOutlineDown />
                        </div>
                    </div>
                </div>
            }
        </div>
    );
        }


export default Header;