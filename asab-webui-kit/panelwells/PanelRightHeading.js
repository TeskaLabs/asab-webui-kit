import React, { Component } from 'react';
import PanelHeading from './PanelHeading';


class PanelLeftHeading extends Component {
	render() {
		const { Label } = this.props;
		return (
			<PanelHeading> 
			<div className = "pull-right">
                    <span class ="label label-info capitalize-font inline-block ml-10">{Label}</span>
                </div>
                <div className="clearfix">
	            </div>
            </PanelHeading>
		);
	}
}

export default PanelLeftHeading;