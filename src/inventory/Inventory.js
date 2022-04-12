import { Card, Col, Row } from 'react-bootstrap'
import InventoryGraph from './util/InventoryGraph'
import AdvanceTable from 'common/AdvanceTable/AdvanceTable'
import AdvanceTableFooter from 'common/AdvanceTable/AdvanceTableFooter'
import AdvanceTablePagination from 'common/AdvanceTable/AdvanceTablePagination'
import AdvanceTableSearchBox from 'common/AdvanceTable/AdvanceTableSearchBox'
import AdvanceTableWrapper from 'common/AdvanceTable/AdvanceTableWrapper'
import FalconComponentCard from 'common/FalconComponentCard'
import { Table } from 'react-bootstrap'

const audienceChart = {
    users: [
        [504, 333, 400, 606, 451, 685, 404],
        [237, 229, 707, 575, 420, 536, 258]
    ],
    sessions: [
        [322, 694, 235, 537, 791, 292, 806],
        [584, 661, 214, 286, 526, 707, 627]
    ],
    rate: [
        [789, 749, 412, 697, 633, 254, 472],
        [276, 739, 525, 394, 643, 653, 719]
    ],
    duration: [
        [625, 269, 479, 654, 549, 305, 671],
        [499, 670, 550, 222, 696, 695, 469]
    ]
}

const columns = [
    {
      accessor: 'name',
      Header: 'Name'
    },
    {
      accessor: 'email',
      Header: 'Email'
    },
    {
      accessor: 'age',
      Header: 'Age'
    }
];

const data = [
    {
      name: 'Anna',
      email: 'anna@example.com',
      age: 18
    },
    {
      name: 'Homer',
      email: 'homer@example.com',
      age: 35
    },
    {
      name: 'Oscar',
      email: 'oscar@example.com',
      age: 52
    },
    {
      name: 'Emily',
      email: 'emily@example.com',
      age: 30
    },
    {
      name: 'Jara',
      email: 'jara@example.com',
      age: 25
    },
    {
      name: 'Clark',
      email: 'clark@example.com',
      age: 39
    },
    {
      name: 'Jennifer',
      email: 'jennifer@example.com',
      age: 52
    },
    {
      name: 'Tony',
      email: 'tony@example.com',
      age: 30
    },
    {
      name: 'Tom',
      email: 'tom@example.com',
      age: 25
    },
    {
      name: 'Michael',
      email: 'michael@example.com',
      age: 39
    },
    {
      name: 'Antony',
      email: 'antony@example.com',
      age: 39
    },
    {
      name: 'Raymond',
      email: 'raymond@example.com',
      age: 52
    },
    {
      name: 'Marie',
      email: 'marie@example.com',
      age: 30
    },
    {
      name: 'Cohen',
      email: 'cohen@example.com',
      age: 25
    },
    {
      name: 'Rowen',
      email: 'rowen@example.com',
      age: 39
    }
];

const Inventory = () => {
    return (
        <>
            <Row className="g-3 mb-3">
                <Col xxl={8}>
                    <Card>
                        <Card.Body>
                            <h5>Inventory</h5>
                            <AdvanceTableWrapper
                                columns={columns}
                                data={data}
                                sortable
                                pagination
                                perPage={5}
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
                    
                </Col>
            </Row>

            <Row className="g-3 mb-3">
                <Col xxl={8}>
                    <InventoryGraph chartData={audienceChart} className="mb-3" />
                </Col>
            </Row>

            <Row className="g-3 mb-3">
                <Col>
                    <Card>
                        <Card.Header>
                            Purchase Orders
                        </Card.Header>
                        <Card.Body>
                            <Table bordered responsive>
                                <thead>
                                    <tr>
                                        <td>Test</td>
                                        <td>test 2</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Hello World</td>
                                        <td>Hello world 2</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card>
                        <Card.Header>
                            Sales Orders
                        </Card.Header>
                        <Card.Body>
                            <Table bordered responsive>
                                <thead>
                                    <tr>
                                        <td>Test</td>
                                        <td>test 2</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Hello World</td>
                                        <td>Hello world 2</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </> 
    )
}

Inventory.propTypes = {}

export default Inventory