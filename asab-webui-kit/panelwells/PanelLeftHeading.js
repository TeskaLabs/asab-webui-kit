import React, { Component } from 'react';
import PanelHeading from './PanelHeading';


class PanelLeftHeading extends Component {
	render() {
		const { PanelTitle } = this.props;
		return (
			<PanelHeading> 
			<div className = "pull-left">
                    <h6 class= "panel-title txt-dark">{PanelTitle}</h6>
                </div>
                <div className="clearfix">
	            </div>
            </PanelHeading>
		);
	}
}

export default PanelLeftHeading;
