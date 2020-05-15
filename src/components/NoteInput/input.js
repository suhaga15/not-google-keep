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
    }, []);

    const formatDate = () => {
        if(oldNote) {
            let date = oldNote.editedAt.day;
            let month = oldNote.editedAt.month;
            let year = oldNote.editedAt.year;
            let hour = oldNote.editedAt.hour > 9 ? oldNote.editedAt.hour : '0' + oldNote.editedAt.hour;
            let minutes = oldNote.editedAt.minutes > 9 ? oldNote.editedAt.minutes : '0' + oldNote.editedAt.minutes;
            let finalDate = date + "/" + month + "/" + year + " at " + hour + ":" + minutes;
            return finalDate;
        }
    }

    const handleSave = () => {
        if(title==="" && body==="") {
            alert("Enter content in the note to save");
            return;
        }
        let date = new Date();
        const temp = {
            title: title,
            body: body,
            editedAt: {
                day: date.getDate(),
                month: date.getMonth() + 1,
                year: date.getFullYear(),
                hour: date.getHours(),
                minutes: date.getMinutes()
            },
            id: oldNote ? oldNote.id : uuid()
        }
        addNote(temp);
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
                        oldNote!==undefined ?
                        <>Last edited on {formatDate()}</>
                        :
                        <>Last edited now</>
                    }
                    <div style={{float:"right"}}>
                        <button className="modal-function" onClick={handleSave}>Save</button>
                        <button className="modal-function" onClick={close}>Cancel</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Input;