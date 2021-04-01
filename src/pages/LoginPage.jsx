import React from 'react';
import styled from 'styled-components'

//import using a relative path
import FormInput from './../components/forms/FormInput'
// import using an absolute file path (jsconfig.json file)
import Button from 'components/buttons/Button'

const LoginPageStyles = styled.aside`
    max-width: 380px;
    margin: 6rem auto 0;

    header{
        text-align: center;
        margin-bottom: 3rem;
    }
    h1{
        font-size: 2.25rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }
    
`


const LoginPage = (props) => {
    return (
        <LoginPageStyles>
            <header>
                <h1>Login Page</h1>
                <p>login for access to the dashboard</p>
            </header>
            <FormInput label="email" type="email"/>
            <FormInput label="password" type="text"/>
            <Button label="login" uiStyle="login"/>
        </LoginPageStyles>
    );
}

export default LoginPage;