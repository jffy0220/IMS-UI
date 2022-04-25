const { default: IconButton } = require("components/common/IconButton")
const { Card, Col, Row, Button } = require("react-bootstrap")

const UserInfo = () => {
    return (
        <Card className="mb-3">
            <Card.Header>
                <Row className="align-items-center">
                    <Col>
                        <h5 className="mb-0">Details</h5>
                    </Col>
                    <Col xs="auto">
                        <IconButton
                            iconClassName="fs--2 me--1"
                            variant="falcon-default"
                            size="sm"
                            icon="pencil-alt"
                        >Update Details</IconButton>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body className="bg-light border-top">
                <Row>
                    <Col lg xxl={5}>
                        <h6 className="fw-semi-bold ls mb-3 text-uppercase">
                            User Information
                        </h6>

                        <Row>
                            <Col xs={5} sm={4}>
                                <p className="fw-semi-bold mb-1">Username</p>
                            </Col>
                            <Col>
                                <p className="mb-1 fst-italic text-400">Justin.Farley</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={5} sm={4}>
                                <p className="fw-semi-bold mb-1">Department</p>
                            </Col>
                            <Col>
                                <p className="mb-1 fst-italic text-400">Company</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={5} sm={4}>
                                <p className="fw-semi-bold mb-1">Section</p>
                            </Col>
                            <Col>
                                <p className="mb-1 fst-italic text-400">Executive</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={5} sm={4}>
                                <p className="fw-semi-bold mb-1">Status</p>
                            </Col>
                            <Col>
                                <p className="mb-1 fst-italic text-400">Active</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={5} sm={4}>
                                <p className="fw-semi-bold mb-1">Manager</p>
                            </Col>
                            <Col>
                                <p className="mb-1 fst-italic text-400">N/A</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg xxl={{ span: 5, offset: 1 }} className="mt-4 mt-lg-0">
                        <h6 className="fw-semi-bold ls mb-3 text-uppercase">Contact Information</h6> 

                        <Row>
                            <Col xs={5} sm={4}>
                                <p className="fw-semi-bold mb-1">Address</p>
                            </Col>
                            <Col>
                                <p className="mb-1 fst-italic text-400">
                                    34417 Wynthorne Place
                                </p>
                            </Col>  
                        </Row>
                        <Row>
                            <Col xs={5} sm={4}>
                                <p className="fw-semi-bold mb-1"></p>
                            </Col>
                            <Col>
                                <p className="mb-1 fst-italic text-400">
                                    
                                </p>
                            </Col>  
                        </Row>
                        <Row>
                            <Col xs={5} sm={4}>
                                <p className="fw-semi-bold mb-1">City</p>
                            </Col>
                            <Col>
                                <p className="mb-1 fst-italic text-400">
                                    Wesley Chapel
                                </p>
                            </Col>  
                        </Row>
                        <Row>
                            <Col xs={5} sm={4}>
                                <p className="fw-semi-bold mb-1">State</p>
                            </Col>
                            <Col>
                                <p className="mb-1 fst-italic text-400">
                                    Florida
                                </p>
                            </Col>  
                        </Row>
                        <Row>
                            <Col xs={5} sm={4}>
                                <p className="fw-semi-bold mb-1">Zip</p>
                            </Col>
                            <Col>
                                <p className="mb-1 fst-italic text-400">
                                    33545
                                </p>
                            </Col>  
                        </Row>
                        <Row>
                            <Col xs={5} sm={4}>
                                <p className="fw-semi-bold mb-1">Country</p>
                            </Col>
                            <Col>
                                <p className="mb-1 fst-italic text-400">
                                    USA
                                </p>
                            </Col>  
                        </Row>
                        <Row>
                            <Col xs={5} sm={4}>
                                <p className="fw-semi-bold mb-1">Email</p>
                            </Col>
                            <Col>
                                <p className="mb-1 fst-italic text-400">
                                    justin.farley94@gmail.com
                                </p>
                            </Col>  
                        </Row>
                        <Row>
                            <Col xs={5} sm={4}>
                                <p className="fw-semi-bold mb-1">Phone Number</p>
                            </Col>
                            <Col>
                                <p className="mb-1 fst-italic text-400">
                                    270-331-1615
                                </p>
                            </Col>  
                        </Row>  
                    </Col>
                    <Col lg xxl={{ span: 5, offset: 1 }} className="mt-4 mt-lg-0">
                        <h6 className="fw-semi-bold ls mb-3 text-uppercase">
                            Warehouse Role
                        </h6>

                        <Row>
                            <Col xs={5} sm={4}>
                                <p className="fw-semi-bold mb-1">Warehouse</p>
                            </Col>
                            <Col>
                                <p className="mb-1 fst-italic text-400">
                                    Wesley Chapel
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={5} sm={4}>
                                <p className="fw-semi-bold mb-1">Section</p>
                            </Col>
                            <Col>
                                <p className="mb-1 fst-italic text-400">
                                    IT
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={5} sm={4}>
                                <p className="fw-semi-bold mb-1">Device ID</p>
                            </Col>
                            <Col>
                                <p className="mb-1 fst-italic text-400">
                                    Samsung Galaxy Note 10+
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={5} sm={4}>
                                <p className="fw-semi-bold mb-1">Device Serial Number</p>
                            </Col>
                            <Col>
                                <p className="mb-1 fst-italic text-400">
                                    ABC1234
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer className="border-top text-end">
                <IconButton
                    iconClassName="fs--2 me-1"
                    variant="falcon-default"
                    size="sm"
                    icon="check"
                >Save Changes</IconButton>
            </Card.Footer>
        </Card>
    )
}

export default UserInfo