import React from 'react';
import '../style/comments.css';

import Comments from './comments'

class CommentList extends React.Component {
    render() {
        return (
            <div className="commentslist">

                <Comments author="CB" time="5mins ago" comments="起来嗨！"/>
                <Comments author="CB" time="5mins ago" comments="出来玩！"/>

            </div>
        );
    }
}
export {CommentList as default}