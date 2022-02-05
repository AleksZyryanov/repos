import React from 'react';
import './ListEmployees.modules.css';

import {ContainerContext} from '../../App';

export default () => {
    return (
        <ContainerContext.Consumer>
            {
                context => {
                    return (
                        <div>
                            <ul style ={{listStyle:'none', }}>
                                    {context.listEmployees.map((employee) => <li key={employee.id}>
                                        <img src={employee.imageUrl} alt='./img/temp.png'/>
                                        <div id = 'workAndName'>{employee.name} {employee.workTitle}</div>
                                        </li>)}
                            </ul>
                        </div>
                    );
                }
            }
        </ContainerContext.Consumer>
        
    );
}
