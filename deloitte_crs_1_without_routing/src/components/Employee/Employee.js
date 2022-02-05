import React from 'react';
import {ContainerContext} from '../../App';

export default () => {
    return(
        <ContainerContext.Consumer>
            {
                context => {
                    return (
                        <div>
                        </div>
                    );
                }
            }
        </ContainerContext.Consumer>
    )
}