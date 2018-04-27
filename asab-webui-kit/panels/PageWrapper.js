import React, { Component } from 'react';

class PageWrapper extends Component {
	componentDidMount() {
		window.setHeightWidth();
			}
	render() {
		return (
			<div className="page-wrapper">
				{this.props.children}
			</div>
		);
	}
}

export default PageWrapper;
