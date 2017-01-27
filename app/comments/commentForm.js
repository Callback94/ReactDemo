import React from 'react';
import '../style/comments.css'
import { Form, Input, Button} from 'antd';

class CommentForm extends React.Component {

    handleSubmit(event){
        event.preventDefault();
        console.log('hi')
    }
    render() {
        return (
            <div>
            <Form className="ant-form-item">
                <div className="field">
                    <Input type="text" placeholder="姓名"/>

                </div>
                <div>
                    <Input type="textarea" id="" cols="30" rows="10" placeholder="评论" className="-file-text"/>
                </div>
                <Button type='submit'className="ant-btn" onSubmit={this.handleSubmit}>
                    添加评论
                </Button>
            </Form>
            </div>
        );
    }
}
export {CommentForm as default}