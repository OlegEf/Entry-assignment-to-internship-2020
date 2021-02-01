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
	<body>
		<div class="container">
		  <AppHeader />
		  <Menu />
		</div>
		<div class="content">
		  <LinkFooter />
		  <BlockImages />
		  <Table />
		  <LinkMenu />
		  <Footer />
		</div>
	</body>
  );
};

export default App;
