import React from "react";
import PropTypes from 'prop-types';

const LinkFooter = () => {

const fast_move_footer = "быстрый переход footer";
const project_description = "Данный проект демонстрирует базовые возможности html css";
const link_original = "ссылка на оригинал дизайна";
const link_demo = "https://p.w3layouts.com/demos/metushi/web/";

	return (
		<div className="row">
			<div className="margin col-12">
				<a href="#footer" className="margin">{fast_move_footer}</a>
			</div>
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
