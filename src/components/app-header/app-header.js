import React from "react";
import "./app-header.css";
import PropTypes from "prop-types";

const personal = "Персональный сайт EOV" ;
const author = "автор: Олег Ефимчук" ;
const project_GitHub = "проект EOV на гитхаб" ;

const linkGitHub_EATI =
	"https://github.com/OlegEf/Entry-assignment-to-internship-2020";

const AppHeader = () => {
	return (
		<div id="header" className="col-12">
			<div id="top-header">
				<div id="logo">
					<h1>EOV</h1>
				</div>
				<div id="social-icons">
				</div>
			</div>
			<div id="block-personal">
				<div className="personal-site">
					<h1>{personal}</h1>
					<h2>{author}</h2>
				</div>
				<div className="project-on-github">
					<h3>{project_GitHub}</h3>
				</div>
				<p className="author">
					<a href={linkGitHub_EATI} target="blank">
						{linkGitHub_EATI}
					</a>
				</p>
			</div>
		</div>
	);
};

AppHeader.propTypes = {
	personal: PropTypes.string,
	author: PropTypes.string,
	project_GitHub: PropTypes.string,
	linkGitHub_EATI: PropTypes.string,
};

					// <SocialIcons />
export default AppHeader;
