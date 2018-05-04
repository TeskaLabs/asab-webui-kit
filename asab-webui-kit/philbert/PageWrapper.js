import React, { Component } from 'react';

class PageWrapper extends Component {
	componentDidMount() {
		window.setHeightWidth();
			}
	render() {
		const { children, className } = this.props;
		return (
			<div className={`page-wrapper ${className ? className : ""}`}>
				{children}
			</div>
		);
	}
}

export default PageWrapper;
