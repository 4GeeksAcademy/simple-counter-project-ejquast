//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
function SimpleCounter(props){
    return (<div className="bigCounter">
        <div className="calendar">
            <i className="fa-regular fa-clock"></i>
        </div>
        <div className="four">{props.digitFour}</div>
        <div className="three">{props.digitThree}</div>
        <div className="two">{props.digitTwo}</div>
        <div className="one">{props.digitOne}</div>
    </div>);
}

let counter = 0;
setInterval(function(){
    //render your react application
    ReactDOM.createRoot(document.getElementById('app')).render(<SimpleCounter/>);
},1000);



