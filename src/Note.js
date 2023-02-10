import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Note = ({id,text,date, handledeletenote}) => {
  return (
   <div className="note">
    <span>{text}</span>
    <div className="note-footer">
        <small>{date}</small>
        <DeleteForeverIcon onClick={()=>
          handledeletenote(id)
        
        } 
        className="delete-icon" size="1.3em"/>
    </div>
   </div>
  )
}

export default Note