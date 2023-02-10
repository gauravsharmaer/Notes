import React from 'react'
import Note from './Note'
import AddNotes from './AddNotes'
const Noteslist = ({notes,handleaddnote, handledeletenote}) => {
  return (
   <>
    <div className="notes-list">
{notes.map((note)=>(<Note  id={note.id}
                          text={note.text}
                          date={note.date}
                          handledeletenote={ handledeletenote}
 />) )}
     <AddNotes handleaddnote={handleaddnote} />  
    </div>
   </>
  )
}

export default Noteslist