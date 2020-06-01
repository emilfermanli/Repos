import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import {
    useLocation
} from "react-router-dom";
import { useTranslation } from "react-i18next"



function ProjectSetting() {


    const location = useLocation()

    const { t } = useTranslation()

    return (
        <div className="pb-5">
            <Container className="pl-5 pr-5">
                <Row>
                    <Col md={12} className="projects-header">
                        <h3>{t("projectDetail.projectName")}: {location.state.project_name}</h3>
                    </Col>
                    <Col md={12}>
                        <div className="project-detail">
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <span style={{ marginRight: "60px" }}>{t("projectDetail.projectServer")}</span>
                                </li>
                                <li className="mb-3">
                                    <span style={{ marginRight: "60px" }}>{t("projectDetail.token")}</span>
                                </li>
                                <li className="mb-3">
                                    <span style={{ marginRight: "60px" }}>{t("projectDetail.port")}</span>
                                </li>
                                <li className="mb-3">
                                    <span style={{ marginRight: "60px" }}>{t("projectDetail.sslPort")}</span>
                                </li>
                                <li className="mb-3">
                                    <span style={{ marginRight: "60px" }}>{t("projectDetail.planLimits")}</span>
                                </li>
                            </ul>
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <span>www.beta.com</span>
                                </li>
                                <li className="mb-3">
                                    <span>adiajsJsdlasjdasdlkajsdaisdlajsdalkjsdialsjdawjdaskdasdasd</span>
                                </li>
                                <li className="mb-3">
                                    <span>1928</span>
                                </li>
                                <li className="mb-3">
                                    <span>2131</span>
                                </li>
                                <li className="mb-3">
                                    <span>Connection limit 30 devices . Database size 100Mb. etc.</span>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={12} className="projects-header">
                        <h3>{t("projectDetail.database")}</h3>
                    </Col>
                    <Col md={12}>
                        <div>
                            <ul className="list-unstyled w-100">
                                <li className="form-style mb-3"><span>{t("projectDetail.downloadText")}</span><Button className="custom-btn custom-color">{t("actionType.download")}</Button></li>
                                <li className="form-style mb-3"><span>{t("projectDetail.resetText")}</span><Button className="custom-btn custom-color">{t("actionType.reset")}</Button></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}



export default ProjectSetting