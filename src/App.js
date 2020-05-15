import React, { useState } from 'react';
import Card from './components/Card/card';
import Popup from 'reactjs-popup';
import './App.css';
import Input from './components/NoteInput/input';

/* Structure of each note
  {
    title,
    body,
    editedAt,
    id
  }
*/

function App() {
  const [notes, addNote] = useState([]);
  const [pinned, addPinned] = useState([]);

  const addNewNote = (newNote, pinned) => {
    let newNotesArray = notes.filter((note) => {
      return note.id!==newNote.id
    });
    const temp = [...newNotesArray, newNote];
    if(!pinned) {
      addNote(temp);
    } else {
      addPinned(temp);
    }
  }

  const deleteNote = (id) => {
    let newArray = notes.filter((note) => {
      return note.id!==id;
    });
    addNote(newArray);
  }

  return (
    <div className="App">
      <h1 className="main-title">
        Not Keep
      </h1>
      <Popup trigger={
        <div className="new-note">
          Take a note...
        </div>
      } modal>
        {
          close=><Input close={close} addNote={addNewNote} />
        }
      </Popup>
      <br />
      {
        pinned.length!==0 &&
        <>
          <h4 style={{width:'90vw'}}>Pinned</h4>
          <div className="cards">
            <Card pinned/>
          </div>
          <div className="separator"></div>
        </>
      }
      {
        notes.length!==0 ?
        <div className="cards">
          {
            notes.map((note) => {
              return(
              <Card 
                key={note.id}
                note={note}
                addNote={addNewNote}
                deleteNote={deleteNote} />)
            })
          }
        </div>
        :
        <div>Create a new note</div>
      }
    </div>
  );
}

export default App;
