import React from 'react';
import PropTypes from 'prop-types';
import './link-menu.css';

const pseudo_element= "псевдоэлемент" ;
const fast_move= "быстрый переход logo" ;

const LinkMenu = () => {
  return (
	<div className="row">
		<div className="margin">
			<p className="before">{pseudo_element}</p>
		</div>
		<div className="margin">
			<a href="#logo" className="margin">{fast_move}</a>
		</div>
	</div>
  );
};

LinkMenu.propTypes = {
	pseudo_element: PropTypes.string,
	fast_move: PropTypes.string,
};

export default LinkMenu;
