const { default: OrderLineItems } = require("orders/util/OrderLineItems")
const { Card, Form, Row, Col } = require("react-bootstrap")
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react'
import Flex from 'common/Flex';
import OrderLineChartGraph from './OrderLineChartGraph';

const payment = {
    all: [4, 1, 6, 2, 7, 12, 4, 6, 5, 4, 5, 10],
    successful: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8],
    failed: [1, 0, 2, 1, 2, 1, 1, 0, 0, 1, 0, 2]
};

const OrderChart = () => {
    const chartRef = useRef(null)
    const [ paymentStatus, setPaymentStatus ] = useState('successful')

    return (
        <Card className="rounded-3 overflow-hidden h-100 shadow-none">
            <Card.Body
                className="bg-line-chart-gradient"
                as={Flex}
                justifyContent="between"
                direction="column"
            >
                <Row className="align-items-center g-0">
                    <Col className="light">
                        <h4 className="text-white mb-0">Today 75 Orders</h4>
                        <p className="fs--1 fw-semi-bold text-white">
                            Yesterday <span className="opacity-50">53</span>
                        </p>
                    </Col>
                    <Col xs="auto" className="d-none d-sm-block">
                        <Form.Select
                            size="sm"
                            className="mb-3"
                            value={paymentStatus}
                            onChange={e => setPaymentStatus(e.target.value)}
                        >
                            <option value="today">Today</option>
                            <option value="month">Past Month</option>
                            <option value="year">Past Year</option>
                        </Form.Select>
                    </Col>
                    <OrderLineChartGraph
                        ref={chartRef}
                        data={payment}
                        paymentStatus={paymentStatus}
                        style={{ height: '200px' }}
                    />
                </Row>
            </Card.Body>
        </Card>
    )
}

OrderChart.propTypes = {
    data: PropTypes.shape({
        all: PropTypes.array,
        successful: PropTypes.array,
        failed: PropTypes.array
    })
}

export default OrderChart