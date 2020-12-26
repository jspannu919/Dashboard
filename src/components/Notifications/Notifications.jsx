import { Card, Button } from 'antd';
import {Fragment} from 'react';

import './notifications.css';

const Notifications = () => {
    let title = (
        <Fragment>
            <span className="notificationsTitle">Notifications</span>
            <span className="eventsTitle">Events</span>
        </Fragment>
    );
    return (
        <Card title={title} bordered={false} className="notificationsCard">
            <div className="notifications">
                <div className="notificationsContainer">
                    <div className="notification">
                        <div className="userPhoto"></div>
                        <div className="notificationContent">
                            <div className="userName">Teacher</div>
                            <div className="notificationText">Your faculty uploaded the syllabus</div>
                            <div className="notificationTime">3 minutes ago</div>
                        </div>
                    </div>
                    <div className="notification">
                        <div className="userPhoto"></div>
                        <div className="notificationContent">
                            <div className="userName">Student</div>
                            <div className="notificationText">Your faculty uploaded the syllabus</div>
                            <div className="notificationTime">3 minutes ago</div>
                        </div>
                    </div>
                    <div className="notification">
                        <div className="userPhoto"></div>
                        <div className="notificationContent">
                            <div className="userName">Teacher</div>
                            <div className="notificationText">Your faculty uploaded the syllabus</div>
                            <div className="notificationTime">3 minutes ago</div>
                        </div>
                    </div>
                    <div className="notification">
                        <div className="userPhoto"></div>
                        <div className="notificationContent">
                            <div className="userName">Admin</div>
                            <div className="notificationText">Your faculty uploaded the syllabus</div>
                            <div className="notificationTime">3 minutes ago</div>
                        </div>
                    </div>
                    <div className="notification">
                        <div className="userPhoto"></div>
                        <div className="notificationContent">
                            <div className="userName">Teacher</div>
                            <div className="notificationText">Your faculty uploaded the syllabus</div>
                            <div className="notificationTime">3 minutes ago</div>
                        </div>
                    </div>
                </div>
                
            </div>
            <Button type="primary" className='viewAllBtn'>View all</Button>
        </Card> 
    );
}
 
export default Notifications;