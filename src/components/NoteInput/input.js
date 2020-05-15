import React from 'react';
import './input.css';

function Input (props) {
    return (
        <div>
            <div className="modal-content">
                <div>
                    <input className="title-input" type="text" placeholder="Add title" />
                    <div style={{float:"right"}}>
                        <button className="modal-function">Delete</button>
                        <button className="modal-function">Pin</button>
                    </div>
                </div>
                <textarea className="note-input" type="text" placeholder="Take a note..." />
                <div className="modal-footer">
                    Last edited at now
                    <button className="modal-function" style={{float:"right"}} onClick={props.close}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Input;