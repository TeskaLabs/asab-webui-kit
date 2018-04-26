import React, { Component } from 'react';

class Panel extends Component {
	render() {
		const { children } = this.props;
		return (
			<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
				<div className = "panel panel-warning card-view">
                    {children}
                </div>
			</div>
		);
	}
}

export default Panel;
