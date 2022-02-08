import React, { useContext } from 'react';
import noteContext from '../Context/notes/noteContext';
import AddNote from './AddNote';
import NoteItem from './NoteItem';

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, addNote } = context;
    console.log("notes", notes)
    
    return (
        <>
            <AddNote />
            <div className='row my-3'>
                <h2>Add a Note</h2>
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} />
                })}
            </div></>
    )
};

export default Notes;
