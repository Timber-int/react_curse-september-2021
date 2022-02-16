import React, {useEffect, useState} from 'react';

import './Form.css';

const Form = () => {

    const initialValues = {username: '', email: '', password: ''};

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        }
    }, []);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = 'Username is required';
        }
        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!regex.test(values.email)) {
            errors.email = 'Email is not valid';
        }
        if (!values.password) {
            errors.password = 'Password is required';
        } else if (values.password.length < 4) {
            errors.password = 'Password must be more then 4 characters';
        } else if (values.password.length > 10) {
            errors.password = 'Password cannot exceed more then 10 characters';
        }
        return errors;
    }

    return (
        <div className='container'>
            {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className='ui message success'>Signed is successfully</div>
            ) : (<pre>{JSON.stringify(formValues, undefined, 2)}</pre>)}

            <form onSubmit={handleSubmit}>
                <h1>Login Form</h1>
                <div className='ui form'>
                    <div className='field'>
                        <label>Username</label>
                        <input type="text"
                               name={'username'}
                               placeholder='username'
                               value={formValues.username}
                               onChange={handleChange}
                        />
                    </div>
                    <p>{formErrors.username}</p>
                    <div className='field'>
                        <label>Email</label>
                        <input type="email"
                               name={'email'}
                               placeholder='email'
                               value={formValues.email}
                               onChange={handleChange}
                        />
                    </div>
                    <p>{formErrors.email}</p>
                    <div className='field'>
                        <label>Password</label>
                        <input type="password"
                               name={'password'}
                               placeholder='password'
                               value={formValues.password}
                               onChange={handleChange}
                        />
                    </div>
                    <p>{formErrors.password}</p>
                    <button className='fluid ui button blue'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export {Form};