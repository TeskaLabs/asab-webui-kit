import React, { Component } from 'react';
import { initPhilbertDropdownEffectors } from '../philbert/dropdown';

class TopBarDropdown extends Component {
	componentDidMount() {
		initPhilbertDropdownEffectors();
	}

	render() {
		const { iconClass, iconBadgeText, children,
			dropdownClass, menuClass, effectIn, effectOut } = this.props;
		return (
			<ul className="nav navbar-right top-nav pull-right">
				<li className={`dropdown ${dropdownClass}`}>
					<a href="#" className="dropdown-toggle" data-toggle="dropdown">
						<i className={"zmdi " + iconClass + " top-nav-icon"}></i>
						{
							iconBadgeText ? (
								<span className="top-nav-icon-badge">{iconBadgeText}</span>
							) : ''
						}
					</a>
					<ul className={"dropdown-menu " + menuClass}
						data-dropdown-in={effectIn} data-dropdown-out={effectOut}>
						{children}
					</ul>
				</li>
			</ul>
		);
	}
}

export default TopBarDropdown;
