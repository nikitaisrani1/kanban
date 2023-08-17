import React from "react";
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
        };
    }
render(){
    return (
        <div className="header">
            <div>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                <span class="material-symbols-outlined">tune</span>
                <span>Display</span>
                <span class="material-symbols-outlined">expand_more</span>
            </div>
        </div>
    );
}
}

export default Header;