import React from 'react';
import './InputFind.modules.css';
 
import {ContainerContext} from '../../App';

export default () => {
    return (
        <ContainerContext.Consumer>
            {
                context => {
                    return(
                    <div className='InputFind'>
                    <h1>{context.title}</h1>
                    <p id='hint'>Click on the search bar to learn our suggestions</p>
               <input
               type = "text"
               placeholder='Search'
               value = {context.curr}
               onChange = {context.onChangeHandler}
               onFocus={context.onFocusHandler} />
               <button
               href="/pageFind" 
               onClick = {context.onClickHandler}>
               </button>
               </ div>
                    )
                }
            }
        </ContainerContext.Consumer>
    );
}