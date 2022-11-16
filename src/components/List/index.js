import React from 'react'
import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Section from './Section';
import './list.css'

function Main() {
  const [listItems,setListItems] =useState([]);
  const [copyListItems,setCopyListItems] = useState([]);
  let [All,setAll] = useState("selected");
  let [Complete,setComplete] = useState("");
  let [Active,setActive] = useState("");
  const[checkAllBox,setCheckAllBox] =useState(false)

  

  

  return (  
    <section className='todoapp'>
      <Header setListItems={setListItems} listItems ={listItems} setCopyListItems={setCopyListItems} All={All} Complete={Complete} Active={Active}  />
      
      <Section listItems={listItems} setListItems={setListItems} copyListItems={copyListItems} checkAllBox={checkAllBox} setCheckAllBox={setCheckAllBox} />
      
      <Footer listItems={listItems} setListItems={setListItems} setCopyListItems={setCopyListItems} All={All} Complete={Complete} Active={Active} setAll={setAll} setComplete={setComplete} setActive={setActive} setCheckAllBox={setCheckAllBox}/>
    </section>
  )
}
export default Main;
