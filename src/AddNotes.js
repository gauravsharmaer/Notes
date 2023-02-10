import React, { useState } from 'react'

const AddNotes = ({handleaddnote}) => {
    const[notetext,setNotetext]=useState("");
    const characterlimit=200;

    const handleChange=(e)=>{
        if(characterlimit-e.target.value.length>=0){
            setNotetext(e.target.value) 
        }
    
    }



    const handleSaveClick=()=>{
        if(notetext.trim().length>0){
            handleaddnote(notetext);
        }
        setNotetext("");
       
    }
  return (
    <div className='note new' >
    <textarea placeholder='Type to add a note' cols="10" rows="8" value={notetext} onChange={handleChange}></textarea>
    <div className="note-footer">
        <small >{characterlimit-notetext.length} words left</small>
        <button className='save' onClick={handleSaveClick}>save</button>
    </div>
    </div>
  )
}

export default AddNotes;