import React from "react";
import './Header.css'
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { TbAdjustmentsHorizontal } from "react-icons/tb";


function Header({ select1, setSelect1, select2, setSelect2 }) {
    const [showList, setShowList] = useState(false);
    const [showList1, setShowList1] = useState(false);
    const [showList2, setShowList2] = useState(false);
    // const [select1, setSelect1] = useState("Status");
    // const [select2, setSelect2] = useState("Priority");
    
    return (
        <div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto:wght@300&display=swap');
            </style>
            <div className="header" onClick={() => {
                if (showList){
                    setShowList(false);
                    setShowList1(false);
                    setShowList2(false);
                }
             }} >
            <div className="select" onClick={()=>setShowList(!showList)}>
            <div className="divs"><TbAdjustmentsHorizontal /></div>
            <div className="option">Display</div>
                <div className="divs"><AiOutlineDown /></div>
            </div>
            </div>
            {showList &&
            <div className="popup" onClick={()=>{
                if(showList1)
                setShowList1(false);
                if (showList2)
                setShowList2(false);
            }}>
                <div className="row" >
                    <div className="font">Status</div>
                        <div className="selects" onClick={() => setShowList1(!showList1)}>
                            <div>{select1}</div> 
                            <div><AiOutlineDown className="greyArrow" /></div>

                </div>
                </div>
                    <div className="row">
                        <div className="font">Ordering</div>
                        <div className="selects" onClick={() => setShowList2(!showList2)}>
                            <div>{select2}</div> 
                            <AiOutlineDown className="greyArrow"/>
                        </div>
                    </div>
                </div>
            }
            {showList1 &&
            <div className="popup1"> 
                    <div className="options1" onClick={() => {setSelect1("Status");
                        setShowList1(false);
                    }
            }>Status</div>
                    <div className="options1" onClick={() => {setSelect1("User");
                setShowList1(false)}}>User</div>
                    <div className="options1last" onClick={() => {
                        if(select2!=="Priority")
                        setSelect1("Priority")
                        setShowList1(false)
                    }
                        }>Priority</div>


               </div>}
            {showList2 && <div className="popup2">
                <div className="options1" onClick={() => {
                    if(select1!=="Priority")
                        setSelect2("Priority");
                    setShowList2(false);
                    }
                }>Priority</div>
                <div className="options1last" onClick={() =>{ setSelect2("Title");
                setShowList2(false)}}>Title</div>
            </div>}
        </div>
        
    );
        }


export default Header;