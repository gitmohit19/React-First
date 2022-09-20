import React from "react";

const Sidebar = (props) => {
    const team1='India';
    const team2='Pakistan';
    return (
        <>
        <div className="col-4">
            <Sidebar team1={team1} team2={team2}/>
        </div>
    </>
    )
}

export default Sidebar;