import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => 
{
    return { loader: state.loader };
};

const ApiLoaderComponent = ({ loader }) => (
    <div>
        { loader.show &&
            <div id="topLoader">
                <div className="inner">
                </div>
            </div>
        }
    </div>
);

const ApiLoader = connect(mapStateToProps)(ApiLoaderComponent);

export default ApiLoader;

