import React from 'react';

const Form = ({onFormSubmit,formHandler,form}) => {
    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <label>Name:<input
                    type="text"
                    onChange={formHandler}
                    value={form.name}
                    name={"name"}/>
                </label>
                <label>Username:<input
                    type="text"
                    onChange={formHandler}
                    value={form.userName}
                    name={"userName"}/>
                </label>
                <label>Email:<input
                    type="text"
                    onChange={formHandler}
                    value={form.email}
                    name={"email"}/>
                </label>
                <input type="submit" value="Find"/>
            </form>
        </div>
    );
};

export default Form;