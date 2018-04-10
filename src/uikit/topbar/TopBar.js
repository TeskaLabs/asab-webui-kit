import React, { Component } from 'react';

class TopBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-inverse navbar-fixed-top">
				{this.props.children}
			</nav>
		);
	}
}

export default TopBar;
