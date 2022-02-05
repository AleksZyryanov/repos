import React from 'react';
import {AppContext} from './app-context';

export default Component => {

    // return props => {
    return () => {

        return (
            <AppContext.Consumer>
                {/* {context => <Component {...props} context={context}/>} */}
                {context => <Component context = {context}/>}
            </AppContext.Consumer>
        );
    }
}