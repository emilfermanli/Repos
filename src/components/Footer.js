import React from 'react'
import { Container, Row, Col } from 'reactstrap'

function Footer() {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col md={4}>
                        <ul className="list-unstyled">
                            <li>Line-4</li>
                            <li>Line-4</li>
                            <li>Line-4</li>
                            <li>Line-4</li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <ul className="list-unstyled">
                            <li>Line-4</li>
                            <li>Line-4</li>
                            <li>Line-4</li>
                            <li>Line-4</li>
                        </ul>
                    </Col>
                    <Col md={4} style={{ display: "flex", alignItems: "center" }}>
                        <h4>Beta</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer