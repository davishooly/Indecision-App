import  React from  'react'
import  ReactDom from 'react-dom'

class Counter extends React.Component{

    // remember this keyword is an instance of itself in a class example
    constructor(props){
       super(props);
       // we are binding to the current component instance
       this.handleIncrementCounter = this.handleIncrementCounter.bind(this);
       this.handleMinusOne = this.handleMinusOne.bind(this);
       this.handleResetCounter = this.handleResetCounter.bind(this);
       // instead of defining our state as an object we are going to define it inside our constructor
      // every instance of this component will have its default state set to counter : 0
       this.state = {
           counter:0
       };
    }
    handleIncrementCounter = ()=>{
        this.setState((prevState) => {
            return{
                counter: prevState.counter + 1
            }
        })
    }
    handleMinusOne = () => {
        let counter = this.state.counter
        if (counter === 0)
           throw new Error("Counter must be greater than Zero!");

        this.setState((prevState) => {
            return{
                counter: prevState.counter - 1
            }
        })
    }
    handleResetCounter = ()=> {
        this.setState(() => {
            return{
                counter:0
            }
        })
    }
    render(){
        return(
            <div>
                <div>
                    <span>counter: {this.state.counter}</span>
                </div>
                <button onClick={this.handleIncrementCounter}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleResetCounter}>Reset</button>
            </div>
        )
    }
}

ReactDom.render(
    <Counter/>,
    document.querySelector('#root')
)