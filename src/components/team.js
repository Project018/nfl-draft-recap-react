import React from "react"

const Team = (props) => {
    const teamInfo = props.teamInfo 
    return (
        teamInfo.map(({id, name, subName}) => (
            <li className={subName} key={id}>
                {name}
            </li>
        ))
    )
}

export default Team