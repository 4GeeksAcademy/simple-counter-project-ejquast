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
    const four = Math.floor(counter/10000);
    const three = Math.floor(counter/1000);
    const two = Math.floor(counter/100);
    const one = Math.floor(counter/10);
    //render your react application
    ReactDOM.createRoot(document.getElementById('app')).render(<SimpleCounter digitOne={counter.indexOf()}/>);
},1000);



