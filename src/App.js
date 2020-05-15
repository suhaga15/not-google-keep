import React, { useState, useEffect } from 'react';
import Card from './components/Card/card';
import Popup from 'reactjs-popup';
import './App.css';
import Input from './components/NoteInput/input';

/* Structure of each note
  {
    title,
    body,
    editedAt,
    pinned,
    id
  }
*/

function App() {
  const [notes, addNote] = useState([]);
  const [filteredItems, setFilteredIttems] = useState([]);
  const [searchText, setSearchText] = useState("");

  // To bring back notes that were created pre refresh
  useEffect(() => {
    if(localStorage.getItem("notes")) {
      let temp = localStorage.getItem("notes");
      addNote(JSON.parse(temp));
    }
  }, []);

  // To make sure created notes are available after refresh
  useEffect(() => {
    localStorage.setItem("notes",JSON.stringify(notes));
    setFilteredIttems(notes);
  }, [notes]);

  // To aid with displaying search results
  useEffect(() => {
    if(searchText==="") {
      setFilteredIttems(notes);
    } else {
      let temp = notes.filter((note) => {
        return (note.title.toLowerCase().includes(searchText) ||
                note.body.toLowerCase().includes(searchText));
      });
      setFilteredIttems(temp);
    }
  }, [searchText])

  const addNewNote = (newNote) => {
    let newNotesArray = notes.filter((note) => {
      return note.id!==newNote.id
    });
    const temp = [...newNotesArray, newNote];
    addNote(temp);
  }

  const deleteNote = (id) => {
    let newArray = notes.filter((note) => {
      return note.id!==id;
    });
    addNote(newArray);
  }

  const changeSearchText = (e) => {
    if(e.target.value) {
      setSearchText(e.target.value);
    } else {
      setSearchText("");
    }
  }

  return (
    <div className="App">
      <h1 className="main-title">
        Not Keep
      </h1>
      <input className="search-bar" type="text" placeholder="Search your notes" onChange={(e)=>{changeSearchText(e)}} />
      <br />
      <br />
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
        // pinned.length!==0 &&
        // <>
        //   <h4 style={{width:'90vw'}}>Pinned</h4>
        //   <div className="cards">
        //     <Card pinned/>
        //   </div>
        //   <div className="separator"></div>
        // </>
      }
      {
        filteredItems.length!==0 ?
        <div className="cards">
          {
            filteredItems.map((note) => {
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
        <div>No notes to display</div>
      }
    </div>
  );
}

export default App;
