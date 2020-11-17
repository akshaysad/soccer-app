import React from 'react';
import loadable from 'react-loadable';
import { history } from '@/helpers';

class DefaultPage extends React.Component
{
    componentDidMount()
    {
            history.push('/sign-up');
    }
    render()
    {
        return (
            <div>
                <div className="holder">
                </div>
            </div>
        );
    }

}

export default DefaultPage;
