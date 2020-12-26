import React from 'react';
import { Menu } from 'antd';
import './sidebar.css';
import {Link} from 'react-router-dom';

const App = () => {
    let menuStyles = {
        backgroundColor: '#FF6C40',
        color: '#FFF',
        height: '100%',
        fontSize: '16px',
        // position: 'fixed',
        // top: 0,
        // left: 0,
        // bottom: 0,
        // right: 0,
        // overflow: 'auto'
    };

    

    return ( 
        <Menu style={menuStyles}>
            <Menu.Item>
                <Link to="/" >
                    <img src='assets/images/dashboard.svg' alt='dashboard' className='menuIcon'/>
                    <span className="menuLabel">Dashboard</span>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/lorem" >
                    <img src='assets/images/lorem.svg' alt='dashboard' className='menuIcon'/>
                    <span className="menuLabel">Lorem</span>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/ipsum" >
                    <img src='assets/images/ipsum.svg' alt='dashboard' className='menuIcon'/>
                    <span className="menuLabel">Ipsum</span>
                </Link>
            </Menu.Item>
        </Menu>
     );
}
 
export default App;