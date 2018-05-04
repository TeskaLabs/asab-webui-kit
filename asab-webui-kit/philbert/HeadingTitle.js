import React, { Component } from 'react';

class HeadingTitle extends Component {
	render() {
		const { children, className } = this.props;
		return (
				<h5 className={`text-dark ${className ? className : ""}`}>{children}</h5>
		);  
	}
}

export default HeadingTitle;
