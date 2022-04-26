import React from 'react'
import { Row, Col, Form, Button, Card } from 'react-bootstrap'
import AdvanceTable from 'common/AdvanceTable/AdvanceTable'
import AdvanceTableFooter from 'common/AdvanceTable/AdvanceTableFooter'
import AdvanceTablePagination from 'common/AdvanceTable/AdvanceTablePagination'
import AdvanceTableSearchBox from 'common/AdvanceTable/AdvanceTableSearchBox'
import AdvanceTableWrapper from 'common/AdvanceTable/AdvanceTableWrapper'
import { chartJsDefaultTooltip } from 'helpers/chartjs-utils'
import { rgbaColor, getColor } from 'helpers/utils'
import { Bar } from 'react-chartjs-2'
import IconButton from 'components/common/IconButton'
import OrderChart from './order-summary/orderLineChart'
import SoftBadge from 'components/common/SoftBadge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BasicECharts from 'components/common/BasicEChart'
import * as echarts from 'echarts/core'
import { LineChart } from 'echarts/charts'
import CountUp from 'react-countup'

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

const payment = {
    all: [4, 1, 6, 2, 7, 12, 4, 6, 5, 4, 5, 10],
    successful: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8],
    failed: [1, 0, 2, 1, 2, 1, 1, 0, 0, 1, 0, 2]
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

const getOptionsActiveUsers = data => ({
    xAxis: {
        show: false,
        boundaryGap: false
    },
    series: [
        {
            data: data,
            type: 'line',
            symbol: 'none',
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: rgbaColor(getColor('primary'), 0.25)
                        },
                        {
                            offset: 1,
                            color: rgbaColor(getColor('primary'), 0)
                        }
                    ]
                }
            }
        }
    ],
    grid: { right: '0px', left: '0px', bottom: '0px', top: '0px' }
})

const Orders = () => {
    return (
        <>
            <Row className="g-3">
                <Col xxl={9}>
                    <OrderChart data={payment} />
                </Col>
                <Col>
                    <Row classNmae="g-3">
                        <Col md={4} xxl={12}>
                            <Card className="h-100">
                                <Card.Body>
                                    <Row className="flex-between-center g-0">
                                        <Col xs={6} className="d-lg-block flex-between-center">
                                            <h6 className="mb-2 text-900">Active Users</h6>
                                            <h4 classNmae="fs-3 fw-normal text-700 mb-0">765k</h4>
                                        </Col>
                                        <Col xs="auto" className="h-100">
                                            <BasicECharts
                                                echarts={echarts}
                                                options={getOptionsActiveUsers(data)}
                                                style={{height: '50px', minWidth: '80px' }}
                                            />
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <br />
                        <Col md={4} xxl={12}>
                            <Card className="h-100">
                                <Card.Body>
                                    <Row className="flex-between-center">
                                        <Col className="d-md-flex d-lg-block flex-between-center">
                                            <h6 className="mb-md-0 mb-lg-2">Revenue</h6>
                                            <SoftBadge bg="success" pill>
                                                <FontAwesomeIcon icon="caret-up" /> 61.8%
                                            </SoftBadge>
                                        </Col>
                                        <Col xs="auto">
                                            <h4 className="fs-3 fw-normal text-700">
                                                <CountUp
                                                    start={0}
                                                    end={82.18}
                                                    duration={2.75}
                                                    suffix={'M'}
                                                    prefix={'$'}
                                                    decimals={2}
                                                    decimal="."
                                                />
                                            </h4>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xxl={12}>
                            <Card className="h-100">
                                <Card.Body>
                                    <Row className="flex-between-center">
                                        <Col className="d-md-flex d-lg-block flex-between-center">
                                            <h6 className="mb-md-0 mb-lg-2">Conversion</h6>
                                            <SoftBadge bg="success" pill>
                                                <FontAwesomeIcon icon="caret-up" /> 61.8%
                                            </SoftBadge>
                                        </Col>
                                        <Col xs="auto">
                                            <h4 className="fs-3 fw-normal text-700">
                                                <CountUp
                                                    start={0}
                                                    end={82.18}
                                                    duration={2.75}
                                                    suffix={'M'}
                                                    prefix={'$'}
                                                    decimals={2}
                                                    decimal="."
                                                />
                                            </h4>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <br />
            <Row>
                <Card>
                    <Card.Body>
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
                                headerClassName='bg-200 text-900 text-nowrap align-middle'
                                rowClassName='align-middle white-space-nowrap'
                                tableProps={{
                                    striped: true,
                                    className: 'fs--1 mb-0 overflow-hidden'
                                }}
                            />

        <                   div className="mt-3">
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

export default Orders