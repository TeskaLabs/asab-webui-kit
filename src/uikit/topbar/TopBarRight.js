import React, { Component } from 'react';

class TopBarRight extends Component {
	render() {
		return (
			<div id="mobile_only_nav" className="mobile-only-nav pull-right">
				{this.props.children}
			</div>
		);
	}
}

export default TopBarRight;
