import React from 'react';

import AppHeader from '../app-header';
import Menu from '../menu';

import './app.css';

const App = () => {

  return (
	<body>
		<div class="container">
		  <AppHeader />
		  <Menu />
		</div>
	</body>
  );
};

export default App;
