import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Col, Container, Row} from "react-bootstrap";
import {GithubLoginButton} from "react-social-login-buttons";
import google from "../../img/btn_google.png";
import Image from "react-bootstrap/Image";

export const LoginForm = () => {
  return (
    <div>
      <div className="bg-info">
        <h1>Log in</h1>
      </div>
      <Container style={{paddingRight: 300, paddingLeft: 300, paddingTop: 20}}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me"/>
          </Form.Group>
          <Row>
            <Col>
              <Button variant="primary" type="submit" style={{margin: 10}}>
                Sign in
              </Button>
            </Col>
            <Col>
              <Button variant="primary" type="submit" style={{margin: 10}}>
                Log in
              </Button>
            </Col>
          </Row>
          <Row>
            <a  style={{marginLeft: "auto", marginRight: "auto", marginTop: 10, marginBottom: 10}}
                href="http://localhost:9000/authenticate/google" >
              <Image src={google}/>
            </a>
          </Row>
          <Row>
            <GithubLoginButton/>
            {/*<Button variant="primary" type="submit"*/}
            {/*        style={{marginLeft: "auto", marginRight: "auto", marginTop: 10, marginBottom: 10}}>*/}
            {/*  Log in with Github account*/}
            {/*</Button>*/}
          </Row>
        </Form>
      </Container>
    </div>
  );
}