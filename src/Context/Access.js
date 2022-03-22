import React from "react";
import SendData from "./Context";
const Access = (props) =>{
    const state = {
        "name": "majid",
        "class": "MCA"
    }   
    return(
        <Access.Provider value={state} >
            {props.childern}
        </Access.Provider>
    )
}
export default SendData;