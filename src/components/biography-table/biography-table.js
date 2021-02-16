import React from "react";
import "./biography-table.css";
import PropTypes from "prop-types";

const BiographyTable = () => {
	return (
		<div className="alignCenter">
			<table>
				<tbody>
					<tr>
						<td>2003</td>
						<td>завершил обучение ОСШ</td>
					</tr>
					<tr>
						<td>2008</td>
						<td>завершил обучение КДПУ им.Виннченка</td>
					</tr>
					<tr>
						<td>2014</td>
						<td>обучался верстке сайтов (HTML CSS)</td>
					</tr>
					<tr>
						<td>2016-2021</td>
						<td>обучался программированию (JS, NODEJS)</td>
					</tr>
					<tr>
						<td>2020-2021</td>
						<td>обучался программированию (ReactJS)</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

BiographyTable.propTypes = {
	todos: PropTypes.exact({
		todos: PropTypes.func,
	}),
};

export default BiographyTable;
