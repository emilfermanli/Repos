import React, { useState } from 'react'
import { Container, Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import data from "../api/apidata"
import { useLocation } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from "react-i18next"

function Azure() {


    const location = useLocation()

    const [azure, setAzure] = useState({
        project_name: location.state.project_name,
        stream_name: "",
        access_key: "",
        secret_access_key: "",
        region: ""
    })

    const { t } = useTranslation()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (
            azure.stream_name === "" ||
            azure.access_key === "" ||
            azure.secret_access_key === "" ||
            azure.region === ""
        ) {
            toast.warn("Postunuz Elave olunmadi")
        } else {
            data.post(`/azure`, { azure })
            toast.success("Postunuz muveqqeyyitle elave edildi")
        }

    }

    const handleChange = (e) => {
        e.preventDefault()
        let name = e.target.name
        let value = e.target.value
        setAzure({
            ...azure,
            [name]: value
        })
    }

    return (
        <div className="pb-5">
            <Container className="pl-5 pr-5">
                <Row>
                    <Col md={12} className="projects-header pb-3">
                        <h3>{t("azure.connect")}</h3>
                    </Col>
                    <Col md={12}>
                        <div>
                            <h6>{t("azure.freePlan")}</h6>
                        </div>
                    </Col>
                    <Col md={12} style={{ padding: "0px 150px" }} className="mt-5">
                        <Form onSubmit={(e) => handleSubmit(e)}>
                            <FormGroup className="form-style">
                                <Label for="StreamName">{t("azure.streamName")}</Label>
                                <Input onChange={(e) => handleChange(e)} style={{ width: "66%" }}
                                    name="stream_name"
                                    type="text"
                                    id="StreamName" />
                            </FormGroup>
                            <FormGroup className="form-style">
                                <Label for="AccessKey">{t("azure.azureKey")}</Label>
                                <Input onChange={(e) => handleChange(e)}
                                    style={{ resize: "none", width: "66%" }}
                                    type="textarea"
                                    name="access_key"
                                    id="AccessKey" />
                            </FormGroup>
                            <FormGroup className="form-style">
                                <Label for="AccessKeySecret">{t("azure.azureSecretKey")}</Label>
                                <Input onChange={(e) => handleChange(e)}
                                    style={{ resize: "none", width: "66%" }}
                                    type="textarea"
                                    name="secret_access_key"
                                    id="AccessKeySecret" />
                            </FormGroup>
                            <FormGroup className="form-style">
                                <Label for="Selectcart1">{t("azure.azureRegion")}</Label>
                                <Input
                                    onChange={(e) => handleChange(e)}
                                    style={{ width: "66%" }}
                                    type="select"
                                    name="region"
                                    id="exampleSelect"
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>

                            </FormGroup>
                            <Col md={12} style={{ textAlign: "right", padding: "0px" }}>
                                <Button style={{ position: "relative" }} className="custom-btn custom-color">
                                    {t("actionType.save")}
                                </Button>
                            </Col>
                        </Form>
                        <ToastContainer position="bottom-right" autoClose={3000} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Azure