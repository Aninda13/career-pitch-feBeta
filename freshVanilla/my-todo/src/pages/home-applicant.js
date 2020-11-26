import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Nav,
    Navbar,
    Form,
    FormControl,
    Button
} from 'react-bootstrap'



class HomeFeed extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Career Pitch</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Profile</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar>
        );
    }

}

export default HomeFeed;