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

	PageWrapper,
	Container,
	HeadingRow,
	Title,
	Breadcrumb,
	BreadcrumbItem,
	Row,
	Col,
	Panel,
	PanelHeading,
	PanelRightHeading,
	PanelLeftHeading,
	PanelBody,
	PanelInfo,
	PanelWarning,
	PanelDanger,
	PanelSuccess,
	PanelPrimary,
	PanelInverse,
	ColoredPanelLeftHeading,
	PanelWithBorder,


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
		}, 3000);

		this.websocket = new WebSocket(((window.location.protocol === "https:") ? "wss://" : "ws://") + window.location.host + "/api/ws");
		this.websocket.onmessage = function (e) {
			window.$.toast({
				heading: "This is pushed from ASAB",
				text: e.data,
				position: 'top-right',
				loaderBg:'#f0c541',
				icon: 'success',
				hideAfter: 3500,
				stack: 6
			});
			console.log(e);
		};

		this.websocket.onopen = function () {
			this.send("Hi, from the client.");
		};

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
				<PageWrapper >

					<Container>
							<HeadingRow>
								<Title headerTitle="Nadpis" />
							<Breadcrumb>
								<BreadcrumbItem linkHref="index.js" linkTitle="Dashboard" linkActive={false} />
								<BreadcrumbItem linkHref="index.js" linkTitle="UI Elements" linkActive={false} />
								<BreadcrumbItem linkHref="index.js" linkTitle="Dashboard" linkActive={true} />
							</Breadcrumb>
						</HeadingRow>
						<Row>
							<Col sm="4" className="TEST">
								Column 1
							</Col>
							<Col sm="4">
								Column 2
							</Col>
							<Col sm="4">
								Column 3
							</Col>
						</Row>
						<Row>
							<Panel>
								<PanelHeading>
									<PanelLeftHeading PanelTitle="Default Panel"/>
								</PanelHeading>
								<PanelBody PanelText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue."/>
							</Panel>
							<Panel>
								<PanelHeading>
									<PanelLeftHeading PanelTitle="Panel with label"/>
									<PanelRightHeading Label="Lorem"/>
								</PanelHeading>
								<PanelBody PanelText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue."/>
							</Panel>
							<PanelWithBorder>
								<PanelHeading>
									<PanelLeftHeading  PanelTitle="Panel With Border"  />
								</PanelHeading>
								<PanelBody PanelText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue."/>

							</PanelWithBorder>
						</Row>
						<Row>
							<PanelInfo>
								<PanelHeading>
									<ColoredPanelLeftHeading PanelTitle="Panel Info"/>
								</PanelHeading>
								<PanelBody PanelText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue."/>
							</PanelInfo>
							<PanelWarning>
								<PanelHeading>
									<ColoredPanelLeftHeading PanelTitle="Panel Warning"/>
								</PanelHeading>
								<PanelBody PanelText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue."/>
							</PanelWarning>
							<PanelDanger>
								<PanelHeading>
									<ColoredPanelLeftHeading PanelTitle="Panel Danger"/>
								</PanelHeading>
								<PanelBody PanelText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue."/>
							</PanelDanger>

						</Row>
						<Row>
							<PanelSuccess>
								<PanelHeading>
									<ColoredPanelLeftHeading PanelTitle="Panel Success"/>
								</PanelHeading>
								<PanelBody PanelText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue."/>
							</PanelSuccess>
							<PanelPrimary>
								<PanelHeading>
									<ColoredPanelLeftHeading PanelTitle="Panel Primary"/>
								</PanelHeading>
								<PanelBody PanelText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue."/>
							</PanelPrimary>
							<PanelInverse>
								<PanelHeading>
									<PanelLeftHeading PanelTitle="Panel Inverse"/>
								</PanelHeading>
								<PanelBody PanelText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue."/>
							</PanelInverse>

						</Row>


					</Container>
				</PageWrapper>



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
