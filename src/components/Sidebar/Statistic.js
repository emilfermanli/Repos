import React, { useEffect } from 'react'
import { Container, Col, Row } from 'reactstrap'
import { connect, useSelector } from "react-redux";
import { getStatistic } from "../../redux/actions/userAction"
import { useTranslation } from "react-i18next"

function Statistic(props) {

    const select = useSelector(state => state.statisticReducer)


    useEffect(() => {
        props.getStatistic()
    }, [props])

    const { t } = useTranslation()

    return (
        <div className="pb-5">
            <Container className="pl-5 pr-5">
                <Row>
                    <Col md={12} className="projects-header connections pb-3">
                        <ul className="list-unstyled w-100">
                            <li><h3>{t("statics.headerMQ")}</h3></li>
                            <li>{t("statics.maxConnected")} {select.mq_max_connected}</li>
                            <li>{t("statics.online")}{select.mq_online}</li>
                            <li>{t("statics.savedConnections")}{select.mq_saved_connections}</li>
                        </ul>
                        <ul className="list-unstyled w-100">
                            <li><h3>{t("statics.headerSSLMQ")} </h3></li>
                            <li>{t("statics.maxConnected")} {select.ssl_max_connected}</li>
                            <li>{t("statics.online")}{select.ssl_online}</li>
                            <li>{t("statics.savedConnections")} {select.ssl_saved_connections}</li>
                        </ul>
                        <ul className="list-unstyled w-100">
                            <li><h3>{t("statics.headerWebSocket")}</h3></li>
                            <li>{t("statics.maxConnected")} {select.wb_max_connected}</li>
                            <li>{t("statics.online")}{select.wb_online} </li>
                            <li>{t("statics.savedConnections")} {select.wb_saved_connections}</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}



const mapDispatchToProps = {
    getStatistic
}


export default connect(null, mapDispatchToProps)(Statistic)
