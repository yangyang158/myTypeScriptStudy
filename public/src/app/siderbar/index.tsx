import * as React from 'react';


export default class Siderbar extends React.Component{

    public render(){
        return(
            <div className="sider-bar">
                <ul>
                    <li><a href="#/home">首页</a></li>
                    <li><a href="#/upload">上传</a></li>
                </ul>
            </div>
        ); 
    }
}