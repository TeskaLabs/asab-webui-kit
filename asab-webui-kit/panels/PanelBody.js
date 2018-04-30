import React, { Component } from 'react';


class PanelBody extends Component {
	render() {
		const { children, className } = this.props;
		return (
			<div className={`panel-wrapper collapse in panel-body ${className ? className : ""}`}>
				{children}
			</div>			
		);
	}
}

export default PanelBody;
