import React, { Component } from 'react';

class Title extends Component {
	render() {
		const { headerTitle } = this.props;
		return (
			<div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
				<h5 className="text-dark">{headerTitle}</h5>
			</div>
		);
	}
}

export default Title;
