import React, { Component } from 'react';

class Panel extends Component {
	render() {
		const { children, className } = this.props;
		return (
			<div className={`panel ${className ? className : ""}`}>
				{children}
			</div>
		);
	}
}

export default Panel;



