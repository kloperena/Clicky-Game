import React from "react";
import "../petcards/petcards.css";

const petcards = props => (
	<div onClick={() => props.setClicked(props.id)} className="card">
		<div className="img-container">
      		<img alt={props.name} src={props.image} />
    	</div>
  </div>
);

export default petcards;