import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import AdvanceTable from 'common/AdvanceTable/AdvanceTable'
import AdvanceTableFooter from 'common/AdvanceTable/AdvanceTableFooter'
import AdvanceTablePagination from 'common/AdvanceTable/AdvanceTablePagination'
import AdvanceTableSearchBox from 'common/AdvanceTable/AdvanceTableSearchBox'
import AdvanceTableWrapper from 'common/AdvanceTable/AdvanceTableWrapper'
import { chartJsDefaultTooltip } from 'helpers/chartjs-utils'
import { rgbaColor, getColor } from 'helpers/utils'
import { Bar } from 'react-chartjs-2'
import IconButton from 'components/common/IconButton'

const columns = [
    {
        accessor: 'order_number',
        Header: 'Order Number'
    },
    {
        accessor: 'customer_name',
        Header: 'Customer'
    },
    {
        accessor: 'date_created',
        Header: 'Date Creatd'
    },
    {
        accessor: 'status',
        Header: 'Order Status'
    },
    {
        accessor: 'warehouse',
        Header: 'Warehouse'
    },
    {
        accessor: 'city',
        Header: 'City'
    },
    {
        accessor: 'state',
        Header: 'State'
    },
    {
        accessor: 'zip',
        Header: 'Zip Code'
    }
]

const data = [
    {
        order_number: '102100305',
        customer_name: 'Justin Farley',
        date_created: 'April 1, 2022',
        status: 'Picked',
        warehouse: 'Hickory',
        city: 'Mayfield',
        state: 'Kentucky',
        zip: '42035'
    },
    {
        order_number: '102AB3005',
        customer_name: 'Ashley Farley',
        date_created: 'April 5, 2022',
        status: 'Allocated',
        warehouse: 'WCFL',
        city: 'Wesley Chapel',
        state: 'Florida',
        zip: '33545'
    }
]

const chart_options = {
    indexAxis: 'y',
    plugins: {
        tooltip: chartJsDefaultTooltip()
    },
    scales: {
        x: {
            grid: {
                color: rgbaColor(getColor('black'), 0.1)
            }
        },
        y: {
            grid: {
                color: rgbaColor(getColor('black'), 0.1),
                drawBorder: true
            }
        }
    }
}

const chart_data = {
    labels: ['Created', 'Allocated', 'Picked', 'Shipped', 'No Activity'],
    datasets: [
        {
            label: 'April 10, 2022',
            data: [250, 100, 50, 0, 100],
            backgroundColor: [
                rgbaColor(getColor('info'), 0.2),
                rgbaColor(getColor('primary'), 0.2),
                rgbaColor(getColor('secondary'), 0.2),
                rgbaColor(getColor('success'), 0.2),
                rgbaColor(getColor('danger'), 0.2)
            ],
            borderColor: [
                getColor('info'),
                getColor('primary'),
                getColor('secondary'),
                getColor('success'),
                getColor('danger')
            ],
            borderWidth: 1
        }
    ]
}

function BulAction({ selectedRowIds }){
    return (
        <Row className="flex-between-center mb-3">
            <Col xs={4} sm="auto" className="d-flex align-items-center pe-0">
                <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">
                    {
                        Object.keys(selectedRowIds).length > 0 ? 
                            Object.keys(selectedRowIds).length + ' selected' : 'Select Orders'
                    }
                </h5>
            </Col>
            <Col xs={8} sm="auto" className="ms-auto text-end ps-0">
                {Object.keys(selectedRowIds).length > 0 ? (
                    <div className="d-flex">
                        <Form.Select size="sm" aria-label="Actions">
                            <option>No Action</option>
                            <option value="allocate">Allocate</option>
                            <option value="pick">Pick</option>
                            <option value="Ship">Ship</option>
                            <option value="Deliver">Deliver</option>
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

const Orders = () => {
    return (
        <>
            <Row>
                <Col className="p-2 bg-300 border border-400">
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
                </Col>
                <Col xs lg="4" className="p-2 bg-300 border border-400">
                    <Bar 
                        data={chart_data}
                        options={chart_options}
                        height={1000}
                        width={1618}
                    />
                </Col>
            </Row>
        </>
    )
}

export default Orders