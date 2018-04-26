import React, { Component } from 'react';

class PanelLeftHeading extends Component {
	render() {
		const { PanelTitle } = this.props;
		return (
			<div className = "pull-left">
                    <h6 className= "panel-title txt-dark">{PanelTitle}</h6>
            </div>
		);
	}
}

export default PanelLeftHeading;
