class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visibility: false
        }

    }
    handleToggleVisibility = (state) => {
        this.setState(()=>{
            return{
              visibility:state
            }
        })
    }

    renderContent(){
        let visible = this.state.visibility
        switch (visible) {
            default:
            case true: return <div>
                     <p>
                      Hey. these are some details you can see now
                    </p>
                </div>
            case false: return <div></div>
        }
    }
    render(){
        return (
           <div>
            <Rendering visibility={true} ToggleVisibility={this.handleToggleVisibility}/>
             {this.renderContent()}
           </div>
        );
    }
}
class Rendering  extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
       this.props.ToggleVisibility(this.props.visibility)
    }
    render(){
        return (
            <button onClick={this.handleClick}>
            {this.props.visibility? "show details": "Hide details"}</button>
        );
    }
}
ReactDom.render(
    <VisibilityToggle />,
    document.querySelector('#root')
)
