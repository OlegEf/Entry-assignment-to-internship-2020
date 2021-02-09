import React from 'react';

import './link-menu.css';

const LinkMenu = () => {
  return (
	<div className="row">
		<div className="margin">
			<p className="before">псевдоэлемент</p>
		</div>
		<div className="margin">
			<a href="#logo" className="margin">быстрый переход logo</a>
		</div>
	</div>
  );
};

export default LinkMenu;
