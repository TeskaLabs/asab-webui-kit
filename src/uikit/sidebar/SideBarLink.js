import React, { Component } from 'react';

class SideBarLink extends Component {
	render() {
		const {linkHref, linkTargetId, linkTitle, linkActive,
			linkIconClass, linkLabelClass, linkLabelTitle, linkLabelIcon,
			children} = this.props;
		return (
			<li>
				<a className={linkActive ? "active" : ""} 
					href={linkHref}
					data-toggle="collapse"
					data-target={"#" + linkTargetId}>
					<div className="pull-left">
						<i className={"zmdi " + linkIconClass + " mr-20"}></i>
						<span className="right-nav-text">{linkTitle}</span>
					</div>
					<div className="pull-right">
						{linkLabelClass ? (
									<span className={"label " + linkLabelClass}>
										{linkLabelTitle}
									</span>
								) : (
									<i className={"zmdi " + linkLabelIcon}></i>
								) }
					</div>
					<div className="clearfix"></div>
				</a>
				{children}
			</li>
		);
	}
}

export default SideBarLink;
