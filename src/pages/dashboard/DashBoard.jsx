import React, {useContext} from 'react';
import styled from 'styled-components'
import { Redirect, Link, useRouteMatch, Switch, Route } from 'react-router-dom';

import AuthContext from './../../auth/AuthContext'
import ViewAllPanel from './panels/ViewAllPanel'
import EditPanel from './panels/EditPanel'
import DeletePanel from './panels/DeletePanel'
import AddPanel from './panels/AddPanel'

const DashBoardStyles = styled.section `
    display: flex;
    
`

const SideBar = styled.aside `
    width:256px;
    box-shadow: 0 0 5px 1px grey;
    height: calc(100vh - 64px);
    position: relative;
    z-index: 1;
    padding: 1rem;
    h1{
        font-size: 1rem;
    }
    p{
        margin-bottom: 1rem;
        color: grey;
    }
    a{
        text-decoration: none;
        font-size: 14px;
    }
`

const Panels = styled.section `
    width: calc(100% - 259px);
    height: calc(100vh - 64px);
    background-color: #f4f4f4;
`

const Dashboard = (props) => {
    // access the authContext
    const auth = useContext(AuthContext)
    const {path, url} = useRouteMatch()


    if(auth.isUser){
        return(
        <DashBoardStyles>
            <SideBar>
                <header>
                    <h1>Firebase Whats App</h1>
                    <p>firebase who knew</p>
                </header>
                <ul>
                    <li><Link to={`${url}`}>View All</Link> </li>
                    <li><Link to={`${url}/add`}>Add Content</Link> </li>
                    <li><Link to={`${url}/edit`}>Edit Content</Link> </li>
                    <li><Link to={`${url}/delete`}>Remove Content</Link> </li>
                </ul>
            </SideBar>
            <Panels>
                <Switch>
                    <Route exact path={path}><ViewAllPanel/></Route>
                    <Route path={`${path}/add`}><AddPanel/></Route>
                    <Route path={`${path}/edit`}><EditPanel/></Route>
                    <Route path={`${path}/delete`}><DeletePanel/></Route>
                </Switch>
            </Panels>
        </DashBoardStyles>)
    }else{
        return <Redirect to="/login"/>
    }
}

export default Dashboard;