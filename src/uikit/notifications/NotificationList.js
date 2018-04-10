import React from 'react';
import {connect} from 'react-redux';
import Notification from './Notification';
import {createNotification} from './redux';

class NotificationList extends React.Component {
	componentDidMount() {
		const {dispatch} = this.props;
		///
		dispatch(createNotification({
			heading: "Bacha",
			text: "nobore",
			level: "warning",
		}))
		dispatch(createNotification())
		///
	}
	render() {
		const {notifications, dispatch} = this.props;
		const notificationsCount = notifications.length;
		return(
			<div className="streamline message-nicescroll-bar">
				{notifications.map((notification, index)=>(
					<div>
					<Notification notification={notification}/>
					{index+1 < notificationsCount ? (
						<hr className="light-grey-hr ma-0"/>
					) : null}
					</div>
				))}
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		notifications: state.notifications.notifications,
	}
}
export default connect(mapStateToProps)(NotificationList);
