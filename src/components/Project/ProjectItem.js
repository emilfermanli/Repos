import React from 'react'


function ProjectItem(props) {
    return (
        <div style={{ width: "35%" }} className="d-flex justify-content-between">
            <div className="mr-5">
                <span>
                    {props.project_name}
                </span>
            </div>
            <div>
                <div>
                    {props.plan}
                </div>
            </div>
        </div>
    )
}



export default ProjectItem
