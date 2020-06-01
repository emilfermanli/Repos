import React, { useEffect } from 'react'
import Header from "./components/Header"
import Projects from './components/Project/Projects'
import { Switch, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Account from './components/Account/Account'
import Billing from './components/Billing/Billing'
import Sidebar from './components/Sidebar/Sidebar'
import NewProject from "./components/Project/NewProject"
import NotFound from "./components/NotFound"
import { getData } from "./redux/actions/userAction"
import { connect } from "react-redux";
import Announcement from 'react-announcement'
import logo from "./assets/img/male.png"



function App(props) {

    useEffect(() => {
        props.getData()
    }, [props])

    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Projects />
                </Route>
                <Route path="/billing">
                    <Billing />
                </Route>
                <Route path="/account">
                    <Account />
                </Route>
                <Route path="/project">
                    <Sidebar />
                </Route>
                <Route path="/projectItm">
                    <Projects />
                </Route>
                <Route path="/newproject">
                    <NewProject />
                </Route>
                <Route component={NotFound} />
            </Switch>
            <Announcement
                title="Premium paket"
                subtitle="Premium paket üçün hesabınzı yüksəldin"
                link="/billing"
                imageSource={logo}
                secondsBeforeBannerShows={3}
                daysToLive={1}
            />
            <Footer />
        </div>
    )
}


const mapDispatchToProps = {
    getData,
}


export default connect(null, mapDispatchToProps)(App)
