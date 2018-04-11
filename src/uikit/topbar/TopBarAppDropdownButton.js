import React, { Component } from 'react';
import TopBarDropdown from './TopBarDropdown'

class TopBarAppDropdownButton extends Component {
	render() {
		return (
			<TopBarDropdown
				iconClass="zmdi-apps"
				dropdownClass="app-drp open"
				menuClass="app-dropdown"
				effectIn="slideInRight"
				effectOut="flipOutX">
			</TopBarDropdown>
		);
	}
}

export default TopBarAppDropdownButton;
