import './app.css';

import Posts from '../Posts/Posts';
import Home from '../Home/Home';
import { Switch, Route, BrowserRouter } from 'react-router-dom';



const App = () => {
    
    return ( 
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/posts' component={Posts}/>
                <Route path='/' component={() => <img className='pathPlaceholder' src='assets/images/wup.gif' alt='Work Under Progress'/>}/>
            </Switch>
        </BrowserRouter>
     );
}
 
export default App;