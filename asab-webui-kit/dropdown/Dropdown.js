import React, { Component } from 'react';


class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.selectItem = this.selectItem.bind(this);
	}

	selectItem(item) {
		this.setState({
			activeItem: item,
		})
		if (this.props.onItemSelect)
			this.props.onItemSelect(item.props.value);
	}
	render() {
		const activeItem = this.props.children.filter((item) => item.props.value === this.props.value)[0];

		return (
			<div className="dropdown">
				<button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true">
					{activeItem.props.title}
				</button>
				<ul className="dropdown-menu">
					{React.Children.map(this.props.children, child => (
						React.cloneElement(child, { onSelect: this.selectItem }
					)))}
				</ul>
			</div>
		);
	}
}

export default Dropdown;
