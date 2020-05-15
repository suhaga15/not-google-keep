import React, {useState, useEffect} from 'react';
import {v4 as uuid} from 'uuid';
import './input.css';

function Input ({oldNote, close, addNote, deleteNote}) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    useEffect(()=>{
        if(oldNote && oldNote.title!=="") {
            setTitle(oldNote.title);
        }
        if(oldNote && oldNote.body!=="") {
            setBody(oldNote.body);
        }
    }, [])

    const handleSave = () => {
        if(title==="" && body==="") {
            alert("Enter content in the note to save");
            return;
        }
        const temp = {
            title: title,
            body: body,
            editedAt: new Date(),
            id: uuid()
        }
        console.log(temp);
        addNote(temp, false);
        close();
    }

    const changeTitle = (e) => {
        if(e.target.value) {
            setTitle(e.target.value);
        } else {
            setTitle("");
        }
    }

    const changeBody = (e) => {
        if(e.target.value) {
            setBody(e.target.value);
        } else {
            setBody("");
        }
    }

    return (
        <div>
            <div className="modal-content">
                <div>
                    <input className="title-input" type="text" value={title} placeholder="Add title" onChange={(e) => {changeTitle(e)}} />
                    <div style={{float:"right"}}>
                        <button className="modal-function" onClick={()=>{deleteNote(oldNote.id);close();}}>Delete</button>
                        <button className="modal-function">Pin</button>
                    </div>
                </div>
                <textarea className="note-input" type="text" value={body} placeholder="Take a note..."  onChange={(e) => {changeBody(e)}} />
                <div className="modal-footer">
                    {
                        // editedAt ?
                        // <>Last edited at {editedAt}</>
                        // :
                        // <>Last edited at now</>
                    }
                    edited now
                    <button className="modal-function" style={{float:"right"}} onClick={close}>Cancel</button>
                    <button className="modal-function" style={{float:"right"}} onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default Input;