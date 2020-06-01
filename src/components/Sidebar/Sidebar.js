import React from "react";
import {
    Switch,
    Route,
    useRouteMatch,
    useParams,
    NavLink,
    useLocation
} from "react-router-dom";
import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";
import ProjectSettings from "./ProjectSetting"
import Azure from "./Azure"
import Certificate from "./Certificate";
import Messages from "./Messages"
import Logs from "./Logs";
import Statistic from "./Statistic";
import { useTranslation } from "react-i18next"



function Sidebar() {

    let { path, url } = useRouteMatch();
    let location = useLocation()

    const { t } = useTranslation()

    return (
        <div style={{ display: "flex" }}>
            <div
                style={{
                    width: "15%",
                }}
            >
                <ul className="sidebar-items" style={{ listStyleType: "none", padding: 0 }}>
                    <li>
                        <NavLink to={{
                            pathname: `${url}/project`,
                            state: location.state
                        }} className="nav-itm" activeClassName="main-nav-active">{t("sidebar.projectSettings")}</NavLink>
                    </li>
                    <li>
                        <NavLink to={{
                            pathname: `${url}/azure`,
                            state: location.state
                        }} className="nav-itm" activeClassName="main-nav-active" >{t("sidebar.azureStream")}</NavLink>
                    </li>
                    <li>
                        <NavLink to={{
                            pathname: `${url}/certificate`,
                            state: location.state
                        }}
                            className="nav-itm" activeClassName="main-nav-active">{t("sidebar.certificate")}</NavLink>
                    </li>
                    <li>
                        <NavLink to={{
                            pathname: `${url}/messages`,
                            state: location.state
                        }}
                            className="nav-itm" activeClassName="main-nav-active">{t("sidebar.messages")}</NavLink>
                    </li>
                    <li>
                        <NavLink to={{
                            pathname: `${url}/static`,
                            state: location.state
                        }}
                            className="nav-itm" activeClassName="main-nav-active">{t("sidebar.statics")}</NavLink>
                    </li>
                    <li>
                        <NavLink to={{
                            pathname: `${url}/logs`,
                            state: location.state
                        }}
                            className="nav-itm" activeClassName="main-nav-active">{t("sidebar.logs")}</NavLink>
                    </li>
                </ul>
            </div>
            <div style={{ width: "85%" }}>
                <TransitionGroup>
                    <CSSTransition key={location.key}
                        classNames="fade"
                        timeout={300}
                    >
                        <Switch>
                            <Route exact path={path}>
                                <ProjectSettings />
                            </Route>
                            <Route path={`${path}/:topicId`}>
                                <System exact />
                            </Route>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        </div>
    );

    function System() {

        let { topicId } = useParams();

        if (topicId === "project") {
            return (<ProjectSettings exact />)
        }

        if (topicId === "azure") {
            return (<Azure />)
        }

        if (topicId === "certificate") {
            return (<Certificate />)
        }
        if (topicId === "messages") {
            return (<Messages />)
        }
        if (topicId === "static") {
            return (<Statistic />)
        }
        if (topicId === "logs") {
            return (<Logs />)
        }

    }
}



export default Sidebar