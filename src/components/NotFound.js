import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {



    return (
        <div style={{ height: "100vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <h1>404 PAGE NOT FOUND</h1>
            <h2><Link to="/">Go back</Link></h2>
        </div>
    )

}

export default NotFound