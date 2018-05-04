import React, { Component } from 'react';
import Row from '../bootstrap/Row';

class HeadingRow extends Component {
	render() {
		const { children, className } = this.props;
		return (
			<Row >
				<div className={`heading-bg row ${className ? className : ""}`}>
					{children}
				</div>
			</Row>

		);
	}
}

export default HeadingRow;

