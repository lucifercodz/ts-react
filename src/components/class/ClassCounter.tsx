import { Component, ReactNode } from "react";

type CounterProps = {
    message: string
}

type ConterState = {
    count:number
}

export class ClassCounter extends Component<CounterProps, ConterState> {
    state = {
        count: 0,
    }

    handleClick = () => {
        this.setState((prevState) => ({count: prevState.count + 1}))
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick}>Increment</button>
                {this.props.message} {this.state.count}
            </div>
        )
    }
}