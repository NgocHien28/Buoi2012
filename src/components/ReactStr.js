import { Button, Container, Row } from "reactstrap";
import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label, Col } from "reactstrap";

export default function ReactStr() {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <div>
            <Button>Click Me</Button>
            <Navbar color="faded" light expand="sm">
                <NavbarBrand href="/" className="me-auto">
                    JINS!
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="me-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/components/">Products</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">Contact</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">Blog</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <Button color="danger" onClick={toggle}>
                Click Me
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>NHẬP THÔNG TIN CỦA BẠN</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup floating>
                            <Input id="exampleEmail" name="email" placeholder="Email" type="email" />
                            <Label for="exampleEmail">Email</Label>
                        </FormGroup>{" "}
                        <FormGroup floating>
                            <Input id="examplePhonenumber" name="phonenumber" placeholder="Phone number" type="number" />
                            <Label for="examplePhonenumber">Phone number</Label>
                        </FormGroup>{" "}
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Yes
                    </Button>{" "}
                    <Button color="danger" onClick={toggle}>
                        No
                    </Button>
                </ModalFooter>
            </Modal>

            <Container>
                <Row>
                    <Col sm="6" md="4" lg="2">
                        Test
                    </Col>
                    <Col sm="6" md="4" lg="2">
                        Test
                    </Col>
                    <Col sm="6" md="4" lg="2">
                        Test
                    </Col>
                    <Col sm="6" md="4" lg="2">
                        Test
                    </Col>
                    <Col sm="6" md="4" lg="2">
                        Test
                    </Col>
                    <Col sm="6" md="4" lg="2">
                        Test
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
