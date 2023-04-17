

import React from 'react';
import { Search } from './Search.js';
import { DisplayVideos } from './DisplayVideos.js';
import { URL } from './config.js';
import './Header.css';

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = { data: '' }
        this.handler = this.handler.bind(this);
    }
    handler(value) {
        const url = URL + value;
        fetch(url)
            .then( res => res.json())
            .then(jsonData => {
                this.setState({ data: jsonData });
                console.log(jsonData);

            });

    }
    render() {
        return (
            <div >
                <div className = 'header'>
                    <Search fetchData = {this.handler} />
                </div>
                {this.state.data !== '' && <DisplayVideos data = {this.state.data} />}

            </div>
        )
    }


}

export { Header }