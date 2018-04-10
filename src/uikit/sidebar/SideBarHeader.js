import React, { Component } from 'react';
import SideBarLink from './SideBarLink'

class SideBarHeader extends Component {
	render() {
		const { headerTopLine, headerTitle } = this.props;
		return (
			<li className="navigation-header">
				{
					headerTopLine ? (
						<hr className="light-grey-hr mb-10" />
					) : ""
				}
				<span>{headerTitle}</span> 
				<i className="zmdi zmdi-more"></i>
			</li>
		);
	}
}

export default SideBarHeader;
