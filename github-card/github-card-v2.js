const Card = (props) => {
	return (
  	<div style={{margin: '1em'}}>
  	  <img width="75" src={props.avatar_url} />
      <div style={{display: 'inline-block', marginLeft:10}}>
        <div style={{fontSize: '1.25em', fontWeight:'bold'}}>
        	{props.name}
        </div>
      	<div>{props.company}</div>
      </div>
  	</div>
  );
  	
};

const CardList = (props) => {
	return (
  	<div>
  	 {props.cards.map(card => <Card {...card} />)}
  	</div> 
  );
}

class Form extends React.Component {
	// event object is the same as Native Javascript event
  handleSubmit = (event) => {
  	// prevent default behavior of submitting the form.
  	event.preventDefault();
    // how you access user input binded to Form Object by 'ref' attribute
    console.log('Form Submitted:', this.userNameInput.value);
  };
	
  render() {
  	/* 	
    	note the use of "ref" here. This is a special property exposed
      by React that allows you to bind user input to the class Object. 
      now this.userNameInput is a value binded to the Form object, and 
      can be accessed by this.userNameInput.value
    */
    return (
    	<form onSubmit={this.handleSubmit}>
      	<input type="text"
        	ref={(input) => this.userNameInput = input}
        	placeholder="Github username" 
          required />
        <button type="submit">Add Card</button>
      </form>
    );
  };
}

class App extends React.Component {
	state = {
  	cards: [
    	{
      	name: "Lennie",
      	company: "EmotiveSpace",
      	avatar_url: "https://avatars2.githubusercontent.com/u/14254968?v=4"
      },
      {
        name: "Eugene",
        company: "Unknown",
        avatar_url:"https://avatars0.githubusercontent.com/u/1332647?v=4"
  		}	
    ]
  }
	render() {
  	return (
    	<div>
    	  <Form />
        <CardList cards={this.state.cards} />
    	</div>
    )
  }
}

ReactDOM.render(<App />, mountNode);