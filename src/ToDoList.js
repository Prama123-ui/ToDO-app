import React from "react";

const ToDOList = (props) => {
    return (
        <>  
            <div className="todo_style">
            <i className="fa fa-times" area-hidden="true" />
            <li> {props.text} </li>
            </div>
            
            
        </>
    );
    
};

export default ToDOList;