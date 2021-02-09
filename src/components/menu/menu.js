import React from "react";

import "./menu.css";

const Menu = () => {
	return (
		<div className="header_c">
			<div id="menu">
				<div className="home">
					<a href="https://m.facebook.com/home.php">home</a>
				</div>
				<div className="about-2">
					<a href="https://m.facebook.com/home.php">About Us</a>
				</div>
				<div className="portfolio">
					<a href="https://m.facebook.com/home.php">Portfolio</a>
				</div>
				<div className="blog-2">
					<a href="https://m.facebook.com/home.php">Blog</a>
				</div>
				<div className="features">
					<a href="https://m.facebook.com/home.php">Features</a>
				</div>
				<div className="contact">
					<a href="https://m.facebook.com/home.php">Contact</a>
				</div>
			</div>
		</div>
	);
};

export default Menu;
