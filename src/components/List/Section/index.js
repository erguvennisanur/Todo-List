import React from 'react'
import Destroy from './Destroy';
import './section.css'
function Section({listItems,setListItems,copyListItems,setCheckAllBox,checkAllBox}) {
	let onCheck = (selectedItem) => {	
		let updatedList = listItems.map((item) =>{
			if(item.id ===selectedItem.target.id){
				return{
					...item,
					isChecked:!item.isChecked
					
				}
			}
			return item
		})
		const x = updatedList.some(function(item){
			return item.isChecked === false;
		})
		
		setListItems([...updatedList])

		if(x){
			setCheckAllBox(false)
		}
		else{
			setCheckAllBox(true)
		}				
	}
	let CheckedAll = (checkAllCheckBox) =>{
		if(checkAllCheckBox.target.checked){
			let updatedList = listItems.map((item) => {
				return{
					...item,
					isChecked:true
				}
				
			})
			const x = updatedList.some(function(item){
				return item.isChecked ===false;
			})
			setListItems([...updatedList])
			if(!x){
				setCheckAllBox(true)
			}
		}
		else{
			let updatedList = listItems.map((item) => {
				return{
					...item,
					isChecked:false
				}
				
			})
			const x = updatedList.some(function(item){
				return item.isChecked ===false;
			})
			setListItems([...updatedList])
			if(x){
				setCheckAllBox(false)
			}

		}
		
	}		
	
	var Checked = (item) => item.isChecked ? "completed":""
	let y = listItems.length ? true:false
	 
	
	return (
    <section className = "main">
		<input checked={checkAllBox} className = "toggle-all" type = "checkbox" id='toggle-all' onChange={CheckedAll}/>
		<label htmlFor = "toggle-all" hidden={!y}>
		
		</label>
		<ul className = "todo-list">
			
			{   copyListItems.map((item) =>
				<li key={item.id} className={Checked(item)}>
				<div className="view" >
					<input checked={item.isChecked}  className="toggle" type="checkbox"  id={item.id} onChange={onCheck}/>
					<label>{item.text}</label>
					<Destroy listItems={listItems} setListItems={setListItems} item={item.id}/> 
				</div>
			</li>) 
			
			}
			
	</ul>
	</section>
  )
}
export default Section;