import React, { useState, useEffect } from 'react';
import Card from './components/Card/card';
import Popup from 'reactjs-popup';
import './App.css';
import Input from './components/NoteInput/input';

/* Structure of each note
  {
    title,
    body,
    editedAt
  }
*/

function App() {
  const [notes, addNote] = [];
  const [pinned, addPinned] = [];
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
          close=><Input close={close} />
        }
      </Popup>
        <br />
      {
        // pinned && 
        // <>
        //   <h4 style={{width:'90vw'}}>Pinned</h4>
        //   <div className="cards">
        //     <Cards pinned/>
        //   </div>
        //   <div className="separator"></div>
        // </>
      }

      {
        notes ?
        <div className="cards">
          <Card />
        </div>
        :
        <div>Create a new note</div>
      }
    </div>
  );
}

export default App;
