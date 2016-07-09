import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';

export default class News extends React.Component {
    static get NAME() {
        return 'News';
    }

    static get contextTypes() {
        return {
            data: React.PropTypes.object
        };
    }

    constructor(props, context) {
        super(props, context);
        this.state = context.data[News.NAME] || {};
        console.log('this.state');
        console.log(this.state);
    }

    static requestData(params, domain = '') {
        return axios.get(`${domain}/api/news/`);
    }

    render() {
        return (
            <main className="app-content news">
                <span> News : {this.state.name} {this.state.content} abc</span>
                <Link className="link" to="/user">
                    User &#187;
                </Link>
                {this.props.children}
            </main>
        );
    }

    componentDidMount() {
        console.log('did mount');
        this.constructor.requestData().then((response) => {
            this.setState(response.data);
        }).catch((err) => {
            throw new Error(err);
        });
    }
}
