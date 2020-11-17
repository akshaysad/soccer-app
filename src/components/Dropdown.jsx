import React from 'react';

class Dropdown extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    populateQuantity = () => {
        let sel = [];
        for (var i = 1; i < this.props.max + 1; i++)
        {
            sel.push(
                <option key={i} value={i}>{i}</option>
            );
        }
        return sel;
    }

    render()
    {
        return (
            <select id={this.props.id} name={this.props.name}>
                <option value="0">0</option>
                {this.populateQuantity()}
            </select>
        );
    }
}

export { Dropdown };
