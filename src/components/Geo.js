import '../components/styles/Style.css';

export default function Geo({geo: {lat, lng}}) {
    return (
        <div>
            <div className="geo-block">
                <div>Lat: {lat}</div>
                <div>Lng: {lng}</div>
            </div>
        </div>
    );
}