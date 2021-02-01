import React from 'react';

import AppHeader from '../app-header';
import Menu from '../menu';
import LinkFooter from '../link-footer';
import BlockImages from '../block-images';
import Table from '../table';

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
		</div>
	</body>
  );
};

export default App;
