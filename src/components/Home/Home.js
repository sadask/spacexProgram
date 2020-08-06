import React, { useEffect, useState } from 'react';
import axios from "axios";
import './Home.css';
import { MAIN_URL } from "../../constants/index"

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";


function getLaunchYears() {
    let yearArr = [];
    for (let year = 2006; year <= 2020; year++) {
        yearArr.push(year);
    }
    return yearArr;
}

function App() {
    const [spaceXdata, setSpaceXdata] = useState([]);
    const [launchYears, setLaunchYears] = useState(getLaunchYears);
    const [launchedYear, setLaunchedYear] = useState('');
    const [successLaunch, setSuccessLaunch] = useState('');
    const [successLanding, setSuccessLanding] = useState('');
    let specePgm;

    useEffect(() => {
        async function getSpacexProgrmData() {
            try {
                const response = await axios.get(MAIN_URL);
                setSpaceXdata(response.data);
            } catch (err) {
                // console.log(err);
                setSpaceXdata([])
            }
        }
        getSpacexProgrmData();
    }, []);


    const handleLaunch = (key, value) => {
        setSuccessLaunch(value);
        handleFilter(key, value === 2 ? true : false);
    }

    const handleLanding = (key, value) => {
        setSuccessLanding(value);
        handleFilter(key, value === 2 ? true : false);
    }

    const handleLaunchedYear = (key, value) => {
        setLaunchedYear(value);
        handleFilter(key, value);
    }

    const handleFilter = async (key, value) => {
        let url = MAIN_URL;
        url = `${MAIN_URL}&${key}=${value}`;


        if (launchedYear !== '' && key !== 'launch_year') {
            url = `${url}&launch_year=${launchedYear}`;
        }

        if (successLaunch !== '' && key !== 'launch_success') {
            url = `${url}&launch_success=${successLaunch === 2 ? true : false}`;
        }

        if (successLanding !== '' && key !== 'land_success') {
            url = `${url}&land_success=${successLanding === 2 ? true : false}`;
        }

        console.log(url);

        try {
            const response = await axios.get(url);
            setSpaceXdata(response.data);
            // console.log(response);
        } catch (err) {
            console.log(err);
            setSpaceXdata([])
        }
    }


    specePgm = spaceXdata.map((item, i) => {
        return (<div className="col-s-4 col-2 spacexDiv">
            <p><img className="imgBg" src={item.links.mission_patch_small} height={'auto'} width={'100%'} /></p>
            <p><a href="#">{`${item.mission_name} #${i + 1}`} </a></p>
            <p><strong>Mission Ids</strong>: {item.mission_id.length ? <ul> {item.mission_id.map((val) => <li className="value" key={val}>{val}</li>)} </ul> : <span className="value">none</span>} </p>

            <p><strong>Launh Year</strong>: <span className="value">{item.launch_year}</span> </p>
            <p><strong>Successful Launch</strong>: <span className="value">{item.launch_success ? 'Yes' : 'No'}</span></p>
            <p><strong>Successful Landing</strong>: <span className="value">{item.land_success ? "Yes" : "No"}</span></p>
        </div>)
    })

    return (
        <div className="component-home container">
            
            <div class="row">
                <header className="component-home--header header">
                    <Header />
                </header>
            </div>

            <div class="row">
                <div className="col-s-4 col-2">
                    <aside class="component-home--sidebar sidebar">
                        <Sidebar
                            launchYears={launchYears}
                            launchedYear={launchedYear}
                            setLaunchedYear={setLaunchedYear}
                            successLaunch={successLaunch}
                            successLanding={successLanding}
                            handleFilter={handleFilter}
                            handleLaunchedYear={handleLaunchedYear}
                            handleLaunch={handleLaunch}
                            handleLanding={handleLanding}
                        />
                    </aside>
                </div>

                <div className="col-s-8 col-10">
                    <main class="component-home--content content">
                        {specePgm}
                    </main>
                </div>

            </div>

            <div className="row footer">
                <p>Developed by <strong>Sadanand</strong></p>
            </div>
        </div>
    );
}

export default App;
