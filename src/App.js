import React, { useState } from 'react'
import Noteslist from './Noteslist'
import {nanoid} from "nanoid";
import Search from './Search';
import Header from './Header';
import { useEffect } from 'react';




const getlocallist=()=>{
    let listofnotes=localStorage.getItem("listofnotes");
    if(listofnotes){
        return JSON.parse(localStorage.getItem("listofnotes"))
    }
    else{
       return []
    }
}
//after setting the data in localstorage , wehave to get it as well ,so in .getitem we will pass name of key we used to set data and put a condition there that if the key is true than with the help of json.parse we will convert it into its original form and return it else return empty arrray

const App = () => {
    //here we pass the final data of local storage as current data 
    const[notes,SetNotes]=useState(getlocallist())
// const [notes,SetNotes]=useState([
// {
//     id:nanoid(),
//     text:"this is my first note",
//     date:"8/10/23",
// },{
//     id:nanoid(),
//     text:"this is my second note",
//     date:"10/10/23",
// },{
//     id:nanoid(),
//     text:"this is my third note",
//     date:"12/10/23",
// },{
//     id:nanoid(),
//     text:"this is my fourth note",
//     date:"14/10/23",
// }
// ])


const [searchtext,setsearchtext]=useState("")

const[darkmode,setdarkmode]=useState(false);

useEffect(()=>{
localStorage.setItem("listofnotes",JSON.stringify(notes));
},[notes])
//to use local storage firsrt we will set item in local stotage with help of useeffect ,it takes 2 parameters in form of strings name is key as name and other is value ,here json.stringify is used to convert data inside notes in form of string,notes is used as note contains all of data and in dependency array too

const addnote=(text)=>{
const date=new Date();
const newnote={
    id:nanoid(),
    text:text,
    date:date.toLocaleDateString(),

}



const newnotes=[...notes,newnote];
SetNotes(newnotes)
}



const deletenote=(id)=>{
const newnotes=notes.filter((note)=>(note.id !==id))
SetNotes(newnotes);

}




  return (
//    if dark mode is true then add classname darkmode to string else normal
   <div  className={`${darkmode && "dark-mode"}`}>
     <div className="conatiner">
    <Header  handledarkmode={setdarkmode}/>
    <Search   handlesearchnote={setsearchtext} />
        <Noteslist   notes={notes.filter((note)=>note.text.toLowerCase().includes(searchtext))}  handleaddnote={addnote}   handledeletenote={deletenote}/>
    </div>
   </div>
  )
}

export default App
