import React, { Component } from 'react';

class Left extends Component {
	render() {
		const { children, className } = this.props;
		return (
			<div className={`pull-left ${className ? className : ""}`}>
                {children}
            </div>
		);
	}
}

export default Left;
