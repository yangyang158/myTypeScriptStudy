import * as React from 'react';
import { render } from 'react-dom';
import * as  _ from 'lodash';

export default class MainIndex extends React.Component {

    componentDidMount(){
        console.log('lodash求和', _.add(1, 4))
    }
    render(){
        return (
            <p>
                学习react！！
            </p>
        )
    }
};