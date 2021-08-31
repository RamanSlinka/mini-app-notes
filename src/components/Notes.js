import React from 'react';

const Notes = ({notes, onRemove}) => {
    return (
        <ul className="list-group">
            {notes.map(note =>
                <li className="list-group-item note"
                    key={note.id}
                >
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
            )}

        </ul>
    );
};

export default Notes;