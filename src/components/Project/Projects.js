import React, { useEffect } from 'react'
import { Container, Col } from 'reactstrap'
import ProjectItem from './ProjectItem'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
import { connect } from "react-redux";
import { getProject } from "../../redux/actions/userAction"
import loading from "../../assets/img/load.gif"
import { useTranslation } from "react-i18next"

const Projects = ({ getProject }) => {

    const allProject = useSelector(state => state.projectReducer)

    useEffect(() => {
        getProject()
    }, [getProject])


    const { t } = useTranslation();


    return (
        <div className="pb-5">
            <Container >
                <Col md={12} style={{ alignItems: "center" }} className="projects-header">
                    <span>{t('projectHeader.header')}</span>
                    <Link className="btn btn-primary custom-button custom-color" to="/newproject">{t("newProject.projectAction")}</Link>
                </Col>
                <div className="project-item-box">
                    <ul style={{
                        height: "100%",
                        margin: "0px"
                    }} className="list-unstyled">
                        {
                            allProject.loading ? (<Loading />) :
                                allProject.project.length === 0 ?
                                    (<NoItem />) :
                                    allProject.project.map(index =>
                                        <li className="project-item d-flex justify-content-between" key={index.id}>
                                            <Link
                                                style={{ width: "80%", padding: "15px 0px" }}
                                                to={{
                                                    pathname: `/project`,
                                                    state: index
                                                }}>
                                                <ProjectItem
                                                    project_name={index.project_name}
                                                    plan={index.plan}
                                                    plan_info={index.plan_info}
                                                    id={index.id}
                                                />

                                            </Link>
                                            <Link
                                                style={{ width: "20%" }}
                                                to={{
                                                    pathname: "/newproject",
                                                    state: index
                                                }} className="btn btn-primary custom-button custom-color">
                                                {t("projectHeader.edit")}
                                            </Link>
                                        </li>
                                    )
                        }

                    </ul>

                </div>
            </Container>
        </div >
    )
}

const NoItem = () => {
    const { t } = useTranslation()
    return (
        <div className="text-center p-5">
            <h2>{t("newUser.project")}</h2>
            <p>{t("newUser.startProject")} {" "}
                <Link className="btn btn-primary custom-button custom-color" to="/newproject">{t("newProject.projectAction")}</Link></p>
        </div>
    )
}

const Loading = () => {
    return (
        <div className="h-100 d-flex align-items-center justify-content-center">
            <img height="60px" width="60px" src={loading} alt="loading" />
        </div>
    )
}



const mapDispatchToProps = {
    getProject,
}

export default connect(null, mapDispatchToProps)(Projects)
