import React, { Component } from 'react';


class Breadcrumb extends Component {
	render() {
		const { headerTitle, children } = this.props;
		return (
			<div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
				<ol className="breadcrumb">
					{children}
				</ol>
			</div>
		);
	}
}

export default Breadcrumb;


