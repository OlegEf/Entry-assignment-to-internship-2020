import React from "react";

import "./block-images.css";

const BlockImages = ({ todos }) => {
	const elementsImages = todos.map((item) => {
		return (
			<div className="thums_img2" key={item.id}>
				<img src={item.src} alt={item.alt} />
			</div>
		);
	});

	return <div id="thums2">{elementsImages}</div>;
};

export default BlockImages;
