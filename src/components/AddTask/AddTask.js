import { Container } from "react-bootstrap";
import { useRef } from "react";

const AddTask = (props)=>{

    let titleRef = useRef();


    let onFormSubmit = (event)=>{
        event.preventDefault();


        let newTask = {
            title:titleRef.current.value,
            id:Math.random()+"",
            progressValue: 0
        };

        titleRef.current.value=''

        props.onAdd(newTask);

    }

    return (
        <form onSubmit={onFormSubmit}>
            <div className="form-floating mb-3" >
                <input placeholder="text" ref={titleRef} type={"text"} name="title" id="title" className="form-control"></input>
                <label for={"title"}>Enter a title</label>
            </div>
            <input type={"submit"} className="btn btn-success" value={"Add!"} />
        </form>
    )

};

export default AddTask;