import React from "react";
import "./User.css";
import {AiOutlinePlus} from "react-icons/ai";
import {BiDotsHorizontalRounded} from 'react-icons/bi';
import User from './User.js'
import { useEffect } from "react";
function ColHeader({data, select1, select2}) {
    const tickets = data.tickets;
    const users = data.users;
    // console.log("prepare data", tickets,"users:", users,"select1,2", select1,
    // select2);
        // const a = [];
    const a = prepareData(tickets, users, select1, select2);
    useEffect(() => {
            const a = prepareData(tickets, users, select1, select2);
    }, [a]);
    
    
   
    return (
        <div className="card">
            <div className="headeruser">
                <style>
                    @import url( 'https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto:wght@300&display=swap');
                </style>
            </div>
            <User a={a} select1={select1}/>
        </div>
    );
}
export default ColHeader;
const prepareData = (tickets, users, select1, select2) => {
    console.log(select1);
    console.log(select2);
    var preparedData = [];
    /////////////////////////////////////////////////
    var groupedData=[];
   if(tickets!=undefined && select1!='user'){
         groupedData = tickets.reduce((groups, ticket) => {
            const groupKey = ticket[select1];
            if (!groups[groupKey]) {
                groups[groupKey] = [];
            }
            groups[groupKey].push(ticket);
            return groups;
        }, {});
    }
    else if (tickets != undefined && select1=='user') {
         groupedData = tickets.reduce((groups, ticket) => {
            console.log(ticket.userId);
            const groupKey = ticket.userId; // Assuming 'userId' is the key for user-based grouping
            if (!groups[groupKey]) {
                groups[groupKey] = [];
            }
            groups[groupKey].push(ticket);
            return groups;
        }, {});
    }

    /////////////////////////////////////////////
    if(select2=='priority'){
    for (const groupKey in groupedData) {
        groupedData[groupKey].sort((a, b) => {
            if (select2 === 'priority') {
                return b.priority - a.priority; // Notice the swapped positions of a and b
            } else if (select2 === 'title') {
                return a.title.localeCompare(b.title);
            }
            return 0;
        });
    }}

     else if (select2=='title'){
        for (const groupKey in groupedData) {
            groupedData[groupKey].sort((a, b) => {
                if (select2 === 'priority') {
                    return b.priority - a.priority; // For priority sorting, you might keep it descending
                } else if (select2 === 'title') {
                    return a.title.localeCompare(b.title); // For title sorting, ascending order
                }
                return 0;
            });
        }
    }
    /////////////////////////////////////////
    // Create an array of objects for rendering in the UI
    if (select1 == 'status'){
    for (const groupKey in groupedData) {
        const groupLabel = select1 === 'user'
            ? users
                .find(user => user.id === groupKey)?.name
            : groupKey;
        preparedData.push({key: groupKey, label: groupLabel, tickets: groupedData[groupKey]});
    }
   if(preparedData.length<=3){
        preparedData.push({ key: "Done", label: "Done", tickets: [] });
        preparedData.push({ key: "Cancelled", label: "Cancelled", tickets: [] });}
        console.log('prepared data', preparedData);
        return preparedData;
    }
    if (select1 == 'priority') {
        for (const groupKey in groupedData) {
            const groupLabel = select1 === 'user'
                ? users
                    .find(user => user.id === groupKey)?.name
                : groupKey;
            preparedData.push({ key: groupKey, label: groupLabel, tickets: groupedData[groupKey] });
        }
        console.log('prepared data', preparedData);
        return preparedData;
    }
    else{
        for (const groupKey in groupedData) {
            const groupLabel = select1 === 'user' ? users.find(user => user.id === groupKey)?.name : groupKey;
            preparedData.push({
                key: groupKey,
                label: groupLabel,
                tickets: groupedData[groupKey]
            });
        }
        console.log('prepared data', preparedData);
        return preparedData;
    }
    ////////////////////////////////////////////
   
};
