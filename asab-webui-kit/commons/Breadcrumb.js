import React, { Component } from 'react';


class Breadcrumb extends Component {
	render() {
		const { children, className } = this.props;
		return (
			<ol className={`breadcrumb ${className ? className : ""}`}>
				{children}
			</ol>
		);
	}
}

export default Breadcrumb;


