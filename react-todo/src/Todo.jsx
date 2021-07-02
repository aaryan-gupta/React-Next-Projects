import React, { useEffect, useState } from 'react'
import logo from '../src/logo.svg';

const Todo = () => {
	const getLocalItems = () => {
		let list = localStorage.getItem("lists")
		if (!list) return []
		return JSON.parse(list)
	}

	const [inputData, setInputData] = useState("")
	const [items, setItems] = useState(getLocalItems())
	const [toggleSubmit, setToggleSubmit] = useState(true)
	const [isEditItem, setIsEditItem] = useState(null)

	useEffect(() => {
		localStorage.setItem("lists", JSON.stringify(items))
	}, [items])

	const addItem = () => {
		if (!inputData) alert("Please fill the data.")
		else if (inputData && !toggleSubmit) {
			setItems(items.map(item => {
				if (item.id === isEditItem) return { ...item, name: inputData }
				return item
			}))
			setToggleSubmit(true)
			setInputData("")
			setIsEditItem(null)
		}
		else {
			const allInputData = { id: new Date().getTime().toString(), name: inputData }
			setItems([...items, allInputData])
			setInputData("")
		}
	}

	const deleteItem = id => setItems(items.filter(item => item.id !== id))
	const removeAll = () => setItems([])
	const editItem = id => {
		let newEditItem = items.find(item => item.id === id)
		setToggleSubmit(false)
		setInputData(newEditItem.name)
		setIsEditItem(id)
	}

	return (
		<div className="main-div">
			<div className="child-div">
				<figure>
					<img src={logo} alt="todologo" />
					<figcaption>Add Your list Here ✌</figcaption>
				</figure>
				<div className="addItems">
					<input type="text" placeholder="✍ Add Items..." value={inputData} onChange={e => setInputData(e.target.value)} />
					{
						toggleSubmit ? <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem} /> : <i className="far fa-edit add-btn" title="Update Item" onClick={addItem} />
					}
				</div>
				<div className="showItems">
					{
						items.map(item => (
							<div className="eachItem" key={item.id}>
								<h3>{item.name}</h3>
								<div className="todo-btn">
									<i className="far fa-edit add-btn" title="Edit Item" onClick={() => editItem(item.id)}></i>
									<i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => deleteItem(item.id)}></i>
								</div>
							</div>
						))
					}
				</div>
				<div className="showItems">
					<button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span>Check list</span></button>
				</div>
			</div>
		</div>
	)
}

export default Todo
