import {useState} from 'react';
import './notepad.css';
import { Card, Tooltip, Modal, Button, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const Notepad = () => {
   const [notes, setNotes] = useState(getNotesfromCache);
   const [newNoteModalVisible, setNewNoteModalVisible] = useState(false);
   const [noteText, setNoteText] = useState('');
   const [noteTitle, setNoteTitle] = useState('');
   
   function getNotesfromCache() {
        return localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : []
    }
    
    function addNote() {
        if(noteText.length === 0 || noteTitle.length === 0) closeModal();
       
        let updatedNotes = [
            ...notes,
            {
                title: noteTitle,
                text: noteText
            }
        ];
        setNotes(updatedNotes);
        closeModal();
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
    }

    function limitNoteLength(data,label){
        if(label === 'title' && data.length>7){
            return data.slice(0,10)+'...';
        }
        else if(label === 'text' && data.length>15){
            return data.slice(0,20)+'...';
        }
        return data;
    }

    function closeModal(){
        setNewNoteModalVisible(false);
        setNoteText('');
        setNoteText('');
    }

    return ( 
        <Card title="Notepad" bordered={false} className='notepad'>
            <div className="notes">
                {
                    notes.map((note) => (
                        <div className="note">
                            <Tooltip title={note.title}  >
                                <span className="noteTitle">{limitNoteLength(note.title, 'title')}  </span>
                            </Tooltip>
                            <Tooltip title={note.text}  >
                                <span className="noteText">{limitNoteLength(note.text, 'text')}</span>
                            </Tooltip>
                        </div>
                    ))
                }
            </div>
            <Button type="primary" shape="circle" icon={<PlusOutlined className='addNoteBtnText' />} onClick={() => setNewNoteModalVisible(true)} className='addNoteBtn'/> 
            <Modal title="Add Note" okText='Add' cancelText='' visible={newNoteModalVisible} onOk={addNote} onCancel={closeModal} >
                <div className="modal">
                    <span className="noteText">Title  </span><Input  onChange={(e)=> setNoteTitle(e.target.value)}/>
                    <br/>
                    <br/>
                    <span className="noteText">Text  </span><Input.TextArea  onChange={(e)=> setNoteText(e.target.value)} rows={5} />
                </div>    
            </Modal>      
        </Card>
        
    );
}
 
export default Notepad;