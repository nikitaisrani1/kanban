import React from "react";
import "./User.css";
import { TbAntennaBars5 } from 'react-icons/tb';
import { GiPlainCircle } from 'react-icons/gi';
function User(){
return(
<div className="task">
    <div className="cam">CAM-8</div>
        <label class="circle-checkbox">
            <input type="checkbox" class="hidden-checkbox"></input>
                <span class="custom-checkbox"></span>
        </label>
        <span className="totick">create onboarding tutorial for new users</span>
        <div className="network">
            <TbAntennaBars5 />
            <GiPlainCircle className='circle'/>
            <span className="fr">Feature Request</span>
        </div>
</div>
);
}
export default User;