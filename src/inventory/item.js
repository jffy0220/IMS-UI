const { default: SearchBox } = require("components/navbar/top/SearchBox")
const { Card } = require("react-bootstrap")

const Item = () => {
    return (
        <>
            <Row>
                <Card>
                    <Card.Header>
                        <Row>
                            <h5>Inventory Item</h5>
                        </Row>
                        <Row>
                            <Col><h5>A-12-HP-C-230B</h5></Col>
                            <Col><SearchBox /></Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <Button variant="primary">Edit</Button>
                        <Button variant="danger">Delete</Button>
                    </Card.Body>
                </Card>
            </Row>

            <Row>
                <Card>
                    <Card.Header><h5>Primary Information</h5></Card.Header>
                    <Card.Body>
                        <Row>
                            <Col><p>ID<br />1</p></Col>
                            <Col><p>Item Name<br />A-12-HP-C-230B</p></Col>
                            <Col><p>Display Name<br />Advantage 12V Conditioner</p></Col>
                        </Row>
                        <Row>
                            <Col><p>UPC Code<br />1234567890</p></Col>
                            <Col><p>Vendor Name<br />Farley Tech</p></Col>
                            <Col><p>Purchase Units<br />Each</p></Col>
                            <Col><p>Sub-Item<br />None</p></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>
        </>
    )
}