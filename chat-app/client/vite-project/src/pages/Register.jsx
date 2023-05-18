import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const Register = () => {
  const {user}=  useContext(AuthContext)
    return (<>
        <Form>
            <Row style={{
                height: "100vh",
                justifyContent: "center",
                paddingTop: "10%",
            }}>
                <Col xs={6}>
                    <Stack gap={3}>
                        <h2>Register</h2>
                         <h2>user.name</h2>

                        <Form.Control type="text" placeholder="Name" />
                        <Form.Control type="email" placeholder="Email" />
                        <Form.Control type="password" placeholder="Password" />
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                        <Alert variant="danger"><p>An error occured</p></Alert>
                    </Stack>
                </Col>
            </Row>
        </Form></>);
};
 
export default Register; 
