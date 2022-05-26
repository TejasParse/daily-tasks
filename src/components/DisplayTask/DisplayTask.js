import { Container } from "react-bootstrap"
import { useState } from "react";
import CompletedTask from "../CompletedTask/CompletedTask"

let DisplayTask = (props)=>{

    let [taskProgress, setTaskProgress] = useState(0);
    let [completedTask, setCompletedTask] = useState(false);

    let onChangeTaskProgress = (event)=>{
        setTaskProgress(event.target.value);

        let currentProgress = event.target.value;

        if(currentProgress==100) {
            setCompletedTask(true);
        } else {
            setCompletedTask(false);
        }

    };

    let onSuccess = ()=>{
        props.onComplete(props.data.id);
    };

    let onFail = ()=>{
        setTaskProgress(0);
        setCompletedTask(false);  
    };

    return (
        <Container fluid className="bg-white rounded shadow p-2 mt-4 row">
            <Container className="col-9">
                <h3>{props.data.title}</h3>
            </Container>
            <Container className="col-3">
                <input type="range" min="0" max="100" value={taskProgress} onChange={onChangeTaskProgress} className="slider" id="myRange"/>
                {completedTask && <CompletedTask onSuccess={onSuccess} onFail={onFail} /> }
            </Container>
        </Container>
    )

};  

export default DisplayTask;