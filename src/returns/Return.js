import { Form, Row, Col, Button } from "react-bootstrap"
import IconButton from "components/common/IconButton"

const { default: AdvanceTable } = require("common/AdvanceTable/AdvanceTable")
const { default: AdvanceTableFooter } = require("common/AdvanceTable/AdvanceTableFooter")
const { default: AdvanceTableSearchBox } = require("common/AdvanceTable/AdvanceTableSearchBox")
const { default: AdvanceTableWrapper } = require("common/AdvanceTable/AdvanceTableWrapper")

const columns = [
    {
        accessor: 'serial_number',
        Header: 'Serial Number'
    },
    {
        accessor: 'customer_name',
        Header: 'Customer Name'
    },
    {
        accessor: 'sku',
        Header: 'SKU'
    },
    {
        accessor: 'receiving_associate',
        Header: 'Receiving Associate'
    },
    {
        accessor: 'date_returned',
        Header: 'Date Returned'
    },
    {
        accessor: 'condition',
        Header: 'Condition'
    },
    {
        accessor: 'purchase_order',
        Header: 'Purchase Order'
    }
]

const data = [
    {
        serial_number: 'ab3883cd9393ef',
        customer_name: 'Ashley Farley',
        sku: 'A-12-HP-C-230B',
        receiving_associate: 'Justin Farley',
        date_returned: 'April 1, 2022',
        condition: 'Damaged',
        purchase_order: 'ABC123'
    }
]

function BulAction({ selectedRowIds }) {
    return (
        <Row className="flex-between-center mb-3">
            <Col xs={4} small="auto" className="d-flex align-items-center pe-0">
                <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">
                    {
                        Object.keys(selectedRowIds).length > 0 ? Object.keys(selectedRowIds).length + ' selected' : 'Select Returns'
                    }
                </h5>
            </Col>
            <Col xs={8} sm="auto" className="ms-auto text-end ps-0">
                {Object.keys(selectedRowIds).length > 0 ? (
                    <div className="d-flex">
                        <Form.Select size="sm" aria-label="Actions">
                            <option>No Action</option>
                            <option value="Delete">Delete</option>
                            <option value="Mark Review">Mark 'Needs Review'</option>
                            <option value="Clear Reservations">Clear Reservations</option>
                        </Form.Select>
                        <Button type="button" variant="falcon-default" size="sm" className="ms-2">Apply</Button>
                    </div>
                ) : (
                    <div id="order-actions">
                        <IconButton variant="falcon-default" size="sm" icon="plus" transform="shrink-3" className="me-2">
                            <span className="d-none d-sm-inline-block ms-1">New</span>
                        </IconButton>
                        <IconButton variant="falcon-default" size="sm" icon="external-link-alt" transform="shrink-3">
                            <span className="d-none d-sm-inline-block ms-1">Export</span>
                        </IconButton>
                    </div>
                )}
            </Col>
        </Row>
    )
}

const Return = () => {
    return (
        <>
            <Row>
                <AdvanceTableWrapper
                    columns={columns}
                    data={data}
                    sortable
                    pagination
                    perPage={25}
                    selection
                    selectionColumnWidth={30}
                >
                    <Row className="flex-end-center mb-3">
                        <Col xs="auto" sm={6} lg={4}>
                            <AdvanceTableSearchBox table/>
                        </Col>
                    </Row>

                    <BulAction table/>

                    <AdvanceTable
                        table
                        headerClassName="bg-200 text-900 text-nowrap align-middle"
                        rowClassName="align-middle white-space-nowrap"
                        tableProps={{
                            bordered: true,
                            striped: true,
                            className: "fs--1 mb-0 overflow-hidden"
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
            </Row>
        </>
    )
}

export default Return