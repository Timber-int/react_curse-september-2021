import React, {useState} from 'react';

import {Users} from './users';

const UsersBasFilter = () => {

    const [query, setQuery] = useState('');

    return (
        <div>
            <input type="text" className="search" placeholder={'Search...'} onChange={e => setQuery(e.target.value)}/>
            <ul className='list'>
                {Users.filter(user=>user.first_name.toLowerCase().includes(query.toLowerCase())).map(user => (
                    <li key={user.id} className='listItem'>{user.first_name}</li>
                ))}
            </ul>
        </div>
    );
};

export {UsersBasFilter};