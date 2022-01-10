import Geo from "./Geo";
import '../styles/Style.css';

export default function Address({address: {street, suite, city, zipcode, geo}}) {
    return (
        <div>
            <div className='address-block'>
                <div>Street: {street}</div>
                <div>Suite: {suite}</div>
                <div>City: {city}</div>
                <div>Zip code: {zipcode}</div>
                <div>Geo:
                    {
                        <Geo geo={geo}/>
                    }
                </div>
            </div>
        </div>
    );
}