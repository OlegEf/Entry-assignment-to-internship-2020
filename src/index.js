import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
  // <React.StrictMode>
    // <App />
  // </React.StrictMode>,
  // document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// ua30

import './App.css';
   import {render} from 'react-dom'

function HelloWorld() {
	return (

    <body>
    <div class="container">
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
                    <div class="manya">
						<h1>Персональный сайт EOV</h1>
						<h2>
                            автор: Олег Ефимчук
                        </h2>
                    </div>
                    <div class="manyb">
						<h3>проект EOV на гитхаб</h3>
						<p class="autor"><a href="https://github.com/OlegEf/Entry-assignment-to-internship-2020" target="blank">https://github.com/OlegEf/</a></p>
                    </div>
            </div>
            <div class="header_c">
                <div id="menu">
                        <div class="home"><a href=""></a></div>
                        <div class="about-2"><a href=""></a>About Us</div>
                        <div class="portfolio"><a href=""></a>Portfolio</div>
                        <div class="blog-2"><a href=""></a>Blog</div>
                        <div class="features"><a href=""></a>Features</div>
                        <div class="contact"><a href=""></a>Contact</div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="row">
					<a href="#footer">быстрый переход footer</a>
						<h3 class="demo">Данный проект демонстрирует  базовые возможности html css</h3>
						<span>ссылка на оригинал дизайна</span>
						<p class="demo"><a href="https://p.w3layouts.com/demos/metushi/web/">https://p.w3layouts.com/demos/metushi/web/</a></p>
            </div>

            <div id="thums">
                <div class="thums_img"><img src="images/8.png" alt="a"/></div>
                <div class="thums_img"><img src="images/7.png" alt="a"/></div>
                <div class="thums_img"><img src="images/6.png" alt="a"/></div>
                <div class="thums_img"><img src="images/5.png" alt="a"/></div>
                <div class="thums_img"><img src="images/4.png" alt="a"/></div>
                <div class="thums_img"><img src="images/3.png" alt="a"/></div>
                <div class="thums_img"><img src="images/2.png" alt="a"/></div>
                <div class="thums_img"><img src="images/1.png" alt="a"/></div>
            </div>

			<table>
				<tbody>
					<tr>
						<td>пример таблицы 2x2</td>
						<td></td>
					</tr>
					<tr>
						<td>1</td><td>2</td>
					</tr>
					<tr>
						<td>1</td><td>2</td>
					</tr>
				</tbody>
			</table>
			<table>
				<tr>
					<td>пример таблицы 3x3</td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td>1</td><td>2</td><td>3</td>
				</tr>
				<tr>
					<td>1</td><td>2</td><td>3</td>
				</tr>
				<tr>
					<td>1</td><td>2</td><td>3</td>
				</tr>
			</table>
			<div class="row">
				<div class="margin">
					<p class="before">псевдоэлемент</p>
				</div>
				<div class="margin">
					<a href="#logo" class="margin">быстрый переход logo</a>
				</div>
			</div>
			<div id="footer">
				<p>2021</p>
			</div>
		</div>
    </div>
    </body>
	)
}

render(
  <HelloWorld/>,  document.getElementById('root')
);