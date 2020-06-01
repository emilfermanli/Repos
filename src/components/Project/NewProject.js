import React, { useState } from 'react'
import { Container, Col, FormGroup, Input, Label, Form, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import data from "../api/apidata"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"


function NewProject() {
    const location = useLocation()
    const select = useSelector(state => state.projectReducer)


    const [project, setProject] = useState({
        project_name: location.state ? location.state.project_name : "",
        region: location.state ? location.state.region : "",
        plan: location.state ? location.state.plan : "",
        plan_info: location.state ? location.state.plan_info : "",
        id: select.length + 1
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (
            project.project_name === "" ||
            project.region === "" ||
            project.plan === "" ||
            project.plan_info === ""
        ) {
            toast.warn("Postunuz Elave olunmadi")
        } else {
            if (location.state) {
                data.put(`/project/${location.state.id}`, { ...project })
                toast.success("Postunuz muveqqeyyitle deyisildi")
            } else {
                data.post(`/project`, { ...project })
                toast.success("Postunuz muveqqeyyitle elave edildi")
            }

        }
    }

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setProject({
            ...project,
            [name]: value
        })
    }


    const { t } = useTranslation()

    return (
        <div className="pb-5">
            <Container >
                <Col md={12} className="projects-header">
                    <h3>{location.state ? t("newProject.projectEdit") : t("newProject.projectAction")}</h3>
                </Col>
                <Col md={12}>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <FormGroup style={{ display: "flex", justifyContent: "center" }}>
                            <Label style={{ margin: "0px 40px" }} for="exampleEmail">{t("newProject.projectName")}</Label>
                            <Input onChange={(e) => handleChange(e)} style={{ width: "51%" }} type="text" name="project_name" id="exampleEmail" placeholder="with a placeholder"
                                value={project.project_name} />
                        </FormGroup>
                        <FormGroup style={{ display: "flex", justifyContent: "center" }}>
                            <Label style={{ margin: "0px 40px" }} for="exampleSelect">{t("newProject.projectRegion")}</Label>
                            <Input
                                value={project.region}
                                onChange={(e) => handleChange(e)} style={{ width: "51%" }} type="select" name="region" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup>
                        <FormGroup style={{ display: "flex", justifyContent: "center" }}>
                            <Label onChange={(e) => handleChange(e)} style={{ margin: "0px 40px", display: "flex", flexDirection: "column" }} for="exampleSelect">{t("newProject.projectPlan")}
                                <span className="mt-5">{t("newProject.projectKey")}</span>
                            </Label>
                            <Input value={project.plan} onChange={(e) => handleChange(e)} style={{ width: "24%", marginLeft: "20px" }} type="select" name="plan" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                            <Input value={project.plan_info} onChange={(e) => handleChange(e)} placeholder="Plan info" style={{ width: "24%", marginLeft: "30px", resize: "none" }} type="textarea" name="plan_info" id="exampleText" />
                        </FormGroup>
                        <FormGroup style={{ display: "flex", justifyContent: "flex-end", marginRight: "177px" }}>
                            <Link className="btn btn-outline-secondary custom-color text-white" to="/projectItm">{t("newProject.projectCancel")}</Link>
                            <Button type="submit" className="ml-3 custom-color">
                                {t("newProject.projectStart")}
                            </Button>
                        </FormGroup>
                    </Form>
                    <ToastContainer position="bottom-right" autoClose={3000} />
                </Col>
            </Container>
        </div >
    )
}


export default NewProject
