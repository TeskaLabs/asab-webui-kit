import React, { Component } from 'react';

class BreadcrumbItem extends Component {
	render() {
		const {linkHref, linkTitle, linkActive} = this.props;
		return (
			
			linkActive ? (
				<li className= 'active'>
				<span >
					{linkTitle}
					</span>
				</li>
			): (
				<li>
					<a href={linkHref}>
						<span>
							{linkTitle}
					   </span>
					</a>
				</li>
			)
				
			
		);
	}
}

export default BreadcrumbItem;
