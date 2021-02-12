import React from "react";
import PropTypes from 'prop-types';
import "./link-footer.css";

const fast_move_footer = "быстрый переход footer";
const project_description = "Данный проект демонстрирует базовые возможности html css";
const link_original = "ссылка на оригинал дизайна";
const link_demo = "https://p.w3layouts.com/demos/metushi/web/";

const LinkFooter = () => {
	return (
		<div className="row">
			<a href="#footer">{fast_move_footer}</a>
			<h3 className="demo">
				{project_description}
			</h3>
			<span>
				{link_original}
			</span>
			<p className="demo">
				<a href={link_demo}>{link_demo}</a>
			</p>

		</div>
	);
};

LinkFooter.propTypes = {
	fast_move_footer: PropTypes.string,
	project_description: PropTypes.string,
	link_original: PropTypes.string,
	link_demo: PropTypes.string,
};

export default LinkFooter;
