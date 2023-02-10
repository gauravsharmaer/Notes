import React from 'react'

const Header = ({handledarkmode}) => (


    
    <div className="header">
        <h1>Notes</h1>
        <button className='save' onClick={() => handledarkmode((prevoiusmode)=>!prevoiusmode)}>Dark mode</button>
        {/* //when we call a setter function provided to us by a hook ,we can get access to current state value by passing an arrow function with an argument  here previous denotes the curent value of toggle*/}
    </div>
)

export default Header;