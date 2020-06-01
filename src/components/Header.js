import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import User from "../assets/img/male.png";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux"
import Logo from "../assets/img/logo.png"
import { useTranslation } from "react-i18next"



const Header = () => {

    const toggle = () => setIsOpen(!isOpen);
    const [isOpen, setIsOpen] = useState(false);

    const name = useSelector(state => state.dataReducer)

    const { t } = useTranslation()

    return (
        <div>
            <Navbar color="light" light expand="md">
                <Link to="/projectItm"><img style={{ marginRight: "20px" }} height="35" src={Logo} alt="logo" /></Link>
                <Link to="/projectItm" className="btn custom-color text-white" >{t("header.allItm")}</Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                <img style={{ borderRadius: "100%", marginRight: "10px" }} width="30px" height="30px" src={User} alt="user-img" />
                                {name.username}
                            </DropdownToggle>
                            <DropdownMenu right>
                                <Link to="/account">
                                    <DropdownItem>
                                        {t("header.accountSettings")}
                                    </DropdownItem>
                                </Link>
                                <Link to="/billing">
                                    <DropdownItem>
                                        {t("header.accountBilling")}
                                    </DropdownItem>
                                </Link>
                                <DropdownItem divider />
                                <DropdownItem>
                                    {t("header.accountLog")}
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;