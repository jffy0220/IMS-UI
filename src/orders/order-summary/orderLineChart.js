const { default: OrderLineItems } = require("orders/util/OrderLineItems")
const { Card, Form } = require("react-bootstrap")

const OrderChart = () => {
    const chartRef = useRef(null)

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
                        data={data}
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