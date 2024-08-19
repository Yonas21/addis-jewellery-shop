// eslint-disable-next-line no-unused-vars
import React from "react";
import '../card.css'

function LoadingCard() {
	return (
        <div className="main_card"> 
		<div className="loading_cards">
			<div className="loading_card is-loading">
				<div className="image"></div>
				<div className="content">
					<h2></h2>
					<p></p>
				</div>
			</div>
		</div>
        </div>
	);
}

export default LoadingCard;
