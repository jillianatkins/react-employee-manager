import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import {Redirect} from 'react-router-dom';

import firebaseApp from './../firebase/firebaseConfig'
import AuthContext from './../auth/AuthContext'

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
    const auth = useContext(AuthContext)
    // email is the variable, setEmail is the function
    // can be named whatever you like
    // anything in the brackets is the initial value
    const [email, setEmail] = useState('jill@hello.com')
    const [password, setPassword] = useState('password')
    const [isValid, setIsValid] = useState(false)
    
    //console.log('render')
    //console.log(auth)

    const handleClick = (e) =>{
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
        
        //return promise
        .then(userCredential=>{
            // send email and password from input fields
            //console.log(userCredential)
            auth.isUser = true
            setIsValid(true)
        })

        //catch errors (rejects)
        //return error code & error message
        .catch(error=>{
            console.log(error.code)
            console.log(error.message)
        })
    }

    //conditional rendering
    if(isValid){
        return <Redirect to="/dashboard" />
    }
    else{
        return (
            <LoginPageStyles>
                <header>
                    <h1>Login Page</h1>
                    <p>login for access to the dashboard</p>
                </header>
                <FormInput label="email" type="email" onChange={(e)=> setEmail(e.target.value.trim())}/>
                <FormInput label="password" type="text" onChange={(e)=> setPassword(e.target.value.trim())}/>
                <Button label="login" uiStyle="login" onClick={handleClick}/>
            </LoginPageStyles> 
        );
    }
}

export default LoginPage;