import { Col, Row } from 'react-bootstrap'
import InventoryGraph from './util/InventoryGraph'

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

const Inventory = () => {
    return (
        <>
            <Row className="g-3 mb-3">
                <Col xxl={8}>
                    <InventoryGraph chartData={audienceChart} className="mb-3" />
                </Col>
            </Row>
        </>
    )
}

Inventory.propTypes = {}

export default Inventory