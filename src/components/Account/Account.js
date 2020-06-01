import React, { useState } from 'react'
import { Container, Col, Row, Form, FormGroup, Label, Input, Button } from "reactstrap"
import data from "../api/apidata"
import i18next from 'i18next';
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from "react-i18next"

function Account() {
    const [newPassword, setnewPassword] = useState({
        new_password: "",
        repeat_password: ""
    })

    const [newMail, setnewMail] = useState({
        new_mail: "",
        repeat_mail: ""
    })

    const [lang, setLang] = useState("")

    const handleMail = (e) => {
        let name = e.target.name.trim()
        let value = e.target.value.trim()

        setnewMail({
            ...newMail,
            [name]: value
        })
    }

    const handleChange = (e) => {
        let name = e.target.name.trim()
        let value = e.target.value.trim()

        setnewPassword({
            ...newPassword,
            [name]: value
        })
    }

    const handleSubmitMail = (e) => {
        e.preventDefault()
        if (newMail.new_mail === "" &&
            newMail.repeat_mail === "" &&
            newMail.new_password === newMail.repeat_password
        ) {
            toast.warning("Mail eyni deyil")
        } else {
            data.post("/mail", { ...newMail })
            toast.success("email ugurla dəyişildi")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newPassword.new_password === "" &&
            newPassword.repeat_password === "" &&
            newPassword.new_password === newPassword.repeat_password
        ) {
            toast.warning("Şifrələr eyni deyil")
        } else {
            if (newPassword.new_password.length < 5) {
                toast.warning("Şifrə 5 hərfdən qısa olmamalıdır")
            } else {
                data.post("/password", { ...newPassword })
                toast.success("Şifrə dəyişildi")
            }
        }
    }

    const handleChangeLanguage = (e) => {
        let val = e.target.value
        setLang(val)
    }


    const handleLanguage = (e) => {
        e.preventDefault()
        i18next.changeLanguage(lang)
        toast.success("Dil ugurla deyisildi")
    }


    const handleDeleteAccount = (e) => {
        e.preventDefault()
        let date = new Date()
        let year = date.getFullYear()
        let day = date.getDate()
        let mounth = date.getMonth() + 1
        let deleteTime = year + "-" + mounth + "-" + day

        data.post(`/settings`, { deleteTime })

        toast.success("Proyekt ugurla silindi")
    }

    const { t } = useTranslation()


    return (
        <Container className="pb-5">
            <Col md={12} className="projects-header">
                <h3>{t("account.accountSettings")}</h3>
            </Col>
            <Row>
                <Col md={6}>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <FormGroup style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Label style={{ margin: "0px 40px" }} for="examplePass">{t("account.newPassword")}</Label>
                            <Input onChange={(e) => handleChange(e)} style={{ width: "51%" }} type="password" name="new_password" id="examplePass" placeholder="New password" />
                        </FormGroup>
                        <FormGroup style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Label style={{ margin: "0px 40px" }} for="examplePass1">{t("account.confirmPassword")}</Label>
                            <Input onChange={(e) => handleChange(e)} style={{ width: "51%" }} type="password" name="repeat_password" id="examplePass1" placeholder="Confirm password" />
                        </FormGroup>
                        <div style={{ textAlign: "right" }}>
                            <Button className="custom-color">{t("account.changePassword")}</Button>
                        </div>
                    </Form>
                </Col>
                <Col md={6}>
                    <Form onSubmit={(e) => handleSubmitMail(e)}>
                        <FormGroup style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Label style={{ margin: "0px 40px" }} for="exampleEmail1">{t("account.newEmail")}</Label>
                            <Input onChange={(e) => handleMail(e)} style={{ width: "51%" }} type="email" name="new_email" id="exampleEmail1" placeholder="New email" />
                        </FormGroup>
                        <FormGroup style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Label style={{ margin: "0px 40px" }} for="exampleEmail2">{t("account.confirmEmail")}</Label>
                            <Input onChange={(e) => handleMail(e)} style={{ width: "51%" }} type="email" name="repeat_mail" id="exampleEmail2" placeholder="Confirm email" />
                        </FormGroup>
                        <div style={{ textAlign: "right" }}>
                            <Button className="custom-color">{t("account.changeEmail")}</Button>
                        </div>
                    </Form>
                </Col>
                <Col md={7} className="mt-5">
                    <Form onSubmit={(e) => handleLanguage(e)}>
                        <FormGroup style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Label style={{ margin: "0px 40px" }} for="exampleSelect1">{t("account.language")}</Label>
                            <Input onChange={(e) => handleChangeLanguage(e)} style={{ width: "35%", marginLeft: "20px" }} type="select" name="select" id="exampleSelect1">
                                <option>{t("account.selectLanguage")}</option>
                                <option>az</option>
                                <option>en</option>
                                <option>ru</option>
                            </Input>
                            <Button className="custom-color">{t("account.language")}</Button>
                        </FormGroup>
                    </Form>
                </Col>
                <Col className="mt-4" md={12}>
                    <h4 className="mt-3 mb-3">{t("account.deleteAccount")}</h4>
                    <Form onSubmit={(e) => handleDeleteAccount(e)}>
                        <div style={{ display: "flex" }}>
                            <div style={{ width: "60%" }}>
                                <p>
                                    {t("account.deleteInfo")}</p>

                            </div>
                            <div style={{ width: "40%", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                                <Button className="custom-color">{t("account.deleteAccount")}</Button>
                            </div>
                        </div>
                    </Form>
                </Col>
                <ToastContainer position="bottom-right" autoClose={3000} />
            </Row>
        </Container>
    )
}


export default Account