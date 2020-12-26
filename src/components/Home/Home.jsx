import './home.css';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Sales from '../Sales/Sales';
import { Layout } from 'antd';
import Sidebar from '../Sidebar/Sidebar';
import Notifications from '../Notifications/Notifications';
import Notepad from '../Notepad/Notepad';


const { Sider, Content } = Layout;

const Home = () => {
    let siderSyle={
        overflow: 'auto',
        height: '100vh',
        position: 'sticky',
        left: 0,
        top:0
    };

    return ( 
        <Layout className='container'>
            <Sider  breakpoint="lg" collapsedWidth="0" style={siderSyle}> 
                <Sidebar/> 
            </Sider>
        <Layout>
            <Content>
                <div className="home">
                    <Input
                    className='search'
                    placeholder="Search"
                    prefix={<SearchOutlined/>}
                    bordered={false}
                    />
                    <div className="content">
                        <Sales/>
                        <Notifications/>
                        <div className="lowerContent">
                            <Notepad/>
                            <div>
                                <img src="assets/images/graph.svg" alt="graph" className='placeHolderImg'/>
                                <img src="assets/images/inbox.svg" alt="graph" className='placeHolderImg'/>
                            </div>
                            <div>
                                <div className="monthlyData">
                                    <div className="monthlyDataTitle">This Month</div>
                                    <div className="monthlyDataContent">
                                        <div className="monthlyDataPercent">+7.8%</div>
                                        <img src="assets/images/seriesGraph1.svg" alt="graph"/>
                                    </div>
                                </div>
                                <div className="monthlyData">
                                    <div className="monthlyDataTitle">Last Month</div>
                                    <div className="monthlyDataContent">
                                        <div className="monthlyDataPercent">+67.4%</div>
                                        <img src="assets/images/seriesGraph2.svg" alt="graph"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
        </Layout>
        </Layout>
    );
}
 
export default Home;