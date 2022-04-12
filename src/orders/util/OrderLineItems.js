import { Card, Col, Row, Table } from 'react-bootstrap'

const OrderLineItems = () => {
    return (
        <Card className="mb-3">
            <Card.Header>
                <h5>Line Items</h5>
            </Card.Header>
            <Card.Body>
                <div className="table-responsive fs--1">
                    <Table striped bordered className="border-bottom">
                        <thead className="bg-200 text-900">
                            <tr>
                                <th className="border-0">Item</th>
                                <th className="border-0 text-center">Quantity</th>
                                <th className="border-0 text-center">Allocated</th>
                                <th className="border-0 text-center">Picked</th>
                                <th className="border-0 text-center">Shipped</th>
                                <th className="border-0 text-end">Rate</th>
                                <th className="border-0 text-end">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-200">
                                <td className="align-middle">
                                    <h6 className="mb-0 text-nowrap">A-12-HP-C-230B</h6>
                                    <p className="mb-0">Advantage Air Conditioner</p>
                                </td>
                                <td className="align-middle text-center">5</td>
                                <td className="align-middle text-center">3 of 5</td>
                                <td className="align-middle text-center">3 of 5</td>
                                <td className="align-middle text-center">2 of 3 remaining</td>
                                <td className="align-middle text-end">$115.00</td>
                                <td className="align-middle text-end">$575.00</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Card.Body>
        </Card>
    )
}

export default OrderLineItems