import React from 'react';
import './app-header.css';
import SocialIcons from '../social-icons';
// import Menu2 from '../menu2';

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
						<SocialIcons/>				
					</ul>
                </div>
            </div>
            <div id="block-personal">
                    <div class="personal-site">
						<h1>Персональный сайт EOV</h1>
						<h2>
                            автор: Олег Ефимчук
                        </h2>
                    </div>
                    <div class="project-on-github">
						<h3>проект EOV на гитхаб</h3>
                    </div>
					<p className="autor"><a href="https://github.com/OlegEf/Entry-assignment-to-internship-2020" target="blank">https://github.com/OlegEf/</a></p>
            </div>
		</div>
  );
};

export default AppHeader;
