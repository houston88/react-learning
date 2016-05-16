import React from 'react';

class Comment extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p><span>{this.props.author}: </span>{this.props.text}</p>
        );
    }

}

export default Comment;