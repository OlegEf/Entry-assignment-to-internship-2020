import React from "react";
import PropTypes from 'prop-types';

const LinkFooter = ({fast_move_footer}) => (
		<div className="row">
			<div className="margin col-12">
				<a href="#footer" className="margin">{fast_move_footer}</a>
			</div>
		</div>
	);

LinkFooter.propTypes = {
	fast_move_footer: PropTypes.string.isRequired
};

export default LinkFooter;
