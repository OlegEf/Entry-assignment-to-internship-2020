import React from "react";
import AppHeader from "../app-header";
import Menu from "../menu";
import LinkFooter from "../link-footer";
import BiographyTable from "../biography-table";
import LinkMenu from "../link-menu";
import Footer from "../footer";
import "./app.css";

const App = () => {
	const todoData = [
		{ label: "2003 завершил обучение ОСШ", important: false },
		{ label: "2008 завершил обучение КДПУ им.Виннченка", important: false },
		{ label: "2014 обучался верстке сайтов (HTML CSS)", important: false },
		{ label: "2016-2021 обучался программированию (JS, NODEJS)", important: false },
		{ label: "2020-2021 обучался программированию (ReactJS)", important: false },
	];

	return (
		<div className="col-12">
			<AppHeader />
			<Menu />
			<LinkFooter fast_move_footer={"быстрый переход footer"} />

			<BiographyTable todos={todoData} />

			<LinkMenu fast_move={"быстрый переход logo"} />
			<Footer />
		</div>
	);
};

export default App;
