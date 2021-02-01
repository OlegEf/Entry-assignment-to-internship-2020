import React from 'react';
import './app-header.css';

const AppHeader = () => {
  return (
    <div id="header">
            <div id="top-header">
                <div id="logo">
                    <h1>
                        EOV
                    </h1>
                </div>                
                <div id="social-icons">
					<ul>
						<li><a href="https://m.facebook.com/home.php"></a>l</li>
						<li><a href="https://m.facebook.com/home.php"></a>f</li>
						<li><a href="https://m.facebook.com/home.php"></a>d</li>
						<li><a href="https://m.facebook.com/home.php"></a>r</li>				
					</ul>
                </div>
            </div>
            <div id="many">
                    <div className="manya">
						<h1>Персональный сайт EOV</h1>
						<h2>
                            автор: Олег Ефимчук
                        </h2>
                    </div>
                    <div class="manyb">
						<h3>проект EOV на гитхаб</h3>
                    </div>
					<p className="autor"><a href="https://github.com/OlegEf/Entry-assignment-to-internship-2020" target="blank">https://github.com/OlegEf/</a></p>
            </div>
		</div>
  );
};

export default AppHeader;
