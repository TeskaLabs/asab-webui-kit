import React, { Component } from 'react';

class TopBarMenuButton extends Component {
	render() {
		return (
			<a id="toggle_nav_btn" className="toggle-left-nav-btn inline-block ml-20 pull-left" href="javascript:void(0);">
				<i className="zmdi zmdi-menu"></i>
			</a>
		);
	}
}

export default TopBarMenuButton;
