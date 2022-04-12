const { default: AdvanceTable } = require("common/AdvanceTable/AdvanceTable")
const { default: AdvanceTableFooter } = require("common/AdvanceTable/AdvanceTableFooter")
const { default: AdvanceTableSearchBox } = require("common/AdvanceTable/AdvanceTableSearchBox")
const { default: AdvanceTableWrapper } = require("common/AdvanceTable/AdvanceTableWrapper")
const { Card } = require("react-bootstrap")

const columns = [
    {
        accessor: 'item_id',
        Header: 'Item'
    },
    {
        accessor: 'quantity_ordered',
        Header: 'Quantity'
    },
    {
        accessor: 'quantity_receieved',
        Header: 'Quantity Received'
    },
    {
        accessor: 'price_per_item',
        Header: 'Price Per Item'
    },
    {
        accessor: 'total',
        Header: 'Total'
    }
]

const data = [
    {
        item_id: 'A-12-HP-C-230B',
        quantity_ordered: '50',
        quantity_received: '25',
        price_per_item: '$10.00',
        total: '$500.00'
    }
]

const PurchaseOrderDetail = () => {
    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <h5>Business Info</h5>
                        </Card.Header>
                        <Card.Body>
                            <h5 className="mb-3 fs-0">Jffy Industry</h5>
                            <h6 className="mb-2">Justin Farley</h6>
                            <p className="mb-1 fs--1">
                                34417 Wynthorne Street <br /> Wesley Chapel, Florida, <br />33545
                            </p>
                            <p className="mb-0 fs--1">
                                <strong>Email: <a href="mailto:justin@test.com">justin@test.com</a></strong>
                            </p>
                            <p className="mb-0 fs--1">
                                <strong>Phone: <a href="tel:0008675309">000-867-5309</a></strong>
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Header>
                            <h5>Ship To</h5>
                        </Card.Header>
                        <Card.Body>
                            <h5 className="mb-3 fs-0">Jffy Industry</h5>
                            <h6 className="mb-2">Justin Farley</h6>
                            <p className="mb-1 fs--1">
                                34417 Wynthorne Street <br /> Wesley Chapel, Florida, <br />33545
                            </p>
                            <p className="mb-0 fs--1">
                                <strong>Email: <a href="mailto:justin@test.com">justin@test.com</a></strong>
                            </p>
                            <p className="mb-0 fs--1">
                                <strong>Phone: <a href="tel:0008675309">000-867-5309</a></strong>
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <h5>Vendor Info</h5>
                        </Card.Header>
                        <Card.Body>
                            <h5 className="mb-3 fs-0">Logitech</h5>
                            <h6 className="mb-2">Mark Cuban</h6>
                            <p className="mb-1 fs--1">
                                90 Hicktory Street<br /> Hickory, Kentucky, <br />42001
                            </p>
                            <p className="mb-0 fs--1">
                                <strong>Email: <a href="mailto:justin@test.com">mark@test.com</a></strong>
                            </p>
                            <p className="mb-0 fs--1">
                                <strong>Phone: <a href="tel:0008675309">000-867-5309</a></strong>
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <PageHeader title="Purchase Order ABC123" titleTag="h4" className="mb-3">
                        <p className="fs--1 mt-1">Created: April 1, 2022</p>
                        <p className="fs--1 mt-1">Created by: Justin Farley</p>
                        <p className="fs--1 mt-1">Approved by: Ashley Farley</p>
                        <div>
                            <strong className="me-2">Status:</strong>
                            <Row>
                                <ProgressBar now={50} variant="primary" />
                            </Row>
                            <Row>
                                <Col>Ordered</Col>
                                <Col>Approved</Col>
                                <Col>Vendor Approved</Col>
                                <Col>Shipped</Col>
                                <Col>Received</Col>
                                <Col>Closed</Col>
                            </Row>
                        </div>
                    </PageHeader>
                </Col>
            </Row>

            <Row>
                {/* Line Items */}
                <Card>
                    <Card.Header>
                        <h5>Purchase Order Details</h5>
                    </Card.Header>
                    <Card.Body>
                        <AdvanceTableWrapper
                            columns={columns}
                            data={data}
                            sortable
                            pagination
                            perPage={5}
                            selection
                            selectionColumnWidth={30}
                        >
                            <Row className="flex-end-center mb-3">
                                <AdvanceTableSearchBox table/>
                            </Row>

                            <AdvanceTable
                                table
                                headerClassName="bg-200 text-900 text-nowrap align-middle"
                                rowClassName="align-middle white-space-nowrap"
                                tableProps={{
                                    bordered: true,
                                    striped: false,
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

export default PurchaseOrderDetail