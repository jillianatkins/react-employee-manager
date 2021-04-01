// imr (short cut)
import React from 'react';
import styled from 'styled-components' 

import FormInput from './../components/forms/FormInput'
import Button from './../components/buttons/Button'

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
    return (
        <RegisterPageStyles>
            <header>
                <h2>Unlimited Free Trial Sign Up</h2>
                <p>no credit card required</p>
            </header>
            <FormInput label="name on the account" type="text"></FormInput>
            <FormInput label="valid email address" type="email"></FormInput>
            <FormInput label="password (min. 6 characters)" type="text"></FormInput>
            <Button className="create-account" uiStyle="signup" label="create a free account"/>
        </RegisterPageStyles>
      );
}
 
export default RegisterPage;