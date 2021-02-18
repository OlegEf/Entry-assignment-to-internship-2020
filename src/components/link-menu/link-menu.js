import React from 'react';
import './link-menu.css';
import PropTypes from 'prop-types';

const LinkMenu = ({fast_move}) => (
	<div className="row">
		<div className="margin col-12">
			<a href="#logo" className="margin">{fast_move}</a>
		</div>
	</div>
  );

LinkMenu.propTypes = {
	fast_move: PropTypes.string.isRequired,
};

export default LinkMenu;
