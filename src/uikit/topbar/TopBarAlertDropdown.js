import React, { Component } from 'react';
import TopBarDropdown from './TopBarDropdown'

class TopBarAlertDropdown extends Component {
	render() {
		const { iconBadgeText, children } = this.props;
		return (
			<TopBarDropdown
				iconClass="zmdi-notifications"
				dropdownClass="alert-drp"
				menuClass="alert-dropdown"
				effectIn="bounceIn"
				effectOut="bounceOut"
				iconBadgeText={iconBadgeText}>
				{children}
			</TopBarDropdown>
		);
	}
}

export default TopBarAlertDropdown;
