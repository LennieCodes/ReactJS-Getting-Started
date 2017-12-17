// Write JavaScript here and press Ctrl+Enter to execute
class Button extends React.Component {
	// constructor(props) {
	// super(props);
	// this.state = { counter: 0 };
	// }

  handleClick = () => {
  	this.props.onClickFunction(this.props.incrementValue);
  }; 
  
  render() {
  	return (
    	<button 
      	onClick={this.handleClick}>
      	+{this.props.incrementValue}
      </button>    
    )
  }
/*
  This version will work as well, but the reason why it is not used is because
  every version of the button component will create their own anonymous function.

  This is inefficient. A better way to do this would be to use handleClick as a 
  wrapper, and then call props.onClickFunction passed in. 
*/
//   render() {
//       return (
//         <button onClick={() => this.props.onClickFunction(this.props.incrementValue)}>
//             +{this.props.incrementValue}
//         </button>
//       )
//   }
}

const Result = (props) => {
	 return (
   	<div>{props.value}</div>
   )
};

class App extends React.Component {
  state = { counter:0 };
  
  incrementCounter = (incrementValue) => {
  	this.setState((prevState) => {
    	return {
      	counter: prevState.counter + incrementValue
      }
    });
  };
  
	render() {
  	return (
    	<div>
      	<Button 
        	incrementValue={1}
        	onClickFunction={this.incrementCounter}/>
        <Button 
        	incrementValue={5}
        	onClickFunction={this.incrementCounter}/>
        <Button 
        	incrementValue={10}
        	onClickFunction={this.incrementCounter}/>
        <Button 
        	incrementValue={100}
        	onClickFunction={this.incrementCounter}/>
        
        <Result value={this.state.counter}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, mountNode);

