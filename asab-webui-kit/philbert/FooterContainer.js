
import React, { Component } from 'react';


class FooterContainer extends Component {
	render() {
		const { children, className } = this.props;
		return (
			<footer className={`footer container-fluid pl-30 pr-30 ${className ? className : ""}`}>
				{children}
			</footer>
		);
	}
}

export default FooterContainer;
