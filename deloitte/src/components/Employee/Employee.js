import React from 'react';
import './Employee.modules.css';
import withContext from "../../context/withContext";

const Employee = (context) => {
    return(
        <div className='pageResultFind' style ={{listStyle:'none'}}>
                            {context.context.listEmployees.map((employee) => <li key={employee.id}>
                            <img src={employee.imageUrl} alt='./img/temp.png'/>
                            <div id = 'workAndName'>{employee.name} {employee.workTitle}</div>
                         </li>)}
        </div>
    )
}

export default withContext(Employee);