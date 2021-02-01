import React from 'react';

import './link-menu.css';

const LinkMenu = () => {
  return (
	<div class="row">
		<div class="margin">
			<p class="before">псевдоэлемент</p>
		</div>
		<div class="margin">
			<a href="#logo" class="margin">быстрый переход logo</a>
		</div>
	</div>
  );
};

export default LinkMenu;
