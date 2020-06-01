import React, { useState } from 'react';
import { FormGroup, Label, Input, Col, Button, Container, Row, Form } from "reactstrap"
import data from "../api/apidata"
import { useLocation } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from "react-i18next"
function Certificate() {

    const location = useLocation()

    const [certificate, setCertificate] = useState({
        project_name: location.state.project_name,
        domain_name: "",
        ca_chain: "",
        certificate: "",
        private_key: ""
    })

    const { t } = useTranslation()


    const handleSubmit = (e) => {
        e.preventDefault()

        if (certificate.domain_name === "" ||
            certificate.ca_chain === "" ||
            certificate.certificate === "" ||
            certificate.private_key === "") {
            toast.warn("Postunuz Elave olunmadi")
        } else {
            data.post(`/certificate`, { certificate })
            toast.success("Postunuz muveqqeyyitle elave edildi")
        }



    }

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setCertificate({
            ...certificate,
            [name]: value
        })
    }


    return (
        <div className="pb-5">
            <Container className="pl-5 pr-5">
                <Row>
                    <Col md={12} className="projects-header pb-3">
                        <h3>{t("certificate.certificate")}</h3>
                    </Col>
                    <Col md={12}>
                        <div>
                            <h6>lorem ipsum dolor sit amet</h6>
                        </div>
                    </Col>
                    <Col md={12} style={{ padding: "0px 150px" }} className="mt-5">
                        <Form onSubmit={(e) => handleSubmit(e)}>
                            <FormGroup className="form-style">
                                <Label for="Domain">{t("certificate.certificateDomain")}</Label>
                                <Input
                                    onChange={(e) => handleChange(e)}
                                    name="domain_name"
                                    style={{ width: "66%" }}
                                    type="text"
                                    id="Domain"
                                />
                            </FormGroup>
                            <FormGroup className="form-style">
                                <Label for="Chain">{t("certificate.certificateChain")}</Label>
                                <Input
                                    onChange={(e) => handleChange(e)}
                                    name="ca_chain"
                                    style={{ resize: "none", width: "66%" }}
                                    type="textarea"
                                    id="Chain"
                                />
                            </FormGroup>
                            <FormGroup className="form-style">
                                <Label for="Certificate">{t("certificate.certificateCertificate")}</Label>
                                <Input
                                    onChange={(e) => handleChange(e)}
                                    style={{ resize: "none", width: "66%" }}
                                    type="textarea"
                                    name="certificate"
                                    id="Certificate"
                                />
                            </FormGroup>
                            <FormGroup className="form-style">
                                <Label for="Key">{t("certificate.certificatePrivateKey")}</Label>
                                <Input
                                    onChange={(e) => handleChange(e)}
                                    style={{ resize: "none", width: "66%" }}
                                    type="textarea"
                                    name="private_key"
                                    id="private"
                                />
                            </FormGroup>
                            <Col md={12} style={{ textAlign: "right", padding: "0px" }}>
                                <Button className="custom-color">{t("certificate.certificateChange")}</Button>
                            </Col>
                        </Form>
                    </Col>
                    <ToastContainer position="bottom-right" autoClose={3000} />
                </Row>
            </Container>
        </div>
    )
}


export default Certificate
