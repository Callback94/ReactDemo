import React from 'react';
import '../style/comments.css';

import CommentList from './commentList'
import CommentForm from './commentForm'

class CommentBox extends React.Component {
    render() {
        return (
            <div className="comments">
                <h1>评论</h1>
                <hr/>
                <div className="list -divider">
                    <CommentList/>
                    <CommentForm/>

                </div>
            </div>
        );
    }
}
export {CommentBox as default}