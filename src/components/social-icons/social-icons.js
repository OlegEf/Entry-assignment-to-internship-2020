import React from 'react';
import PropTypes from 'prop-types';
import './social-icons.css';

const link_facebook = "https://m.facebook.com/home.php";

const SocialIcons = () => {
  return (
	<ul>
		<li><a href={link_facebook} >l</a></li>
		<li><a href={link_facebook} >f</a></li>
		<li><a href={link_facebook} >d</a></li>
		<li><a href={link_facebook} >r</a></li>	
	</ul>
	
  );
};

SocialIcons.propTypes = {
	link_facebook: PropTypes.string,
};

export default SocialIcons;