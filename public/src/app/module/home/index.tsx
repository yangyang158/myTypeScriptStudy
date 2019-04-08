import * as React from "react";
import * as _ from "lodash";
import axios from 'axios';
import AddButton from "@component/button";
import { Input, Alert, Modal, Button, DatePicker, message } from "antd";

const ButtonGroup = Button.Group;
export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true
        });
    };

    handleOk = e => {
        console.log(e);
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

    render() {
        // 声明一个字符串类型的数组
        const list: string[] = ["工号", "姓名"];
        const listC = list.map((item, index) => {
            return <p key={index}>{item}</p>;
        });
        const sum = this.add(1, 6);
        return (
            <div className="home">
                <AddButton text="以1递增" onClick={this.clickBtn} />
                <p>求和：{sum}</p>
                <p>遍历生成节点</p>
                {listC}
                <Input placeholder="Basic usage" />
                <Alert message="Success Text" type="success" />
                <Button type="primary" onClick={this.showModal}>
                    Open Modal
                </Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
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
