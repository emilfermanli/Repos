import React from 'react'
import { Container, Row, Col, Form, Label, Input, FormGroup, Button } from 'reactstrap'
import { useTranslation } from "react-i18next"

function Billing() {

    const { t } = useTranslation()

    return (
        <div className="pb-5">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="projects-header">
                            <h3>{t("billing.billingInformation")}</h3>
                        </div>
                        <div>
                            <Form>
                                <FormGroup className="form-style">
                                    <Label style={{ width: "40%", textAlign: "center" }} for="Companyname">{t("billing.companyName")}</Label>
                                    <Input style={{ width: "60%" }} type="text" id="Companyname" placeholder="with a placeholder" />
                                </FormGroup>
                                <FormGroup className="form-style">
                                    <Label style={{ width: "40%", textAlign: "center" }} for="Billingemail">{t("billing.billingEmail")}</Label>
                                    <Input style={{ width: "60%" }} type="text" id="Billingemail" placeholder="with a placeholder" />
                                </FormGroup>
                                <FormGroup className="form-style">
                                    <Label style={{ width: "40%", textAlign: "center" }} for="Billingnote">{t("billing.billingNote")}</Label>
                                    <Input style={{ width: "60%" }} type="text" id="Billingnote" placeholder="with a placeholder" />
                                </FormGroup>
                                <FormGroup className="form-style">
                                    <Label style={{ width: "40%", textAlign: "center" }} for="Companyadress">{t("billing.companyAddress")}</Label>
                                    <Input style={{ width: "60%" }} type="email" id="Companyadress" placeholder="with a placeholder" />
                                </FormGroup>
                                <FormGroup className="form-style">
                                    <Label style={{ width: "40%", textAlign: "center" }} for="Country">{t("billing.country")}</Label>
                                    <Input style={{ width: "60%" }} type="select" name="select" id="exampleSelect">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup className="form-style">
                                    <Label style={{ width: "40%", textAlign: "center" }} for="Country">Vat ID</Label>
                                    <Input style={{ width: "60%" }} type="text" id="Country" placeholder="with a placeholder" />
                                </FormGroup>
                                <FormGroup style={{ justifyContent: "flex-end" }} className="form-style">
                                    <Button style={{ width: "120px" }} className="custom-color">{t("actionType.save")}</Button>
                                </FormGroup>
                            </Form>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="projects-header">
                            <h3>{t("billing.paymentOptions")}</h3>
                        </div>
                        <div>
                            <Form>
                                <FormGroup className="form-style">
                                    <Label for="Selectcart">{t("billing.selectCard")}</Label>
                                    <Input style={{ width: "50%" }} type="email" name="text" id="Selectcart" placeholder="with a placeholder" />
                                    <Button className="custom-color">{t("billing.newCard")}</Button>
                                </FormGroup>
                                <div className="mt-5 mb-5">
                                    <span><strong>{t("billing.otherPayment")}</strong></span>
                                    <p className="text-secondary mt-3 mb-3">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                </div>
                                <FormGroup className="form-style">
                                    <Label for="Selectcart1">{t("billing.selectCard")}</Label>
                                    <Input style={{ width: "50%" }} type="select" name="select" id="exampleSelect">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                    <Button className="custom-color">{t("billing.saveCurrency")}</Button>
                                </FormGroup>
                                <div className="text-right mt-5">
                                    <span>{t("billing.info")}</span>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Billing
