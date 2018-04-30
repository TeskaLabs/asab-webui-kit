import React, { Component } from 'react';


class PanelHeading extends Component {
	render() {
		const { children, className } = this.props;
		return (
			<div className={`panel-heading ${className ? className : ""}`}>
				{children}
				<div className="clearfix"/>
			</div>
			
		);
	}
}

export default PanelHeading;
