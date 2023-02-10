import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
const Search = ({ handlesearchnote}) => {
  return (
    <div className='search'>
     <SearchIcon className='search-icon' size="1.3em"/>
     <input onChange={(event)=> handlesearchnote(event.target.value)}
      type="text" placeholder='Type to search....'/>
    </div>
  )
}

export default Search;