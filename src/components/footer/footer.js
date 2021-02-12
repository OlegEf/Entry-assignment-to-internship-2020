import React from 'react';
import PropTypes from "prop-types";
import './footer.css';

const data_time = 2021;

const Footer = () => {
  return (
	<div id="footer col-12">
		<p>{data_time}</p>
	</div>
  );
};

Footer.propTypes = {
	data_time: PropTypes.number,
};

export default Footer;
