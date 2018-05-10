import React, { Component } from 'react';


class DropdownItem extends React.Component {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}
	onClick() {
		this.props.onSelect(this);
	}
	render() {
		const {title} = this.props;
		return (
			<li><a href="javascript:void(0)" onClick={this.onClick}>{title}</a></li>
		)
	}
}

export default DropdownItem;
