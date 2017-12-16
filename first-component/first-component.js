
class Button extends React.Component {
// the constructor pattern of initializing state in React component. 
// why do you need to call constructor with props here to initialize??
//   constructor(props) {
//   	super(props);
//     this.state = { counter: 0 };
//   }

// shorthand version of initializing state:
 state = {counter: 0};
 
 
 handleClick = () => {
    /*
        setState is a way of telling react to update the state object of a react component.
        this.setState({
            counter: counter + 1;
        })

        This version of setState will be batched - it does not guarantee immediate
        updates. And it is asynchronous - which may lead to a race condition
        where 2 batch updates are trying to update the same counter variable
        at the same time. 

        Instead, use the version defined below: This version ensures that
        a new version of state is created with update, the prevState remains 
        untouched. 

        In short - use the setState((prevState) contract to update state. 

    */

    this.setState((prevState) => {
        return {
            counter: prevState.counter + 1
        };
    });
 };

  
  render() {
  	return (
    	<button onClick={this.handleClick}>{this.state.counter}</button>    
    )
  }
}

// function component, doesn't have internal state - only needs props.
const Result = (props) => {
    return (
      <div>...</div>
  )
};

/* 
    a component can only render 1 element - it cannot have any adjacent elements.
    This is why the JSX returned is wrapped in a div. If you nest components in a parent,
    then you can render multiple components using 1 component. 

    The point here is that react can only render 1 parent. But you can render
    as many child elements as you want. 
*/
class App extends React.Component {
   render() {
     return (
       <div>
         <Button />
       <Result />
     </div>
   )
 }
}

ReactDOM.render(<App />, mountNode);

