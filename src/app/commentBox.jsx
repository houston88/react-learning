import React from 'react';
import Comment from './comment.jsx';

class CommentBox extends React.Component {

    constructor(props) {
        super(props);
        // form data, and fake data for list
        this.state = {
            author: "",
            text: "",
            data: [
                {"id": "1", "author": "Pete Hunt", "text": "This is one comment"},
                {"id": "2", "author": "Jordan Walke", "text": "This is *another* comment"}
            ]
        };
    }

    handleAuthorChange(e) {
        this.setState({author: e.target.value});
    }

    handleTextChange(e) {
        this.setState({text: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        var newComment = {
            author: this.state.author.trim(),
            text: this.state.text.trim(),
            id: Date.now()
        };
        if (!newComment.text || !newComment.author) {
            return;
        }
        // fake out services, just add to data
        this.setState({
                author: '',
                text: '',
                data: this.state.data.concat(newComment)
            }
        );
    }

    render() {

        var commentNodes = this.state.data.map(function(comment) {
            return (
                <li className="mdl-list__item">
                    <Comment author={comment.author} text={comment.text} key={comment.id}></Comment>
                </li>
            );
        });

        return (
            <div class="commentBox">
                <h3>Comments</h3>
                <ul className="mdl-list">
                    {commentNodes}
                </ul>
                <br/>

                {/* TODO: Move input form to separate component */}
                <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="mdl-grid">

                        <div className="mdl-cell mcdl-cell--4-col">
                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input
                                    id="name"
                                    className="mdl-textfield__input"
                                    type="text"
                                    value={this.state.author}
                                    onChange={this.handleAuthorChange.bind(this)}
                                    />
                                <label className="mdl-textfield__label" for="name">Name</label>
                            </div>
                        </div>
                        <div className="mdl-cell mdl-cell--4-col">
                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input
                                    id="comment"
                                    className="mdl-textfield__input"
                                    type="text"
                                    value={this.state.text}
                                    onChange={this.handleTextChange.bind(this)}
                                    />
                                <label className="mdl-textfield__label" for="comment">Name</label>
                            </div>
                        </div>
                        <div className="mdl-cell mdl-cell--12-col">
                            <input className="mdl-button mdl-js-button mdl-button--raised" type="submit" value="Post" />
                        </div>


                    </div>
                </form>

                <div style={{fontWeight:'bold',paddingTop:'10px'}}>Go bindings...</div>
                <div>Author: {this.state.author}</div>
                <div>Comment: {this.state.text}</div>


            </div>
        );
    }

}

export default CommentBox;