import React from 'react';


const Sidebar=() =>{
    const {team1, team2} = props;

    return(
        <>
        <div className="col-4">
            <h3>Sidebar</h3>
            <h4>Team 1 - {team1}</h4>
            <h4>Team 2 - {team2}</h4>
        </div>
    </>

    )
}
export default Sidebar;