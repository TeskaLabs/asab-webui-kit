import React, { Component } from 'react';

class TopBarBrand extends Component {
	render() {
		const {brandImgSrc, brandImgAlt, brandTitle, brandHref} = this.props;
		return (
			<div className="nav-header pull-left">
				<div className="logo-wrap">
					<a href={brandHref}>
						<img className="brand-img" src={brandImgSrc} alt={brandImgAlt} />
						<span className="brand-text">{brandTitle}</span>
					</a>
				</div>
			</div>
		);
	}
}

export default TopBarBrand;
