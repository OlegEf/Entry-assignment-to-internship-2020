import React from "react";
import "./menu.css";
import PropTypes from "prop-types";

const Menu = () => {
	const menu_home = "Главнaя";
	const menu_my_works = "Мои работы";
	const menu_about_me = "Обо мне";
	const menu_contacts = "Контакти";
	const link_facebook = "https://m.facebook.com/";

	return (
			<div id="menu">
				<div className="home">
					<a href={link_facebook}>{menu_home}</a>
				</div>
				<div className="about-2">
					<a href={link_facebook}>{menu_my_works}</a>
				</div>
				<div className="portfolio">
					<a href={link_facebook}>{menu_about_me}</a>
				</div>
				<div className="blog-2">
					<a href={link_facebook}>{menu_contacts}</a>
				</div>
			</div>
	);
};

Menu.propTypes = {
	menu_home: PropTypes.string,
	menu_my_works: PropTypes.string.isRequired,
	menu_about_me: PropTypes.string.isRequired,
	menu_contacts: PropTypes.string.isRequired,
};

Menu.propTypes = {
	link_facebook: PropTypes.string.isRequired,
};


export default Menu;
