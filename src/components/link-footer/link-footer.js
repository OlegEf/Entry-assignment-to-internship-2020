import React from 'react';

import './link-footer.css';

const demoLink = ("https://p.w3layouts.com/demos/metushi/web/");

const LinkFooter = () => {
  return (
			<div className="row">
				<a href="#footer">быстрый переход footer</a>
					<h3 className="demo">Данный проект демонстрирует  базовые возможности html css</h3>
					<span>ссылка на оригинал дизайна</span>
					<p class="demo"><a href={demoLink}>{demoLink}</a></p>
            </div>
  );
};

export default LinkFooter;
