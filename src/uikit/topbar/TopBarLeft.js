import React, { Component } from 'react';

class TopBarLeft extends Component {
	render() {
		return (
			<div className="mobile-only-brand pull-left">
				{this.props.children}
			</div>
		);
	}
}

export default TopBarLeft;
