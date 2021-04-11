// imr (short cut)
import React, { useState } from 'react';
import styled from 'styled-components'
import {Redirect} from 'react-router-dom';

import FormInput from './../components/forms/FormInput'
import Button from './../components/buttons/Button'
import firebaseApp from 'firebase/firebaseConfig';

const RegisterPageStyles = styled.aside`
    width: 480px;
    margin: 6rem auto 0;

    header{
        text-align: center;
        margin-bottom: 3rem;
    }
    h2{
        font-size: 2rem;
        font-weight: 700;
    }
    .create-account{
        margin-top: 1rem;
    }
    
`


//sfc (short cut)
const RegisterPage = (props) => {
    const [fullName, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isValid, setIsValid] = useState(false)

    const handleClick = (e) => {
        if (fullName === '' || email === '' || password === '') {
            setIsValid(false)
            
        }
        else {
            firebaseApp.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    setIsValid(true)

                })
                .catch((error) => {
                    //Catch errors
                })
        }
    }

    // Conditional Rendering
    if(isValid){
        return <Redirect to="/login" />
    }
    else{
        return (
            <RegisterPageStyles>
                <header>
                    <h2>Unlimited Free Trial Sign Up</h2>
                    <p>no credit card required</p>
                </header>
                <FormInput label="name on the account" type="text" onChange={(e)=> setName(e.target.value.trim())}></FormInput>
                <FormInput label="valid email address" type="email" onChange={(e)=> setEmail(e.target.value.trim())}></FormInput>
                <FormInput label="password (min. 6 characters)" type="text" onChange={(e)=> setPassword(e.target.value.trim())}></FormInput>
                <Button className="create-account" uiStyle="signup" label="create a free account" onClick={handleClick}/>
            </RegisterPageStyles>
        );
    }
}

export default RegisterPage;