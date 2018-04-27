import React, { Component } from 'react';

class Right extends Component {
	render() {
		const { children, className } = this.props;
		return (
			<div className={`pull-right ${className ? className : ""}`}>
                {children}
            </div>
		);
	}
}

export default Right;
