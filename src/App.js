import Form from "./components/form/Form";
import Cars from "./components/cars/Cars";
import {useState} from "react";

function App() {
    const [car,setCar] = useState(null);

    const update=(data)=>{
        setCar(data)
    }
    return (
        <div className="App">
            <Form update={update}/>
            <Cars car={car}/>
        </div>
    );
}

export default App;
