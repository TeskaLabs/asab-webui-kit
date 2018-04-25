import React, { Component } from 'react';
import Row from './Row';

class HeadingRow extends Component {
	render() {
		const { children } = this.props;
		return (
			<Row >
			<div className="heading-bg row">
        		{children}
            </div>
			</Row>

		);
	}
}

export default HeadingRow;