import React from 'react';

class PageTitle extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div className="title">
                <h3>{this.props.title}</h3>
            </div>
        );
    }
}

export default PageTitle;
