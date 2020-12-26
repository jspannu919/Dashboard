import {Card} from 'antd';
import './sales.css';

const Sales = () => {
    return ( 
        <Card  
        title={ 
            <span>Sales Report 
                <span className='dateTitle'>September 2020</span>
            </span>
        }
        className='salesCard'
        >
        <div className="salesReport">
            <img src='assets/images/sales.svg' alt='sales'/>
            <div className="salesSidebar">
                <span className="salesSidebarDate">17 Sep</span>
                <div className="salesRevenue">
                    <div>$1,204.33</div>
                    <div>Revenue</div>
                </div>
                <div className="salesQuotations">
                    <div>33</div>
                    <div>Quotations</div>
                </div>
            </div>
        </div>
        </Card>
     );
}
 
export default Sales;