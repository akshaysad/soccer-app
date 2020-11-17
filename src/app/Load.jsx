import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import { history } from '@/helpers';
import loadable from 'react-loadable';
import { Provider } from 'react-redux';
import store from '@/js/store/index';
class Load extends Component
{
    componentDidMount()
    {
        // if(!LoginApi.validateToken()) {
        //     history.push('/sign-up');
        // }
    }

    render()
    {
        const Navigation = loadable({
            loader: () => import('@/app/Navigation'),
            loading: () => <div></div>
        });

        const ApiLoader = loadable({
            loader: () => import('@/components/ApiLoader'),
            loading: () => <div></div>
        });

        const Content = loadable({
            loader: () => import('@/app/Content'),
            loading: () => <div></div>
        });

        const MainLoader = () => <div className="pos-rel load-wrap"><div className="loadingBox"><ul><li></li><li></li></ul></div></div>;
        
        const SignUp = loadable({
            loader: () => import('@/pages/sign-up/SignUp'),
            loading: MainLoader
        });


        const Notification = loadable({
            loader: () => import('@/components/Notification'),
            loading: () => <div></div>
        });

        return (
            <Provider store={store}>
                <Router history={history}>
                    {/*<MenuButton/>*/}
                    <Route path="/sign-up" component={SignUp} />
                    <Notification/>
                    <ApiLoader/>
                        <div>
                            <Navigation/>
                            <Content/>
                        </div>
                </Router>
            </Provider>
        );
    }
}

export { Load }; 
