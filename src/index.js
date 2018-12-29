import  React from  'react'
import  ReactDom from 'react-dom'
// creating react components using ES6 classes

class IndecisionApp extends React.Component{

    render(){
        const title = "Indecision-App";
        const sub_title = "Unsure of working out your plan! get your plan sorted using the Indecision app";
        const options = ["Thing one", "Thing two", "Thing three"];
        return (
            <div>
            <Header title={title} sub_title={sub_title}/>
            <Action/>
            <Options options={options}/>
            <AddOption options={options}/>
            </div>
        );
    }

}
// header component
// defining a class components overrides a render method that returns html elements for that specific component
class Header extends React.Component{
   render(){
       const title = this.props.title;
       const sub_title = this.props.sub_title;
       return (
           <div>
           <h1> {title} </h1>
           <h2> {sub_title}</h2>
           </div>
       );
   }
}
// Action component
class Action extends React.Component{
    handlePick(){
        alert("kimame picking");
    }
    render(){
        return (
            <div>
                <button onClick={this.handlePick}> What should i do now? </button>
            </div>
        )
    }
}
// Options components
class Options extends React.Component{
    clearOptions(){
        alert("remove all options");
    }
    render(){
        const options = this.props.options
        return(
            <div>
                <button onClick={this.clearOptions}> Clear options</button>
              {
                  options.map((option) => <Option key={option} optionText={option}/>)
              }
            </div>
        )
    }
}
// option component here
class Option extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.optionText}</p>
            </div>
        )
    }
}

// Add options form component here
class AddOption extends React.Component{
    //  we are using the constructor method to bind our method to the instance of class AddOption
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this)
    }
    handleAddOption(e){
        // prevents the browser default form submission where we get the browser refreshed
        e.preventDefault();
        // let option_value = document.querySelector("#option").value;
        const option = e.target.elements.option.value.trim();
        if (option){
            alert(option);
        }
        console.log(this.props.options)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleAddOption}>
                    <div>
                    <input type="text" id="option" placeholder="add option here"/>
                    <button> Add option </button>
                    </div>
                </form>
            </div>
        )
    }
}

ReactDom.render(
    <IndecisionApp/>,
    document.querySelector("#root")
)
