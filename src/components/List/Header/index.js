import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './header.css'

function Header({setListItems,listItems,setCopyListItems,All,Active,Complete}) {	
	let [listItem,SetListItem] = useState({text:"",isChecked:false,id:1});
	const listChange = (e) =>{
		SetListItem({...listItem,text:e.target.value});
	};
	const Submit = (e) => {
		e.preventDefault();
		if(listItem.text !==""){
			setListItems([...listItems,listItem]);
		}
		SetListItem({...listItem,text:""});
	}
	useEffect(() =>{
		for (let index = 0; index <= listItems.length; index++) {
			SetListItem({...listItem,id:index});
			
		}
	},[listItems])

	useEffect(() =>{
		if(All ==="selected"){
			let All = listItems.filter(item => item);
			setCopyListItems([...All]);
		}
		
		if(Active === "selected"){
			let Active = listItems.filter(item =>item.isChecked === false);
			setCopyListItems([...Active]);
		}
		
		if(Complete === "selected"){
			let Complete = listItems.filter(item => item.isChecked === true);
			setCopyListItems([...Complete]);
		}
	},[listItems])


  return (
    <header className="header">
		<h1>todos</h1>
		<form onSubmit={Submit}>
			<input  className="new-todo" placeholder="What needs to be done?" value={listItem.text} autoFocus  onChange={listChange}  />
		</form>
	</header>
)}
export default Header;