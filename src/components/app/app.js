import React from "react";
import AppHeader from "../app-header";
import Menu from "../menu";
import LinkFooter from "../link-footer";
import Table from "../table";
import LinkMenu from "../link-menu";
import Footer from "../footer";
import "./app.css";

const App = () => {
	return (
		<div className="col-12" >
			<AppHeader />
			<Menu />
			<LinkFooter />
			<Table />
			<LinkMenu fast_move={"быстрый переход logo"} />
			<Footer />
		</div>
	);
};

export default App;
