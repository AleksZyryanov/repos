import React from 'react';
import withContext from "../../context/withContext";
import './ListEmployees.modules.css';


const ListEmployee = (context) => {
    return (
                        <div className='findList'>
                            <ul style ={{listStyle:'none'}}>
                                    {context.context.listEmployees.map((employee) => <li key={employee.id}>
                                        <img src={employee.imageUrl} alt='./img/temp.png'/>
                                        {employee.name} {employee.workTitle}
                                        </li>)}
                            </ul>
                        </div>
        
    );
}

export default withContext(ListEmployee);