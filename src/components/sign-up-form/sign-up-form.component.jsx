import { useState } from 'react';
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import Button from '../button/button.component';


import FormInput from '../form-input/form-input.component';

import './sign-up-form.styles.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SigUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword} = formFields;

    const resetFormField = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword)
        {
            alert("Passwords do not match");
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName: displayName});
            resetFormField();

        } catch (error) {
            if(error.code === 'auth/email-already-in-use')
            {
                alert('Cannot create user, email already in use');
            } else {
                console.log(error);
            }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label={'Display Name'} required type="text" onChange={handleChange} name="displayName" value={displayName}></FormInput>

                <FormInput label={'Email'} type="email" required onChange={handleChange} name = "email" value={email}></FormInput>

                <FormInput label={'Password'} type="password" required onChange={handleChange} name = "password" value={password}></FormInput>

                <FormInput label={'Confirm Password'} type="password" required onChange={handleChange} name= "confirmPassword" value={confirmPassword}></FormInput>

                <Button buttonType={"google"} type="submit">Sign Up</Button>
            </form>

        </div>
    );
}


export default SigUpForm;