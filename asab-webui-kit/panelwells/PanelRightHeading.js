import React, { Component } from 'react';

class PanelLeftHeading extends Component {
	render() {
		const { Label } = this.props;
		return (
			<div className="pull-right">
                    <span className="label label-info capitalize-font inline-block ml-10">{Label}</span>
                </div>

		);
	}
}

export default PanelLeftHeading;