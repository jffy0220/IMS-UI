import AdvanceTableWrapper from "common/AdvanceTable/AdvanceTableWrapper"
import AdvanceTableFooter from "common/AdvanceTable/AdvanceTableFooter"
import AdvanceTablePagination from "common/AdvanceTable/AdvanceTablePagination"
import AdvanceTable from "common/AdvanceTable/AdvanceTable"
import AdvanceTableSearchBox from "common/AdvanceTable/AdvanceTableSearchBox"
import { Card, Row, Col } from "react-bootstrap"
import IconButton from "components/common/IconButton"

const columns = [
    {
        accessor: 'first_name',
        Header: 'First Name'
    },
    {
        accessor: 'last_name',
        Header: 'Last Name'
    },
    {
        accessor: 'department',
        Header: 'Department'
    },
    {
        accessor: 'sub_department',
        Header: 'Sub-Depaartment'
    },
    {
        accessor: 'warehouse',
        Header: 'Warehouse'
    },
    {
        accessor: 'section',
        Header: 'Section'
    },
    {
        accessor: 'role_one',
        Header: 'Role'
    },
    {
        accessor: 'status',
        Header: 'Status'
    },
    {
        accessor: 'username',
        Header: 'Username'
    },
    {
        accessor: 'device_id',
        Header: 'Device ID'
    },
]

const data = [
    {
        first_name: 'Justin',
        last_name: 'Farley',
        department: 'Company',
        sub_department: 'Executive',
        warehouse: 'N/A',
        section: 'N/A',
        role_one: 'Admin',
        status: 'Online',
        username: 'Justin.Farley',
        device_id: 'N/A'
    }
]

const UserManagement = () => {
    return (
        <>
            <AdvanceTableWrapper
                columns={columns}
                data={data}
                sortable
                pagination
                perPage={25}
            >
                <Card>
                    <Card.Header>
                        <Row className="flex-between-center">
                            <Col xs={4} sm="auto" className="d-flex align-items-center pe-0">
                                <h5 className="fs-0 px-2 mb-0 text-nowrap py-2 py-xl-0">Users</h5>
                                <AdvanceTableSearchBox table/>
                            </Col>
                            <Col xs={8} sm="auto" className="ms-auto text-end ps-0">
                                <div id="orders-actions">
                                    <IconButton
                                    variant="falcon-default"
                                    size="sm"
                                    icon="plus"
                                    transform="shrink-3"
                                    >
                                    <span className="d-none d-sm-inline-block ms-1">New</span>
                                    </IconButton>
                                    <IconButton
                                    variant="falcon-default"
                                    size="sm"
                                    icon="filter"
                                    transform="shrink-3"
                                    className="mx-2"
                                    >
                                    <span className="d-none d-sm-inline-block ms-1">Filter</span>
                                    </IconButton>
                                    <IconButton
                                    variant="falcon-default"
                                    size="sm"
                                    icon="external-link-alt"
                                    transform="shrink-3"
                                    >
                                    <span className="d-none d-sm-inline-block ms-1">Export</span>
                                    </IconButton>
                                </div>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <AdvanceTable
                            table
                            headerClassName="bg-200 text-900 text-nowrap align-middle"
                            rowClassName="align-middle white-space-nowrap"
                            tableProps={{
                            size: 'sm',
                            striped: true,
                            className: 'fs--1 mb-0 overflow-hidden'
                            }}
                        />
                    </Card.Body>
                    <Card.Footer>
                        <AdvanceTablePagination table />
                    </Card.Footer>
                </Card>
            </AdvanceTableWrapper>
        </>
    )
}

export default UserManagement