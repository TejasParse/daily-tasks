import { Container } from "react-bootstrap";
import DisplayTask from "../DisplayTask/DisplayTask";

const ListTask = (props)=>{


    return (
        <Container >

            {props.data.map((elmt)=>{
                return <DisplayTask key={elmt.id} data={elmt} onComplete = {props.onCompleteTask} />
            })}

        </Container>
    )

};

export default ListTask;