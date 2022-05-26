import { Container, Button } from "react-bootstrap";

const CompletedTask = (props)=>{

    return (
        <Container>
            <h4> Completed The Task? </h4>
            <Button variant="success" onClick={props.onSuccess}>Yes</Button>
            <Button variant="danger" onClick={props.onFail}>No</Button>
        </Container>
    )

}

export default CompletedTask;