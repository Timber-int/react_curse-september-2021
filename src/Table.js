import React from 'react';

const Table = ({data}) => {
    return (
        <table>
            <tbody>
            <tr>
                <th>Name</th>
                <th>Last name</th>
                <th>Email</th>
            </tr>
            {
                data.map(item=>(
                    <tr key={item.id}>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                        <td></td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    );
};

export {Table};