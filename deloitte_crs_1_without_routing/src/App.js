import React from 'react';
import axios from 'axios';
import './App.css'
import Employee from './components/Employee/Employee'
import InputFind from './components/InputFind/InputFind';
import ListEmployee from './components/ListEmployees/ListEmployee';

export const ContainerContext = React.createContext();


export default class App extends React.Component{

    state = {
        employees: [],
        listEmployees: [],
        curr: '',
        title: 'LOOKING FOR AN EMPLOYEE ?'
    }

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

// -----------------------------------------------------------

    onFocusHandler = e => {
        this.setState({...this.state, listEmployees: this.state.employees})
    }


    onChangeHandler = e => {

        const subStr = e.target.value;
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
        // const emloyee = this.state.employees[1];
        // this.setState({...this.state, listEmployees:[]})
        alert()
    }

// =============================================

    render(){
        return (
            <div style={{width:'700px',margin:'0 auto', padding:'15px'}}>
                
                <ContainerContext.Provider
                    value={{
                        ...this.state,
                        onChangeHandler: this.onChangeHandler,
                        onClickHandler: this.onClickHandler,
                        onFocusHandler: this.onFocusHandler
                    }}
                >
                    <InputFind />
                    <ListEmployee />
                    <Employee />
                    
                </ContainerContext.Provider>
            </div>
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

