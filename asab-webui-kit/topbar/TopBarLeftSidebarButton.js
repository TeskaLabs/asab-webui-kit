import React, { Component } from 'react';

class TopBarLeftSidebarButton extends Component {
	render() {
		const { className, ...props } = this.props;
		return (
			<a {...props} id="toggle_nav_btn" className={`toggle-left-nav-btn inline-block ml-20 pull-left" href="javascript:void(0); ${className ? className : ""}`}>
				<i className="zmdi zmdi-menu"></i>
			</a>
		);
	}
}

export default TopBarLeftSidebarButton;
