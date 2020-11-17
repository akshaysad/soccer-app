import React, { Component } from 'react';
import { PrivateRoute } from '@/components/access';

import loadable from 'react-loadable';
import "react-datepicker/dist/react-datepicker.css";
import { AgentPages } from '@/roles/routes/';
import { Route } from 'react-router-dom';

class Content extends Component
{
	render()
    {
        const DefaultPage = loadable({
            loader: () => import('@/pages/default/DefaultPage'),
            loading: () => <div></div>
        });

        // const roles = LoginApi.getRoles();

        return(
        	<div id="content" className="content trans-all">
                <Route exact path="/" component={DefaultPage} />
                <AgentPages/>
            </div>
        )
    }
}

export default Content;




