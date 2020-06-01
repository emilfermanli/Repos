import React from 'react'
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Table } from 'reactstrap'
import { useTranslation } from "react-i18next"
import { useLocation } from "react-router-dom"

export default function Messages() {

    const { t } = useTranslation()
    const location = useLocation()

    return (
        <div>
            <Container className="pl-5 pr-5">
                <Row className="pb-5">
                    <Col md={12} className="projects-header pb-3">
                        <h3>{t("messages.messagesProject") + ": " + location.state.project_name}</h3>
                    </Col>
                    <Col md={12} className="pb-5">
                        <div>
                            <h6>{t("messages.messagesInfo")}</h6>
                        </div>
                    </Col>
                    <Col md={3} >
                        <Col md={12} className="message-box">
                            <h6>{t("messages.messagesSend")}</h6>
                            <Form>
                                <FormGroup>
                                    <Label for="Topic">{t("messages.messagesTopic")}</Label>
                                    <Input type="text" id="Topic" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="Certificate">{t("messages.messagesMessage")}</Label>
                                    <Input style={{ resize: "none", }} type="textarea" name="text" id="Certificate" />
                                </FormGroup>
                                <Button className="custom-color">{t("actionType.send")}</Button>
                            </Form>
                        </Col>
                    </Col>
                    <Col md={8}>
                        <Col md={12} className="message-box" style={{ overflowY: "scroll" }}>
                            <h6 style={{ border: "none" }}>{t("messages.messagesReceive")}</h6>
                            <Table borderless >
                                <thead className="big">
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>

                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Col>
                    <Col md={3}>
                        <Col md={12} className="message-mini">
                            <h6>{t("messages.messagesClearSession")}</h6>
                            <Form>
                                <FormGroup>
                                    <Label for="Client">{t("messages.messagesClient")}</Label>
                                    <Input style={{ resize: "none", }} type="text" name="text" id="Client" />
                                </FormGroup>
                                <Button className="custom-color">{t("messages.messagesSign")}</Button>
                            </Form>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
