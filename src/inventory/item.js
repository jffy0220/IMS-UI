const { default: AdvanceTable } = require("common/AdvanceTable/AdvanceTable")
const { default: AdvanceTableSearchBox } = require("common/AdvanceTable/AdvanceTableSearchBox")
const { default: AdvanceTableWrapper } = require("common/AdvanceTable/AdvanceTableWrapper")
import AdvanceTableFooter from "common/AdvanceTable/AdvanceTableFooter"
const { default: SearchBox } = require("components/navbar/top/SearchBox")
const { Card, Form, Row, Col, Button } = require("react-bootstrap")

const columns = [
    {
        accessor: 'location',
        Header: 'Location'
    },
    {
        accessor: 'quantity_on_hand',
        Header: 'Quantity On Hand'
    },
    {
        accessor: 'quantity_on_order',
        Header: 'Quantity On Order'
    },
    {
        accessor: 'quantity_available',
        Header: 'Quantity Available'
    },
    {
        accessor: 'quantity_back_ordered',
        Header: 'Quantity Back Ordered'
    },
    {
        accessor: 'reorder_point',
        Header: 'Reorder Point'
    },
    {
        accessor: 'safety_stock_level',
        Header: 'Safety Stock Level'
    },
    {
        accessor: 'lead_time',
        Header: 'Lead Time'
    },
    {
        accessor: 'last_purchase_price',
        Header: 'Last Purchase Price'
    },
    {
        accessor: 'average_cost',
        Header: 'Average Cost'
    },
    {
        accessor: 'value',
        Header: 'Value'
    },
]

const data = [
    {
        location: 'Wesley Chapel',
        quantity_on_hand: '100',
        quantity_on_order: '25',
        quantity_available: '75',
        quantity_back_ordered: '0',
        reorder_point: '5',
        safety_stock_level: '5',
        lead_time: '15 Days',
        last_purchase_price: '$2,500.00',
        average_cost: '$2,750.00',
        value: '$25,000'
    },
    {
        location: 'Zephyrhills',
        quantity_on_hand: '100',
        quantity_on_order: '25',
        quantity_available: '75',
        quantity_back_ordered: '0',
        reorder_point: '5',
        safety_stock_level: '5',
        lead_time: '15 Days',
        last_purchase_price: '$2,500.00',
        average_cost: '$2,750.00',
        value: '$25,000'
    },
    {
        location: 'Hickory',
        quantity_on_hand: '5',
        quantity_on_order: '0',
        quantity_available: '0',
        quantity_back_ordered: '0',
        reorder_point: '10',
        safety_stock_level: '5',
        lead_time: '15 Days',
        last_purchase_price: '$2,500.00',
        average_cost: '$2,750.00',
        value: '$25,000'
    }
]

const Item = () => {
    return (
        <>
            <Row>
                <Card>
                    <Card.Header>
                        <Row>
                            <h5>Inventory Item</h5>
                        </Row>
                        <Row>
                            <Col><h5>A-12-HP-C-230B</h5></Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <span><Button variant="primary">Edit</Button></span>
                        <span><Button variant="danger">Delete</Button></span>
                    </Card.Body>
                </Card>
            </Row>
            <br />
            <Row>
                <Card>
                    <Card.Header><h5>Primary Information</h5></Card.Header>
                    <Card.Body>
                        <Row>
                            <Col><p>ID<br /><b>1</b></p></Col>
                            <Col><p>Item Name<br />A-12-HP-C-230B</p></Col>
                            <Col><p>Display Name<br />Advantage 12V Conditioner</p></Col>
                        </Row>
                        <Row>
                            <Col><p>UPC Code<br />1234567890</p></Col>
                            <Col><p>Vendor Name<br />Farley Tech</p></Col>
                            <Col><p>Purchase Units<br />Each</p></Col>
                            <Col><p>Sub-Item<br />None</p></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>
            <br />
            <Row>
                <Card>
                    <Card.Body>
                        <h5>Item Management</h5>
                        <Row>
                            <Col>
                                <Form.Check 
                                    type='switch'
                                    id='reorderPointAutoSwitch'
                                    label='ReOrder Point Auto Calculate'
                                />
                            </Col>
                            <Col>
                                <Form.Check 
                                    type='switch'
                                    id='safetyStockAutoSwitch'
                                    label='Safety Stock Auto Calculate'
                                />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>
            <br />
            <Row>
                <Card>
                    <Card.Body>
                        <h5>Iventory by Warehouse</h5>
                        <AdvanceTableWrapper
                            columns={columns}
                            data={data}
                            sortable
                            pagination
                            perPage={15}
                        >
                            <Row className="flex-end-center mb-3">
                                <Col xs="auto" sm={6} lg={4}>
                                    <AdvanceTableSearchBox table/>
                                </Col>
                            </Row>

                            <AdvanceTable
                                table
                                headerClassName="bg-200 text-900 text-nowrap align-middle"
                                rowClassName="align-middle white-space-nowrap"
                                tableProps={{
                                    bordered: true,
                                    striped: true,
                                    className: 'fs--1 mb-0 overflow-hidden'
                                }}
                            />

                            <div className="mt-3">
                                <AdvanceTableFooter
                                    rowCount={data.length}
                                    table
                                    rowInfo
                                    navButtons
                                    rowsPerPageSelection
                                />
                            </div>
                        </AdvanceTableWrapper>
                    </Card.Body>
                </Card>
            </Row>
        </>
    )
}

export default Item