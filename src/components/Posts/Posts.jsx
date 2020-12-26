import {useState, Fragment} from 'react';
import './posts.css';
import { Input } from 'antd';
import { Button } from 'antd';
import { Layout } from 'antd';
import Sidebar from '../Sidebar/Sidebar';
import moment from 'moment';
const { TextArea } = Input;
const { Sider, Content } = Layout;

const Posts = () => {
    const [inputText, setInputText] = useState('');
    const [posts, setPosts] = useState(getPostsfromCache());
    const [newPostDialogOpen, setNewPostDialogOpen] = useState(false);
    let siderSyle={
        overflow: 'auto',
        height: '100vh',
        position: 'sticky',
        left: 0,
        top:0
    };

    function getPostsfromCache() {
        return localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : []
    }

    function addPost() {
        let updatedPosts = [
            ...posts,
            {
                data: inputText,
                timeStamp: moment().format('hh:mm A')
            }
        ];
        setPosts(updatedPosts);
        setInputText('');
        setNewPostDialogOpen(false);
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
    }
    
    return ( 
        <Layout className='container'>
            <Sider  breakpoint="lg" collapsedWidth="0" style={siderSyle}> 
                <Sidebar/> 
            </Sider>
        <Layout>
            <Content>
                <div className="posts">
                    <div className="newPost">
                    {
                        newPostDialogOpen ?
                            <Fragment>
                                <TextArea 
                                className='textArea' 
                                bordered={false} 
                                placeholder="Share something with your class..." 
                                allowClear rows={4}
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                />
                                <div className="newPostBtns">
                                    <Button type="text" className='cancelBtn' onClick={() => setNewPostDialogOpen(false)}>Cancel</Button>
                                    <div>
                                        <Button type="text" shape="circle" size={5} className='attachBtn'> <img src="assets/images/vector.svg" alt="attach"/> </Button>
                                        <Button type="text" className='shareBtn' onClick={addPost}>Share</Button>
                                    </div>
                                </div>
                            </Fragment>
                            :
                            <Button type="text" className='createBtn' onClick={() => setNewPostDialogOpen(true)}>Create Post</Button>
                    }
                    </div>
                    
                    {
                        posts.map(
                            (post, index) => (
                                <div className="post" key={index}>
                                    <div className="userInfo">
                                        <img src="assets/images/user.png" alt="userPhoto"/>
                                        <div className="postContent">
                                            <div className="userName">Username</div>
                                            <div className="description">{post.data}</div>
                                        </div>
                                    </div>
                                    <span className="postTime">{post.timeStamp}</span>
                                </div>    
                            )
                        )
                    }
                    
                </div>
            </Content>
        </Layout>
        </Layout>
     );
}
 
export default Posts;