import React, { Component } from 'react';

class SideBar extends Component {
	render() {
		return (
			<div className="fixed-sidebar-left">
				<ul className="nav navbar-nav side-nav nicescroll-bar">
					{this.props.children}
				</ul>
			</div>
		);
	}
}

export default SideBar;
