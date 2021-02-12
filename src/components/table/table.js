import React from 'react';
import PropTypes from "prop-types";

import './table.css';

const data_table_example2 = "пример таблицы 2x2";
const data_table_example3 = "пример таблицы 3x3";
const data_table_top = "data_table_top";
const data_table_bottom = "data_table_bottom";
const data_table_col2 = "data_table_col2";
const data_table_col3 = "data_table_col3";

const Table = () => {
  return (

	<div>
		<table>
			<tbody>
				<tr>
					<td>{data_table_example2}</td>
					<td></td>
				</tr>
				<tr>
					<td>{data_table_top}</td><td>{data_table_col2}</td>
				</tr>
				<tr>
					<td>{data_table_bottom}</td><td>{data_table_col2}</td>
				</tr>
			</tbody>
		</table>
		<table>
			<tr>
				<td>{data_table_example3}</td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>{data_table_bottom}</td><td>{data_table_col2}</td><td>{data_table_col3}</td>
			</tr>
			<tr>
				<td>{data_table_bottom}</td><td>{data_table_col2}</td><td>{data_table_col3}</td>
			</tr>
			<tr>
				<td>{data_table_bottom}</td><td>{data_table_col2}</td><td>{data_table_col3}</td>
			</tr>
		</table>
	</div>
  );
};

Table.propTypes = {
	data_table_example2 : PropTypes.string,
	data_table_example3 : PropTypes.string,
	data_table_top : PropTypes.string,
	data_table_bottom : PropTypes.string,
	data_table_col2 : PropTypes.string,
	data_table_col3 : PropTypes.string,
};

export default Table ;
