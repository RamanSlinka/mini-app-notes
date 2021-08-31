import React from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";

const Notes = ({notes, onRemove}) => {
    return (
        <TransitionGroup component="ul" className="list-group">
            {notes.map(note =>
                <CSSTransition
                    key={note.id}
                    classNames={'note'}
                    timeout={1000}
                >
                    <li className="list-group-item note" >
                        <div>
                            <strong className="notes-title"> {note.title} </strong>
                            <small>{note.date}</small>
                        </div>
                        <button
                            type="button"
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => onRemove(note.id)}
                        >
                            &times;
                        </button>
                    </li>
                </CSSTransition>
            )}

        </TransitionGroup>
    );
};

export default Notes;