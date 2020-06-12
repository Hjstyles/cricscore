import React from "react";

const Form = props => (
	<div>
	   <div>
          <h3 className="title-container__title">Cric Info</h3>
		  <h3 className="title-container__subtitle">Find out Stats...</h3>

	   </div>
	   <form onSubmit={props.getStats}>
		<input type="text" name="name" placeholder="Player Name..."/>
		<button>Get Stats</button>
	   </form>

	</div>
	
);

export default Form;