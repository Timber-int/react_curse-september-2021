import {useEffect, useState} from "react";
import {getMissionInfo} from "../service/api.service";
import SpaceXComponent from "./SpaceXComponent";
import "../components/styles/Style.css";

const SpaceX = () => {

    const [mission, setMission] = useState([]);

    useEffect(() => {
        getMissionInfo().then(value => setMission([...value.data]));
    }, [mission]);

    return (
        <div>
            <div className="mission-container">
                {
                    mission
                        .filter(mission => mission.launch_year !== 2020)
                        .map(mission =>
                            <SpaceXComponent key={mission.launch_date_local + mission.flight_number}  mission={mission}/>
                        )
                }
            </div>
        </div>
    );
}

export default SpaceX;