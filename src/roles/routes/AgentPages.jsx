import React from 'react';
import { PrivateRoute } from '@/components/access';
import loadable from 'react-loadable';
import { history } from '@/helpers';

class AgentPages extends React.Component {
    componentWillMount() {
        let params = (new URL(document.location)).searchParams;
        if ([
            "/sign-up",
            "/",
            ""
        ].includes(location.pathname) == false) {
            history.push('/404');
        }
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export { AgentPages };
