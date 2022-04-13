const { Form, Card, Row, Col, Select, Button } = require("react-bootstrap")
import { useState } from "react"

function MultipleSelect() {
    const [ value, setValue ] = useState(null)
    const organizerOptions = [
        { value: 'Damaged', label: 'Damaged' },
        { value: 'New', label: 'New' },
        { value: 'Scratched', label: 'Scratched' },
        { value: 'Rebox', label: 'Rebox' },
        { value: 'Scrap', label: 'Scrap' }
    ]

    return (
        <Select
            closeMenuOnSelect={false}
            options={organizerOptions}
            placeholder='Select...'
            isMulti
            classNamePrefix="react-select"
            value={value}
            onChange={value => setValue(value)}
        />
    )
}

const CreateNewReturn = () => {
    return (
        <>
            <Card>
                <Card.Header>
                    <h3>Create New Return</h3>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupSerialNumber">
                            <Form.Label>Serial Number</Form.Label>
                            <Form.Control type="text" placeholder="Serial Number..." />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupCustomerName">
                            <Form.Label>Customer Name</Form.Label>
                            <Form.Control type="text" placeholder="Customer Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupSKU">
                            <Form.Label>SKU/UPC</Form.Label>
                            <Form.Control type="text" placeholder="SKU/UPC" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupSelect">
                            <Form.Label>Condition</Form.Label>
                            <Form.Select>
                                <option value="New">New</option>
                                <option value="Damaged">Damaged</option>
                                <option value="Scratch or Dented">Scratch and Dent</option>
                                <option value="Rebox">Rebox</option>
                                <option value="Scrap">Scrap</option>
                                <option value="Other">Other</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupCarrier">
                            <Form.Label>Carrier</Form.Label>
                            <Form.Control type="text" placeholder="Carrier" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="imageUpload">
                            <Form.Label>Upload Image</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Sumbit Return Information
                        </Button>
                    </Form>
                </Card.Body>
            </Card>

            <br />
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <h5>Customer Information</h5>
                        </Card.Header>
                        <Card.Body>
                            Some information about the customer will display here
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Header>
                            <h5>Item Information</h5>
                        </Card.Header>
                        <Card.Body>
                            Some information about the item will display here
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Header>
                            <h5>Return Information</h5>
                        </Card.Header>
                        <Card.Body>
                            Some information about the return will display here
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br />
            <Button variant="primary">Create New Return</Button>
        </>
    )
}

export default CreateNewReturn