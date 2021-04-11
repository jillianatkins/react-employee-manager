import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

import Logo from './../components/icons/Logo'

const HomePageStyles = styled.header `
  text-align: center;
  margin: 6rem auto 0;

  svg{
    width: 80px;
  }
  h1{
    font-size: 2.25rem;
    margin-bottom: 0.5rem;
  }
  p{
    color: #767484;
  }

`

const LinkStyles = styled.div `
    ul{
        display: flex;
        justify-content:center;
        align-items: center;
        padding: 1rem;
        height: 80px;
    }
    li{
        margin: 0 1rem;
        
    }
    a{
        text-decoration: none;
        color:white;
        background-color: #fc6107;
        padding: 1rem;
        border-radius: 0.5rem;
    }
`
    
const HomePage = (props) => {
    return (
        <HomePageStyles>
          <Logo/>
          <h1>Employee Manager</h1>
          <p>focus on people and we'll focus on the paperwork</p>
          <LinkStyles>
          <div>
            <ul>
              <li><Link to="/login">login</Link></li>
              <li><Link to="/register">register</Link></li>
            </ul>
          </div>
          </LinkStyles>
        </HomePageStyles>
      );
}
 
export default HomePage;