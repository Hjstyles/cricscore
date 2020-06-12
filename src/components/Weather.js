import React from "react";

const Weather = props => (
	<div className="weather__info">
	 {	
	 	props.batting && props.playing && <p className="weather__key"> Role: 
	 		<span className="weather__value"> { props.batting }, { props.playing }</span>
	 	</p> 
	 }
	 { 	
	 	props.description && <p className="weather__key"> Description: 
	 		<span className="weather__value"> { props.description }	</span>
	 	</p> 
	 }
	 { 	
	 	props.matches && <p className="weather__key"> Matches: 
	 		<span className="weather__value"> { props.matches } </span>
	 	</p> 
	 }
	 { 	
	 	props.runs && <p className="weather__key"> Runs: 
	 		<span className="weather__value"> { props.runs } </span>
	 </p> 
	 }
	 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }
	</div>
);

export default Weather;