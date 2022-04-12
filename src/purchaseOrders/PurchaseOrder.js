const { default: AdvanceTableFooter } = require("common/AdvanceTable/AdvanceTableFooter")
const { default: AdvanceTableSearchBox } = require("common/AdvanceTable/AdvanceTableSearchBox")
const { default: AdvanceTableWrapper } = require("common/AdvanceTable/AdvanceTableWrapper")
const { default: AppContext } = require("context/Context")
const { useEffect } = require("react")
const { Card } = require("react-bootstrap")
import IconButton from 'components/common/IconButton'
import 'leaflet.tilelayer.colorfilter'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';

const columns = []
const data = []

const markers = [
    {
        id: 0,
        lat: 53.958332,
        long: -1.080278,
        name: 'Ashley Farley',
        street: 'Slude Striang 27',
        location: '1130 Kobenhavn'
    }
]

function BulAction({ selectedRowIds }){
    return (
        <Row className="flex-between-center mb-3">
            <Col xs={4} sm="auto" className="d-flex align-items-center pe-0">
                <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">
                    {
                        Object.keys(selectedRowIds).length > 0 ? 
                            Object.keys(selectedRowIds).length + ' selected' : 'Select Purchase Orders'
                    }
                </h5>
            </Col>
            <Col xs={8} sm="auto" className="ms-auto text-end ps-0">
                {Object.keys(selectedRowIds).length > 0 ? (
                    <div className="d-flex">
                        <Form.Select size="sm" aria-label="Actions">
                            <option>No Action</option>
                            <option value="allocate">Receive Inventory</option>
                            <option value="pick">Remove Line Items</option>
                            <option value="Ship">Cancel Purchase Order</option>
                        </Form.Select>
                        <Button type="button" variant="falcon-default" size="sm" className="ms-2">Apply</Button>
                    </div>
                ) : (
                    <div id="order-actions">
                        <IconButton variant="falcon-default" size="sm" icon="plus" transform="shrink-3" className="me-2">
                            <span className="d-none d-sm-inline-block ms-1">New Purchase Order</span>
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

function LayerComponent() {
    const map = useMap()
    const { config } = useContext(AppContext)
    const { isDark } = config
    const filter = isDark ? [
        'invert:98%',
        'grayscale:69%',
        'bright:89%',
        'constast:111%',
        'hue:205deg',
        'saturate:1000%'
    ] : ['bright:101%', 'contrast:101%', 'hue:23deg', 'saturate:225%']

    useEffect(() => {
        map.invalidateSize()
    }, [config])

    useEffect(() => {
        if (map) {
            L.titleLayer.colorFilter(
                'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
                {
                    attribution: null,
                    transparent: true,
                    filter: filter
                }
            ).addTo(map)
        }
    }, [isDark])

    return (
        <>
            <TileLayer
                attribution={null}
                url={'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'}
            />
            <MarkerClusterGroup chunkedLoading={true} spiderfyOnMaxZoom={false}>
                {markers.map(marker => (
                <Marker
                    key={marker.id}
                    position={[marker.lat, marker.long]}
                    icon={L.icon({
                    iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAACXBIWXMAAAFgAAABYAEg2RPaAAADpElEQVRYCZ1XS1LbQBBtybIdiMEJKSpUqihgEW/xDdARyAnirOIl3MBH8NK7mBvkBpFv4Gy9IRSpFIQiRPyNfqkeZkY9HwmFt7Lm06+7p/vN2MmyDIrQ6QebALAHAD4AbFuWfQeAAACGs5H/w5jlsJJw4wMA+GhMFuMA99jIDJJOP+ihZwDQFmNuowWO1wS3viDXpdEdZPEc0odruj0EgN5s5H8tJOEEX8R3rbkMtcU34NTqhe5nSQTJ7Tkk80s6/Gk28scGiULguFBffgdufdEwWoQ0uoXo8hdAlooVH0REjISfwZSlyHGh0V5n6aHAtKTxXI5g6nQnMH0P4bEgwtR18Yw8Pj8QZ4ARUAI0Hl+fQZZGisGEBVwHr7XKzox57DXZ/ij8Cdwe2u057z9/wygOxRl4S2vSUHx1oucaMQGAHTrgtdag9mK5aN+Wx/uAAQ9Zenp/SRce4TpaNbQK4+sTcGqeTB/aIXv3XN5oj2VKqii++U0JunpZ8urxee4hvjqVc2hHpBDXuKKT9XMgVYJ1/1fPGSeaikzgmWWkMIi9bVf8UhotXxzORn5gWFchI8QyttlzjS0qpsaIGY2MMsujV/AUSdcY0dDpB6/EiOPYzclR1CI5mOez3ekHvrFLxa7cR5pTscfrXjk0Vhm5V2PqLUWnH3R5GbPGpMVD7E1ckXesKBQ7AS/vmQ1c0+kHuxpBj98lTCm8pbc5QRJRdZ6qHb/wGryXq3Lxszv+5gySuwvxueXySwYvHEjuQ9ofTGKYlrmK1EsCHMd5SoD7mZ1HHFCBHLNbMEshvrugqWLn01hpVVJhFgVGkDvK7hR6n2B+d9C7xsqWsbkqHv4cCsWezEb+o2SR+SFweUBxfA5wH7kShjKt2vWL57Px3GhIFEezkb8pxvUWHYhotAfCk2AtkEcxoOttrxUWDR5svb1emSQKj0WXK1HYIgFREbiBqmoZcB2RkbE+byMZiosorVgAZF1ID7yQhEs38wa7nUqNDezdlavC2HbBGSQkGgZ8uJVBmzeiKCRRpEa9ilWghORVeGB7BxeSKF5xqbFBkxBrFKUk/JHA7ppENQaCnCjthK+3opCEYyANztXmZN858cDYWSUSHk3A311GAZDvo6deNKUk1EsqnJoQlkYBNlmxQZeaMgmxoUokICoHDce351RCCiuKoirJWEgNOYvQplM2VCLhUqF7jf94rW9kHVUjQeheV4riv0i4ZOzzz/2y/+0KAOAfr4EE4HpCFhwAAAAASUVORK5CYII='
                    })}
                >
                    <Popup>
                    <h6 className="mb-1">{marker.name}</h6>
                    <p className="m-0 text-500">
                        {marker.street} {marker.location}
                    </p>
                    </Popup>
                </Marker>
                ))}
            </MarkerClusterGroup>
        </>
    )
}

function LeafletMap() {
    const position = [10.737, 0]
    const {
        config: { isRTL }
    } = useContext(AppContext)

    return (
        <div dir="ltr">
            <MapContainer
                zoom={isRTL ? 1.8 : 1.5}
                minZoom={isRTL ? 1.8 : 1.3}
                zoomSnap={0.5}
                center={position}
                radius={200}
                style={{ height: '300px', width: '100%' }}
            >
                <LayerComponent />
            </MapContainer>
        </div>
    )
}

const PurchaseOrder = () => {
    return (
        <>
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

                        <BulAction table />

                        <AdvanceTable
                            table
                            headerClassName="bg-200 text-900 text-nowrap align-middle"
                            rowClassName="align-middle white-space-nowrap"
                            tableProps={{
                                bordered: true,
                                striped: true,
                                className: 'fs--1 mb-0 oveflow-hidden'
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
            <Card>
                <Card.Header>
                    <h4>Purchase Order Locations</h4>
                </Card.Header>
                <Card.Body>
                    <LeafletMap />
                </Card.Body>
            </Card>
        </>
    )
}

export default PurchaseOrder