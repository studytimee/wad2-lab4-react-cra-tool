import React from "react"
import Module from "./module";

const Course = (props) => {
    const tData = props.modules.map((module, index) => (
        <Module key={index} description={module} />
    )
    )
    return (
        <>
            <h2>{`${props.course} module table`}</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>No lectures</th>
                        <th>No practicals</th>
                    </tr>
                </thead>
                <tbody>{tData}</tbody>
            </table>
        </>
    );
}
export default Course;