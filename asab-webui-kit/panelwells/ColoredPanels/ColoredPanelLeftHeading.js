import React, { Component } from 'react';

class ColoredPanelLeftHeading extends Component {
	render() {
		const { PanelTitle } = this.props;
		return (
			<div className = "pull-left">
                    <h6 className= "panel-title txt-light">{PanelTitle}</h6>
            </div>
		);
	}
}

export default ColoredPanelLeftHeading;
