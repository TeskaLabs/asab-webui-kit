import React, { Component } from 'react';

class SideBarItemLink extends Component {
	render() {
		const {linkHref, linkTitle, linkActive} = this.props;
		return (
			<li>
				<a className={linkActive ? 'active-page' : ''} href={linkHref}>
					{linkTitle}
				</a>
			</li>
		);
	}
}

export default SideBarItemLink;
