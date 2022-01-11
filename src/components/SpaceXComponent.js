import "../components/styles/Style.css";

const SpaceXComponent = ({mission: {mission_name, launch_year, links: {mission_patch_small}}}) => {

    return (
            <div className="mission-box">
                <div className="mission-exercise">
                    <div>Mission name: {mission_name}</div>
                    <div>Year: {launch_year}</div>
                </div>
                <div className="mission-logo">
                    <img src={mission_patch_small} alt={mission_name}/>
                </div>
            </div>
    );
}

export default SpaceXComponent;