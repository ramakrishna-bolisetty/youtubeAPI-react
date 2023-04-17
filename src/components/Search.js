

import React from 'react';
import './Search.css'

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.handler = this.handler.bind(this);
        this.state = { data: '' };
    }

    handler() {
        const value = document.getElementById('search-val').value;
        this.props.fetchData(value);
    }

    render() {
        return (
            <div className = 'search'>
                <input type = 'text' id='search-val' style = {{ width: '850px', height: '50px', backgroundColor: 'white' }}></input>
                <div>
                    <button className = 'search-btn' onClick = {this.handler}>Search</button>
                </div>
            </div>


        )
    }


}

export { Search };