import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap"
import NavbarComponent from "./components/navbar/NavbarComponent";
import ListTask from "./components/ListTask/ListTask";
import AddTask from "./components/AddTask/AddTask";

function App() {

	let TASK_LIST = [
		{
			title: "Do your homework",
			description: "Yeah yeah do you homework",
			id: Math.random()+""
		},
		{
			title: "Yeah yeah task 2",
			description: "Yeah yeah doing my task 2",
			id: Math.random()+""
		}
	]

	
	let onCompleteTask = (id)=>{
		setTaskList((prev)=>{
			return prev.filter((elmt)=> elmt.id!=id);
		});
	};
	
	useEffect(()=>{
		console.log(JSON.parse(localStorage.getItem("todos")));
	},[])
	
	const [TaskList, setTaskList] = useState(JSON.parse(localStorage.getItem("todos")));


	useEffect(()=>{
		console.log("Hum Second");


		localStorage.setItem("todos",JSON.stringify(TaskList));

	},[TaskList]);

	let onAddTask = (data)=>{
		setTaskList(prev=>{
			return [...prev,data]
		})
	};

	return (
		<React.Fragment>
			<NavbarComponent />
			<ListTask data={TaskList} onCompleteTask = {onCompleteTask} />
			<Container className="mt-3">
				<hr/>
				<h1 className="text-white">Add a Task</h1>
				<AddTask onAdd={onAddTask}/>
			</Container>
		</React.Fragment>
	);
}

export default App;
