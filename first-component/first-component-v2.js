// Write JavaScript here and press Ctrl+Enter to execute
class Button extends React.Component {
	// constructor(props) {
	// super(props);
	// this.state = { counter: 0 };
	// }
    
  // handleClick = () => {
  // 	// this === component instance being sent to dom. 
  //  	this.setState((prevState) => {
  //   	return {
  //     	counter: prevState.counter + 1
  //     };
  //   });
  // }; 
  
  render() {
  	return (
    	<button onClick={this.props.onClickFunction}>+1</button>    
    )
  }
}

/* 
    the reason why you do not access this.props.value is because
    function components do not have a this scope. Remember that function components
    just get passed in props (from parent). 

    Class components do have their own scope - hence why they can have state. 
*/
const Result = (props) => {
	 return (
   	<div>{props.value}</div>
   )
};

class App extends React.Component {
  state = { counter:0 };
  
  incrementCounter = () => {
  	this.setState((prevState) => {
    	return {
      	counter: prevState.counter + 1
      }
    });
  };
    /*
        Note how you're passing in onClickFunction and value - those will be
        set on the props object. 

        In the child components, they can be accessed as this.props.onClickFunction
        or props.value if it's a function component 

        

    */
	render() {
  	return (
    	<div>
      	<Button onClickFunction={this.incrementCounter}/>
        <Result value={this.state.counter}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, mountNode);

