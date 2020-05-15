import React from 'react';
import Popup from 'reactjs-popup';
import Input from '../NoteInput/input'
import './card.css';

function Card () {
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
                    <b>Title</b>
                </div>
                <div className="card-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum
                </div>
            </div>
        } modal>
            {close=>(
                <Input close={close} />
            )
            }
        </Popup>
        </>
    )
}

export default Card;