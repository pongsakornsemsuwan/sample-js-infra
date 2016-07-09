import React from 'react';

export default class User extends React.Component {
    static get NAME() {
        return 'User';
    }

    static get contextTypes() {
        return {
            data: React.PropTypes.object
        };
    }

    constructor(props, context) {
        super(props, context);
        this.state = context.data[User.NAME] || {};
    }

    render() {
        return (
            <main className="app-content user">
                <span> username : {this.state.username}</span>
                {this.props.children}
            </main>
        );
    }

    componentDidMount() {
        console.log('did mount');

    }
}
