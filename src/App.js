import React, {useState} from 'react';

import './App.css';
import {Table} from './Table';
import {Users} from './users';

const App = () => {

    const [query, setQuery] = useState('');

    const search =(data)=>{
        return data.filter(user=>user.first_name.toLowerCase().includes(query.toLowerCase()));
    }

    return (
        <div>
            <input type="text" className="search" placeholder={'Search...'} onChange={e => setQuery(e.target.value)}/>
            <Table data={Users}/>
        </div>
    );
};

export {App};
