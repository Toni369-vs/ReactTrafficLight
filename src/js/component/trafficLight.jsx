import React, { useState } from 'react';


const TrafficLight = () => {

	const [color, setColor] = useState("red");
	const [show, setShow] = useState(true);	

	const party = () => {
		color === "red" 
			? setColor("orange") 
			: color === "orange" 
			? setColor("green") 
			: color === "green" && show === true 
			? setColor("purple") 
			: color === "green" && show === false 
			? setColor("red")
			: null 
	}

	console.log(show)
	console.log(color)

	return (
		<div>
			<div className="trafficLightSupport"></div>
			<div className="main-container">
				<div className={color === "red"? "trafficLightRed shine" : "trafficLightRed"} onClick={() => setColor("red")}></div>
				<div className={color === "orange"? "trafficLightOrange shine" : "trafficLightOrange"} onClick={() => setColor("orange")}></div>
				<div className={color === "green"? "trafficLightGreen shine" : "trafficLightGreen"} onClick={() => setColor("green")}></div>
				<div className={color === "purple" && show === true
					? "trafficLightPurple shine"
					: color !== "purple" && show === true
					? "trafficLightPurple" 
					:"hide" } onClick={() => setColor("purple")}></div>
				<button type="button" onClick={party}>Party</button>
				<button type="button" onClick={() => setShow(!show)}>Extra</button>
			</div>
		</div>
	)
};

export default TrafficLight;
