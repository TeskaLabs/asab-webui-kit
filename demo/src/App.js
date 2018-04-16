import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
// import './App.css';

import {
  TopBar,
  TopBarLeft,
  TopBarRight,
  TopBarBrand,

  TopBarLeftSidebarButton,
  TopBarAlertDropdown,
  TopBarMegaMenuButton,
  TopBarAppDropdownButton,

	SideBar,
  SideBarList,
  SideBarItemLink,
  SideBarLink,
  SideBarHeader,

  NotificationList,
  notificationsRedux
} from 'asab-webui-kit';

const createNotification = notificationsRedux.createNotification;

class App extends Component {

	componentDidMount() {
		const {dispatch} = this.props;
		///
		setTimeout(() => {
			window.$.toast({
				heading: 'Welcome to Philbert',
				text: 'Use the predefined ones, or specify a custom position object.',
				position: 'top-right',
				loaderBg:'#f0c541',
				icon: 'success',
				hideAfter: 3500,
				stack: 6
			})
			dispatch(createNotification({
				heading: "Welcome to Philbert",
				text: "Use the predefined ones, or specify a custom position object.",
				level: "warning",
				avatarSrc: "/media/philbert/img/user1.png",
			}))
		}, 3000)
	}

	render() {
		const {notifications} = this.props
		return (
			<div className="App">
				<TopBar>
					<TopBarLeft>
						<TopBarBrand brandTitle="ASAB" brandImgSrc="media/philbert/img/logo.png" brandHref="index.html" />
						<TopBarLeftSidebarButton />
					</TopBarLeft>
					<TopBarRight>
					<TopBarAlertDropdown
						iconBadgeText={notifications.length}>
						<li>
							<NotificationList />
						</li>
					</TopBarAlertDropdown>
					<TopBarMegaMenuButton />
					<TopBarAppDropdownButton />
					</TopBarRight>
				</TopBar>

				<SideBar>
					<SideBarHeader headerTitle="Component" />
					<SideBarList listId="dashboard"
											listActive="true"
											listTitle="PRO List"
											listIconClass="zmdi-landscape">
						<SideBarItemLink linkHref="#" linkTitle="I am PRO" />
						<SideBarItemLink linkHref="#" linkTitle="I am FREE" linkActive="true" />
					</SideBarList>
					<SideBarHeader headerTitle="Second section" headerTopLine="true" />
					<SideBarList listId="commerce"
											listTitle="FREE List"
											listIconClass="zmdi-shopping-basket"
											listLabelClass="label-success"
											listLabelTitle="150">
						<SideBarItemLink linkHref="#" linkTitle="You are PRO" />
						<SideBarItemLink linkHref="#" linkTitle="You are FREE" />
					</SideBarList>
					<SideBarLink linkHref="#"
											linkIconClass="zmdi-shopping-basket"
											linkTitle="Outsider"
											linkLabelClass="label-warning"
											linkLabelTitle="9" />
				</SideBar>
			</div>
		);
	}

}

const mapStateToProps = (state) => {
	return {
		notifications: state.notifications.notifications,
	}
}
export default connect(mapStateToProps)(App);
