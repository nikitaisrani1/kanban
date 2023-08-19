import React from "react";
import "./User.css";
import { TbAntennaBars5 } from 'react-icons/tb';
import { GiPlainCircle } from 'react-icons/gi';
import { useState } from "react";
import { GiCancel } from 'react-icons/gi';
function User({a,select1}){
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto:wght@300&display=swap');
    </style>
    const [data, setData] = useState(true);

return(
        <div className='columns'>
        {
            a.map((group, index) => (
                <div className="group" key={index}>
                    {/* <IconHeader label={group.label}/> */}
                    <h2 className="title">{group.label}</h2>{console.log(group.label)}
                    {
                    group.tickets.map((ticket) => (
                        <div className="task" key={ticket.id}>
                            <div className="cam">{ticket.id}</div>
                            <label className="circle-checkbox" onClick={
                                () => { if(select1=='status'){
                                    const originalIndex = a.findIndex(
                                        (group) => group.tickets.some((t) => t.id === ticket.id)
                                    );
                                    if (originalIndex !== -1) {
                                        a[originalIndex].tickets = a[originalIndex].tickets.filter(
                                            (t) => t.id !== ticket.id
                                        );
                                    }
                                    
                                    setData(!data);
                                    console.log(ticket);
                                a[3].tickets.push(ticket);
                                     setData(!data);
                                }}}>
                                <input type="checkbox" className="hidden-checkbox" />
                                <span className="custom-checkbox"></span>
                            </label>
                            <span className="totick">{ticket.title}</span>
                            <div className="network">
                                <TbAntennaBars5 />
                               
                                <GiPlainCircle className='circle' onClick={()=>{
                                    a.push()
                                }}/>
                                <span className="fr">{ticket.tag[0]}</span>
                                <GiCancel className='cancel' onClick={
                                    () => {
                                        if (select1 == 'status') {
                                        const originalIndex = a.findIndex(
                                            (group) => group.tickets.some((t) => t.id === ticket.id)
                                        );
                                        if (originalIndex !== -1) {
                                            a[originalIndex].tickets = a[originalIndex].tickets.filter(
                                                (t) => t.id !== ticket.id
                                            );
                                        }
                                        setData(!data);
                                        console.log(ticket);
                                        a[4].tickets.push(ticket);
                                        setData(!data);
                                    }}} />
                            </div>
                        </div>
                    ))
                    }
                </div>
            ))
        }
    </div >
  )
}
export default User;