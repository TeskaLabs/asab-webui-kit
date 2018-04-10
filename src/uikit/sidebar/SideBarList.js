import React, { Component } from 'react';
import SideBarLink from './SideBarLink'

class SideBarList extends Component {
	render() {
		const {listId, listTitle, listIconClass, listActive,
			listLabelClass, listLabelTitle, children} = this.props;
		return (
			<SideBarLink
				linkHref="javascript:void(0);"
				linkTargetId={listId}
				linkTitle={listTitle}
				linkActive={listActive}
				linkIconClass={listIconClass}
				linkLabelClass={listLabelClass}
				linkLabelTitle={listLabelTitle}
				linkLabelIcon={"zmdi-caret-down"}>
				<ul id={listId} className="collapse collapse-level-1">
					{children}
				</ul>
			</SideBarLink>
		);
	}
}

export default SideBarList;
