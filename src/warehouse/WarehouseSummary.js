const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");
const { Card, ProgressBar, Button, Row, Col, Badge } = require("react-bootstrap");
const { Link } = require("react-router-dom");
import { propTypes } from "react-bootstrap/esm/Image";
import PropTypes from 'prop-types';
import Flex from "common/Flex";
import AdvanceTable from "common/AdvanceTable/AdvanceTable";
import AdvanceTableFooter from "common/AdvanceTable/AdvanceTableFooter";
import AdvanceTablePagination from "common/AdvanceTable/AdvanceTablePagination";
import AdvanceTableSearchBox from "common/AdvanceTable/AdvanceTableSearchBox";
import AdvanceTableWrapper from "common/AdvanceTable/AdvanceTableWrapper";
import classNames from "classnames";
import IconButton from "components/common/IconButton";

const Project = ({ project, isLast }) => {
    const { color, progress, duration, title, po_name } = project;
    return (
      <Row
        className={classNames('align-items-center py-2', {
          'border-bottom border-200 ': !isLast
        })}
      >
        <Col className="py-1">
          <Flex className="align-items-center">
            <div className="avatar avatar-xl me-3">
              <div className={`avatar-name rounded-circle bg-soft-${color}`}>
                <span className={`fs-0 text-${color}`}>{title[0]}</span>
              </div>
            </div>
            <Flex className="position-relative">
              <Flex tag="h6" align="center" className="mb-0">
                <a className="text-800 stretched-link" href="#!">
                  {title}
                </a>
                <Badge pill bg="200" className="ms-2 text-primary">
                  {po_name}%
                </Badge>
              </Flex>
            </Flex>
          </Flex>
        </Col>
        <Col>
          <Row className="justify-content-end align-items-center">
            <Col xs="auto pe-0">
              <div className="fs--1 fw-semi-bold">{duration}</div>
            </Col>
            <Col xs="5" className="pe-card">
              <ProgressBar now={progress} style={{ height: 5 }} />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  };

  const columns = [
    {
        accessor: 'warehouse_name',
        Header: 'Warehouse'
    },
    {
        accessor: 'num_bins',
        Header: 'Number of Bins'
    },
    {
        accessor: 'address',
        Header: 'Address'
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
        accessor: 'country',
        Header: 'Country'
    },
    {
        accessor: 'zip',
        Header: 'Zip Code'
    },
    {
        accessor: 'num_items',
        Header: 'Number of Items'
    },
    {
        accessor: 'inv_value',
        Header: 'Inventory Value'
    },
  ]

  const data = [
      {
          warehouse_name: 'Wesley Chapel',
          num_bins: '1000',
          address: '34417 Wynthorne Place',
          city: 'Wesley Chapel',
          state: 'Florida',
          country: 'USA',
          zip: '33545',
          num_items: '1000',
          inv_value: '$150,000'
      }
  ]

  Project.propTypes = {
    project: PropTypes.shape({
      color: PropTypes.string.isRequired,
      progress: PropTypes.number.isRequired,
      duration: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }),
    isLast: PropTypes.bool
  };

  const purchaseOrders = [
      {
          id: 1,
          title: 'Wesley Chapel',
          progress: 0,
          duration: 'April 28, 2022',
          color: 'primary',
          po_name: 'PO-ABC123'
      },
      {
        id: 2,
        title: 'Hickory',
        progress: 50,
        duration: 'April 23, 2022',
        color: 'success',
        po_name: 'PO-AB4321'
    }
  ]

  function BulAction({ selectedRowIds }) {
    return (
        <Row className="flex-between-center mb-3">
            <Col xs={4} small="auto" className="d-flex align-items-center pe-0">
                <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">
                    {
                        Object.keys(selectedRowIds).length > 0 ? Object.keys(selectedRowIds).length + ' selected' : 'Select Warehouses'
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

const WarehouseSummary = () => {
    return (
        <>
            <Row className="g-3 mb-3">
                <Col lg={6}>
                    <Card>
                        <Card.Header className="bg-light">
                            <Row className="align-items-center">
                                <Col>
                                    <h6>Incoming Purchase Orders</h6>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body className="py-0">
                            {purchaseOrders.map((project, index) => (
                                <Project
                                    project={project}
                                    isLast={index === data.length -1}
                                    key={project.id}
                                />
                            ))}
                        </Card.Body>
                        <Card.Footer className='p-0 bg-light'>
                            <Button 
                                as={Link}
                                variant="link"
                                size="lg"
                                to={"#!"}
                                className="w-100 py-2"
                            >
                                View All Purchase Orders
                                <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
                            </Button>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card className="h-lg-100">
                        <Card.Body as={Flex} alignItems="center">
                            <Row>
                                <div class="w-100">
                                    <h6 className="mb-3 text-800">
                                        Wesley Chapel 95%
                                    </h6>
                                    <ProgressBar
                                        style={{ height: 10 }}
                                        variant="primary"
                                        className="border-end border-2 border-white"
                                    />
                                </div>
                            </Row>
                        </Card.Body>
                    </Card>
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

export default WarehouseSummary