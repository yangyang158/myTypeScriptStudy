import * as React from "react";
import * as _ from "lodash";
import axios from 'axios';
import AddButton from "@component/button";
import { Input, Alert, Modal, Button, DatePicker, message, Form } from "antd";
const ButtonGroup = Button.Group;

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

export class Home extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }

    state = {
        visible: false,
        confirmDirty: false,
    };

    componentDidMount(){
        // 设置form字段的值
        this.props.form.setFieldsValue({
            password: '111'
        })
    }

    showModal = () => {
        this.setState({
            visible: true
        });
    };

    handleOk = e => {
        const form = this.props.form;
        console.log(form)
        const bool = form.validateFields();
        console.log('bool', bool)
        message.success('提交成功');
        this.setState({
            visible: false
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false
        });
        axios.get('/api/home/cardList')
        .then((response) => {
            console.log(response);
        })
    };

    clickBtn = () => {
        this.add(1, 6);
    };

    // add的参数、返回值必须是number类型
    add = (num1: number, num2: number): number => {
        return num1 + num2;
    };

    handleChange = date => {
        message.info(`您选择的日期是: ${date.format("YYYY-MM-DD")}`);
        this.setState({ date });
    };
    // 校验——必填
    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
          form.validateFields(['confirm'], { force: true });
        }
        callback();
      }


    // 校验——确认密码与密码是否相同
    compareToFirstPassword = (rule, value, callback) => {
        console.log(rule, value)

        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
          callback('Two passwords that you enter is inconsistent!');
        } else {
          callback();
        }
    }

    handleConfirmBlur = (e) => {
        console.log(e.target.value)
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    handleSubmit = (e) => {
        axios.get('/api/home/cardList')
        .then((response) => {
            console.log(response);
        })
        e.preventDefault();
        // 获取form表单的所有字段
        const a = this.props.form.getFieldsValue();
        console.log(a)
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    }

    hasErrors = (fieldsError) => {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    }


    render() {
        // 声明一个字符串类型的数组
        const list: string[] = ["工号", "姓名"];
        const listC = list.map((item, index) => {
            return <p key={index}>{item}</p>;
        });
        const sum = this.add(1, 6);
        const { getFieldDecorator, getFieldsError, setFieldsValue } = this.props.form;

        return (
            <div className="home">
                <AddButton text="以1递增" onClick={this.clickBtn} />
                <p>求和：{sum}</p>
                <p>遍历生成节点</p>
                {listC}
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item
                        label="密码"
                    >
                        {getFieldDecorator('password', {
                            rules: [{
                                required: true, message: 'Please input your password!',
                            }, {
                                validator: this.validateToNextPassword,
                            }],
                        })(
                            <Input onBlur={this.handleConfirmBlur} />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="确认密码"
                    >
                        {getFieldDecorator('confirm', {
                            rules: [{
                                required: true, message: 'Please confirm your password!',
                            }, {
                                validator: this.compareToFirstPassword,
                            }],
                        })(
                            <Input type="password" onBlur={this.handleConfirmBlur} />
                        )}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button disabled={this.hasErrors(getFieldsError())} type="primary" htmlType="submit">提交</Button>
                    </Form.Item>
                </Form>
                <Alert message="Success Text" type="success" />
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>确定要提交吗？</p>
                </Modal>
                <ButtonGroup>
                    <Button type="primary">L</Button>
                    <Button>M</Button>
                    <Button>R</Button>
                </ButtonGroup>
                <DatePicker onChange={this.handleChange} />
            </div>
        );
    }
}

export default Form.create()(Home);
