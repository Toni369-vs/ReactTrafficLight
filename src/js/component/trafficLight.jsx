import React, { useState } from 'react';


const TrafficLight = () => {

	const [color, setColor] = useState("red");

	const party = () => {
		color === "red" 
			? setColor("orange") 
			: color === "orange" 
			? setColor("green") 
			: color === "green" 
			? setColor("red") 
			: null 
	}

	return (
		<div>
			<div className="trafficLightSupport"></div>
			<div className="main-container">
				<div className={color === "red"? "trafficLightRed shine" : "trafficLightRed"} onClick={() => setColor("red")}></div>
				<div className={color === "orange"? "trafficLightOrange shine" : "trafficLightOrange"} onClick={() => setColor("orange")}></div>
				<div className={color === "green"? "trafficLightGreen shine" : "trafficLightGreen"} onClick={() => setColor("green")}></div>
				<button type="button" onClick={party}>Party</button>
			</div>
		</div>
	)
};

export default TrafficLight;
