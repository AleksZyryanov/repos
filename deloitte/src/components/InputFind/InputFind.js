import React from 'react';
import { Link } from 'react-router-dom';
import withContext from "../../context/withContext";
import './InputFind.modules.css';
 

const InputFind = (context) => {
    return (
        <div className='InputFind'>
        <h1>{context.context.title}</h1>
        <p id='hint'>Click on the search bar to learn our suggestions</p>
        <Link to="/pageFind">
            <input
               type = "text"
               placeholder='Search'
               value = {context.context.curr}
               onChange = {context.context.onChangeHandler}
               onFocus={context.context.onFocusHandler} />
        </Link>
                <Link to="/pageResultFind"><button onClick = {context.context.onClickHandler}></button></Link>
        </ div>
    );
}

export default withContext(InputFind);