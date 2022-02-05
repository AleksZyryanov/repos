import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css'
import withContext from './context/withContext.js';
import Employee from './components/Employee/Employee'
import InputFind from './components/InputFind/InputFind';
import ListEmployee from './components/ListEmployees/ListEmployee';

function App (){

        return (
            <div style={{width:'700px',margin:'0 auto', padding:'15px'}}>
                    <InputFind />
                    {/* <ListEmployee /> */}

                    <Switch>
                    <Route path="/pageFind" component={ListEmployee}/>
                    <Route path="/pageResultFind" component={Employee}/>
                    {/* <Route path="/" component={<ListEmployee />}/> */}
                    </Switch>

            </div>
        );
    }

    export default withContext(App);