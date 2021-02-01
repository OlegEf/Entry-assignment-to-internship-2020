import React from 'react';

import './table.css';

const Table = () => {
  return (
	<div>
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
	</div>
  );
};

export default Table ;
