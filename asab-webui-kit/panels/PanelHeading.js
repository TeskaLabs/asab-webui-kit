import React, { Component } from 'react';


class PanelHeading extends Component {
	render() {
		const { children } = this.props;
		return (
			<div className="panel-heading">
				{children}
				<div className="clearfix"/>
            </div>
			
		);
	}
}

export default PanelHeading;
