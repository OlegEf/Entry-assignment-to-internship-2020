import React from 'react';

import AppHeader from '../app-header';
import Menu from '../menu';
import LinkFooter from '../link-footer';
import BlockImages from '../block-images';
import Table from '../table';
import LinkMenu from '../link-menu';
import Footer from '../footer';

import './app.css';

const App = () => {

const todoData = [
	{src:"images/8.png", alt:"a"},
	{src:"images/7.png", alt:"a"},
	{src:"images/6.png", alt:"a"},
	{src:"images/5.png", alt:"a"},
	{src:"images/4.png", alt:"a"},
	{src:"images/3.png", alt:"a"},
	{src:"images/2.png", alt:"a"},
	{src:"images/1.png", alt:"a"},
] ;

  return (
		<div class="container">
		  <AppHeader />
		  <Menu />
		  <LinkFooter />
		  <BlockImages todos={todoData} />
		  <Table />
		  <LinkMenu />
		  <Footer />
		</div>
  );
};

export default App;
