import React from 'react';
import Popup from 'reactjs-popup';
import Input from '../NoteInput/input'
import './card.css';

function Card ({note, addNote, deleteNote}) {
    return (
        <>
        {/* <script src='https://kit.fontawesome.com/a076d05399.js'></script> */}
        <Popup className="popup" trigger ={
            <div className="card">
                {
                    // title && 
                    // <div className="card-title">
                    //     <b>Title</b>
                    // </div>
                }
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