import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from '../pages/Home/';

function Routes () {
    return(
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
    );
};

export default Routes;