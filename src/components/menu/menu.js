import React from "react";
import "./menu.css";
import PropTypes from 'prop-types';

const menu_home = "Главня";
const menu_my_works = "Мои работы";
const menu_about_me = "Обо мне";
const menu_contacts = "Контакти";

const Menu = (link_facebook) => {
	return (
		<div className="header_c">
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
		</div>
	);
};

Menu.propTypes = {
	menu_home: PropTypes.string,
	menu_my_works: PropTypes.string,
	menu_about_me: PropTypes.string,
	menu_contacts: PropTypes.string,
};


export default Menu;
