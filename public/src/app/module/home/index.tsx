import * as React from "react";
import * as _ from "lodash";
import Button from "@component/button";

export default class Home extends React.Component {
    clickBtn = () => {
        this.add(1, 6);
    };

    // add的参数、返回值必须是number类型
    add = (num1: number, num2: number): number => {
        return num1 + num2;
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
                <Button text="以1递增" onClick={this.clickBtn} />
                <p>求和：{sum}</p>
                <p>遍历生成节点</p>
                {listC}
            </div>
        );
    }
}
