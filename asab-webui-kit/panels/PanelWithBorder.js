import React, { Component } from 'react';

class PanelWithBorder extends Component {
	render() {
		const { children } = this.props;
		return (
			<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
				<div className = "panel panel-default border-panel card-view">
                    {children}
                </div>
			</div>
		);
	}
}

export default PanelWithBorder;



