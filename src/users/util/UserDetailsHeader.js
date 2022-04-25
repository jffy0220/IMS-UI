const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome")
const { Card, Dropdown, Row, Flex, Col, Button } = require("react-bootstrap")
import { useContext } from "react"
import AppContext from "context/Context"
import IconButton from "components/common/IconButton"
import { Link } from "react-router-dom"

const UserDetailsHeader = () => {

    return (
        <Card className="mb-3">
            <Card.Header>
                <Row>
                    <Col>
                        <h5 className="mb-2">Justin Farley(<a href="#">Justin.Farley</a>)</h5>
                        <IconButton
                            iconClassName="fs--2 me--1"
                            variant="falcon-default"
                            size="sm"
                            icon="plus"
                        >
                            Add Note
                        </IconButton>
                        <Dropdown className="d-inlne-block ms-2">
                            <Dropdown.Toggle
                                as={Button}
                                variant="falcon-default"
                                size="sm"
                                className="dropdown-caret-none"
                            >
                                <FontAwesomeIcon icon="ellipsis-h" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    Edit
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    Archive
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    Report
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    Delete
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col xs="auto">
                        <h6 className="text-uppercase text-600">
                            Employee
                            <FontAwesomeIcon icon="user" className="ms-2" />
                        </h6>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body className="border-top">
                <FontAwesomeIcon
                    icon="user"
                    className="text-success me-2"
                    transform="down-5"
                />
                <div className="flex-1">
                    <p className="mb-0">Employee was created</p>
                    <p className="fs--1 mb-0 text-600">Jan 1, 1970</p>
                </div>
            </Card.Body>
        </Card>
    )
}

export default UserDetailsHeader