import React from 'react';
import axios from 'axios';

import {AppContext} from './app-context.js';

export default class AppContextProvider extends React.Component{
    state = {
        employees: [],
        listEmployees: [],
        curr: '',
        title: 'LOOKING FOR AN EMPLOYEE ?'
    }
    titleResult ='SEARCH RESULT';

    componentDidMount(){
        axios.get('https://api.github.com/users')
        .then( response =>{ 
            const employees = response.data;

        let employee = [...employees]
        for(let i = 0; i < employees.length; i++ ){
            let j = i;
            employee[j] = {
                id: employees[i].id, 
                name: employees[i].login + " " + employees[i].login, 
                workTitle: employees[i].type, 
                imageUrl: employees[i].avatar_url} 
        }

            this.setState({...this.state, employees:employee});
        })
    }

    onFocusHandler = () => {
        this.setState({...this.state, listEmployees: this.state.employees});
    }

    onChangeHandler = e => {

        let subStr = e.target.value;
        const lastSubStr = this.state.curr;

        this.setState({...this.state.curr = subStr});

        if(subStr.length > 1){

        let tempEmployees = [];
        let tempEmployee;

        for( let i = 0; i < this.state.employees.length; i++){
            const tmpName = selecting(this.state.employees[i].name, subStr);
            const tmpWorkTitle = selecting(this.state.employees[i].workTitle, subStr);

                if(tmpName.isFind || tmpWorkTitle.isFind){
                    tempEmployee = {
                        name: tmpName.res, 
                        workTitle: tmpWorkTitle.res, 
                        imageUrl: this.state.employees[i].imageUrl, 
                        id: this.state.employees[i].id
                    };
                    tempEmployees = [...tempEmployees, tempEmployee];
                }    
        }
        this.setState(({...this.state, listEmployees:tempEmployees}))
    }
    if(subStr.length < 2 && lastSubStr.length - subStr.length > 0){this.setState({...this.state, listEmployees: [...this.state.employees]})}
}

    onClickHandler = () => {
        this.setState({...this.state.curr = ""});
        this.setState({...this.state.title = this.titleResult});
    }

    render(){
        return (
            <AppContext.Provider value={{
                employee: this.state.employees,
                listEmployees: this.state.listEmployees,
                curr: this.state.curr,
                title: this.state.title, 
                onFocusHandler: this.onFocusHandler,
                onChangeHandler: this.onChangeHandler,
                onClickHandler: this.onClickHandler
            }}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

// =================================================
function selecting (str, subStr){
    const arr = str.split(" ");
    let index;
    let isFind = false;
    let res;

    for(let j = 0; j < arr.length; j++){
        let tempWord = arr[j].toUpperCase();
        index = tempWord.indexOf(subStr.toUpperCase());
        // if(tempWord.lastIndexOf(subStr.toUpperCase(), 0) === 0) {
        if(index === 0) {
            isFind = true;
            arr[j] = <><b>{arr[j].substring(0, subStr.length)}</b>{arr[j].substring(subStr.length)} </>;
            res = <>{res}{arr[j]}</>;
        } else if(index > 0) {
            isFind = true;
            arr[j] = <>{arr[j].substring(0, index)}<b>{arr[j].substring(index, index + subStr.length)}</b>{arr[j].substring(index + subStr.length)} </>;
            res = <>{res}{arr[j]}</>;
        } else {res = str};
    }
        return {res: res, isFind: isFind};
}
        // const temp = this.state.employees.filter(employee => employee.login.toUpperCase().indexOf(this.state.curr.toUpperCase()) > -1);