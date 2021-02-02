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

  return (
		<div class="container">
		  <AppHeader />
		  <Menu />
		  <LinkFooter />
		  <BlockImages />
		  <Table />
		  <LinkMenu />
		  <Footer />
		</div>
  );
};

export default App;

		// <div class="content">
	// <body>
	// </body>
