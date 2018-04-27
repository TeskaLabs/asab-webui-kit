import React, { Component } from 'react';

class PanelTitle extends Component {
	render() {
		const { children, className } = this.props;
		return (
            <h6 className={`panel-title txt-dark ${className ? className : ""}`}>{children}</h6>
		);
	}
}

export default PanelTitle;
