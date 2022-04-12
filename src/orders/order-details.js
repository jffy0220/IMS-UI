import { Card, Col, ProgressBar, Row, Tabs, Tab, Button, ListGroup } from 'react-bootstrap'
import PageHeader from 'components/common/PageHeader'
import OrderLineItems from './util/OrderLineItems'

const OrderDetails = () => {
    return (
        <>
            <Row className="g-3 mb-3">
                <Col>
                    <PageHeader title="Order Details #2737" titleTag="h5" className="mb-3">
                        <p className="fs--1 mt-1">April 10, 2022</p>
                        <p className="fs--1 mt-1">Susan B. Anthony</p>
                        <div>
                            <strong className="me-2">Status:</strong>
                            <Row>
                                <ProgressBar now={20} variant="warning" className="" />
                            </Row>
                            <Row>
                                <Col>
                                    Ordered
                                </Col>
                                <Col>
                                    Allocated
                                </Col>
                                <Col>
                                    Picked
                                </Col>
                                <Col>
                                    Shipped
                                </Col>
                                <Col>
                                    Delivered
                                </Col>
                            </Row>
                        </div>
                    </PageHeader>
                </Col>
            </Row>

            <Row className="g-3 mb-3">
                <Col>
                    <Card className="mb-3">
                        <Card.Header>
                            <h5>Actions</h5>
                        </Card.Header>
                        <Card.Body>
                            <Tabs defaultActiveKey="actions" id="uncontrolled-tab-example" transition={false}>
                                <Tab eventKey="actions" title="Actions" className="border-bottom border-x p-3">
                                    <div className="d-grid border-bottom">
                                        <Button variant="primary">Complete Order</Button>
                                    </div>
                                    <div className="d-grid border-bottom">
                                        <Button variant="warning">Remove Item(s)</Button>
                                    </div>
                                    <div className="d-grid border-bottom">
                                        <Button variant="danger">Cancel Order</Button>
                                    </div>
                                </Tab>
                                <Tab eventKey="log" title="Log" className="border-bottom border-x p-3">
                                    <ListGroup>
                                        <ListGroup.Item className="py-3" variant="success">
                                            <h6>April 8, 2022</h6>
                                            <h6>Order Created</h6>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="py-3">
                                            <h6>April 8, 2022</h6>
                                            <h6>All Items Allocated</h6>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="py-3">
                                            <h6>April 9, 2022</h6>
                                            <h6>13:22 - Justin Farley</h6>
                                            <h6>A-12-HP-C-230B 5x Picked</h6>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Tab>
                            </Tabs>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="mb-3">
                        <Card.Body>
                            <Row>
                                <Col md={6} lg={4} className="mb-4 mb-lg-0">
                                    <h5 className="mb-3 fs-0">Billing Address</h5>
                                    <h6 className="mb-2">Susan B. Anthony</h6>
                                    <p className="mb-1 fs--1">
                                        123 ABC Street <br /> New York, New York 86753
                                    </p>
                                    <p className="mb-0 fs--1">
                                        <strong>Email: <a href="mailto:susan@test.com">susan@test.com</a></strong>
                                    </p>
                                    <p className="mb-0 fs--1">
                                        <strong>Phone: <a href="tel:0008675309">000-867-5309</a></strong>
                                    </p>
                                </Col>
                                <Col md={6} lg={4} className="mb-4 mb-lg-0">
                                    <h5 className="mb-3 fs-0">Shipping Address</h5>
                                    <h6 className="mb-2">Susan B. Anthony</h6>
                                    <p className="mb-1 fs--1">
                                        123 ABC Street <br /> New York, New York 86753
                                    </p>
                                    <p className="mb-0 fs--1">
                                        <strong>Email: <a href="mailto:susan@test.com">susan@test.com</a></strong>
                                    </p>
                                    <p className="mb-0 fs--1">
                                        <strong>Phone: <a href="tel:0008675309">000-867-5309</a></strong>
                                    </p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <OrderLineItems />
                </Col>
            </Row>
        </>
    )
}

export default OrderDetails