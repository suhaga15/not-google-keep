import React from 'react';
import Popup from 'reactjs-popup';
import Input from '../NoteInput/input'
import './card.css';

function Card ({note, addNote, deleteNote}) {
    return (
        <>
            <Popup className="popup" trigger ={
                <div className="card">
                    <div className="card-title">
                        <b>{note.title}</b>
                    </div>
                    <div className="card-content">
                        {note.body}
                    </div>
                </div>
            } modal>
                {close=>(
                    <Input close={close} oldNote={note} addNote={addNote} deleteNote={deleteNote}/>
                    )
                }
            </Popup>
        </>
    )
}

export default Card;