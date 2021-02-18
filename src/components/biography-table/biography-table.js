import React from "react";
import "./biography-table.css";
import PropTypes from "prop-types";

const BiographyTable = ({ todos }) => {
	return (
		<div className="alignCenter">
			<table>
				<tbody>
					<tr>
						<td>{todos[0].label}</td>
					</tr>
					<tr>
						<td>{todos[1].label}</td>
					</tr>
					<tr>
						<td>{todos[2].label}</td>
					</tr>
					<tr>
						<td>{todos[3].label}</td>
					</tr>
					<tr>
						<td>{todos[4].label}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

BiographyTable.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string })).isRequired,
};

export default BiographyTable;
