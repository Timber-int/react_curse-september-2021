import './styles/Simpson.css';

export default function Simpson({simpson: {name, surname, age, info, photo}}) {
    return (
            <div className="simpson-box">
                <div>Name: {name}</div>
                <div>Surname: {surname}</div>
                <div>Age: {age}</div>
                <div>Info: {info}</div>
                <img src={photo} alt={name}/>
            </div>
    );
}