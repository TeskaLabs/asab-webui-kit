import React, { Component } from 'react';


class PanelBody extends Component {
	render() {
		const { PanelText } = this.props;
		return (
			<div className="panel-wrapper collapse in">
                <div className="panel-body">
                    <p>{PanelText}</p>
                </div>
            </div>
		);
	}
}

export default PanelBody;
