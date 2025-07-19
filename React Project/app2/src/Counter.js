import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            age:22,
            name:"Namir",flag:false
        }
        console.log("i am  constructor ")
    }

    changeName = () => {
        this.setState({name:"Namss"});
        this.setState({flag:true});
    }

    componentDidMount = () => {
        console.log("api calling ")
    }

    componentDidUpdate = () => {
        console.log("name changes ")
    }

    componentWillUnmount = () => {
        console.log("removing component ")
    }

    render() {
        console.log("i am render method")
        return (
            <>
                {this.state.flag === true ? <h1> Hello</h1> : <h2>Bye </h2>}
                <h1>Welcome {this.state.name}!</h1>
                <button onClick={this.changeName}> change name </button>
            </>
        );
    }
}
 
export default Counter;