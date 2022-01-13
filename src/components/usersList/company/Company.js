import "./Company.css";


export default function Company({company: {name, catchPhrase, bs}}) {
    return (
        <div>
            <div className="company-block">
                <div>Name: {name}</div>
                <div>Catch phrase: {catchPhrase}</div>
                <div>Bs: {bs}</div>
            </div>
        </div>
    );
}