import React from 'react';
import Appbar from './appbar';
import { Body } from './body';

export const Layout = ({children}) => {
    return (
        <div>
            <Appbar></Appbar>
           <Body>{children}</Body>
        </div>
    );
}


