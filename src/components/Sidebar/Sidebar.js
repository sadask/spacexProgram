import React from 'react';
import './Sidebar.css';

function Sidebar(props) {

    // console.log(props, "PROPS");

    let yearBtn = props.launchYears.map((val, i) => <button onClick={() => props.handleLaunchedYear('launch_year', val)} className={ val === props.launchedYear ? "selectedBtn" : "normalBtn"} key={i}>{val}</button>)
    return (
        <div className="component-sidebar">
            <h4><strong>Filters</strong></h4>
            <div className="component-sidebar-filter">
                <p><strong><u>Launch Year</u></strong></p>
                {yearBtn}
            </div>

            <div className="component-sidebar-filter">
                <p><strong><u>Successful Launch</u></strong></p>
                <button onClick={() => props.handleLaunch('launch_success', 2)} className= {props.successLaunch === 2 ? "selectedBtn" : "normalBtn"}> True </button> <button onClick={()=> props.handleLaunch('launch_success', 1)} className= {props.successLaunch === 1 ? "selectedBtn" : "normalBtn"}> False </button>
            </div>

            <div className="component-sidebar-filter">
                <p><strong><u>Successful Landing</u></strong></p>
                <button onClick={() => props.handleLanding('land_success', 2)} className= {props.successLanding === 2 ? "selectedBtn" : "normalBtn"}> True </button> <button onClick={() => props.handleLanding('land_success', 1)} className= {props.successLanding === 1 ? "selectedBtn" : "normalBtn"}> False </button>
            </div>
        </div>
    );
}

export default Sidebar;
