import { useState } from "react";
import NoteContext from "./noteContext"

const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "61322f19k553781a8ca8d0e06",
      "user": "6131dc5e3e4037cd4734a066",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2021-09-03T14:20:09.509Z",
      "__v": 0
    },
    {
      "_id": "61322f195h53781a8ca8d0e08",
      "user": "6131dc5e3e4037cd4734a066",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2021-09-03T14:20:09.668Z",
      "__v": 0
    },
    {
      "_id": "61322f19t553781a8ca8d0e08",
      "user": "6131dc5e3e4037cd4734a066",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2021-09-03T14:20:09.668Z",
      "__v": 0
    },
    {
      "_id": "61322f19g553781a8ca8d0e08",
      "user": "6131dc5e3e4037cd4734a066",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2021-09-03T14:20:09.668Z",
      "__v": 0
    },
    {
      "_id": "61322f1d9553781a8ca8d0e08",
      "user": "6131dc5e3e4037cd4734a066",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2021-09-03T14:20:09.668Z",
      "__v": 0
    },
    {
      "_id": "61322fc19553781a8ca8d0e08",
      "user": "6131dc5e3e4037cd4734a066",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2021-09-03T14:20:09.668Z",
      "__v": 0
    },
    {
      "_id": "6132s2f19553781a8ca8d0e08",
      "user": "6131dc5e3e4037cd4734a066",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2021-09-03T14:20:09.668Z",
      "__v": 0
    },
  ]
  const [notes, setNotes] = useState(notesInitial)

  //Add A Note
  const addNote = (title, description, tag) => {
    //ToDoApi
    console.log("adding a new note")
    const note = {
      "_id": "6132s2f19553781a8ca8d0e08",
      "user": "6131dc5e3e4037cd4734a066",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2021-09-03T14:20:09.668Z",
      "__v": 0
    }
      setNotes(notes.concat(note))
  }

  //Delete a Note
  const deleteNote = (id) => {
    console.log("delete notes by id" +id)
    const newNotes = notes.filter((note)=>{return note._id!== id})
    setNotes(newNotes)
  }

  // Edit a Note
  const editNote = (id, title, description, tag) => {
    // API call

    // Logic to edit in client
    for(let index = 0; index < notes.length; index++){
      const element = notes[index];
      if(element._id === id){
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  }

  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;