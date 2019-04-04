import * as React from 'react';


interface IProps {
    text: string,
    type?: string,
    onClick: (e) => void
}

interface IState {
    count: number,
}

export default class Button extends React.Component<IProps, IState>{

    constructor(props: IProps){
        super(props);
        this.state = {
            count: 1
        }
    }

    onClick = e => {
        const {onClick, } = this.props;
        this.setState({
            count: this.state.count + 1
        });
        onClick(e);
    }

    render(){
        const {text, } = this.props;
        return(
            <div className="hr1-button">
                <button onClick={this.onClick}>{text}</button>
                {this.state.count}
            </div>
        )
    }
}