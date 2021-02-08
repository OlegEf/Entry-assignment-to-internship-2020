import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

class ParentComponent extends Component {
	render() {
		return (
			<div>
				<h1>
					<PersonComponent name="React.PropTypes has moved into a different package since React v" age={15.5} />
				</h1>
			</div>
		);
	}
}


export default ParentComponent;


const PersonComponent = (props) => {
	return (
		<div>
			<p>
				{props.name}{props.age}
			</p>
		</div>
	);
};


PersonComponent.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
};

ReactDOM.render(
	React.createElement(ParentComponent, null), document.getElementById("root"));
