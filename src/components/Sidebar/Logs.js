import React from 'react'
import { Container, Row, Col } from 'reactstrap'

function Logs() {
    return (
        <div className="pb-5">
            <Container className="pl-5 pr-5">
                <Row>
                    <Col md={12} className="projects-header pb-3">
                        <ul className="list-unstyled list">
                            <li>Received</li>
                            <li>The total number of bytes received since the broker started.</li>
                            <li>Sent</li>
                            <li>The total number of bytes sent since the broker started.</li>
                            <li>Connected</li>
                            <li>The number of currently connected clients</li>
                            <li>Expired</li>
                            <li>The number of disconnected persistent clients that have been expired and removed through the persistent_client_expiration option.</li>
                            <li>Disconnected</li>
                            <li>The total number of persistent clients (with clean session disabled) that are registered at the broker but are currently disconnected.</li>
                            <li>Maximum</li>
                            <li>The maximum number of clients that have been connected to the broker at the same time.</li>
                            <li>Total</li>
                            <li>The total number of active and inactive clients currently connected and registered on the broker.</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Logs