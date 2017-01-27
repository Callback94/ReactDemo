import React from 'react';

export default class Comments extends React.Component {

    render(){
        return(
            <div>
                <div className="author">{this.props.author}
                    <span>{this.props.time}</span>
                </div>
                <div className="content">{this.props.comments}</div>
            </div>
        )
    }

}

