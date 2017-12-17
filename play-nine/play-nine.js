const Stars = (props) => {
  
  return (
  	<div className="col-5">
    	{_.range(props.numberOfStars).map(i => <i key={i} className="fa fa-star"></i>)}
    </div>
  )
};

const Button = (props) => {
	return (
  	<div className="col-2">
    	<button className="btn btn-primary" disabled={props.selectedNumbers.length === 0}>=</button>
    </div>
  )
};

const Answer = (props) => {
	return (
  	<div className="col-5">
    	{props.selectedNumbers.map((number, i) => 
      <span key={i}
      			onClick={() => props.unselectNumber(number)}>
      	{number}</span>)}
    </div>
  )
};

const Numbers = (props) => {
	const numberClassName = (number) => {
  	if (props.selectedNumbers.indexOf(number) >= 0) {
    	return 'selected';
    }
  }

  return (
  	<div className="card text-center">
  	  <div>
				{Numbers.list.map((number, i) => 
          <span key={i} 
                className={numberClassName(number)}
                onClick={() => props.selectNumber(number) }>
            {number}
        </span>
        )}
  	  </div>
  	</div>
  )
};

Numbers.list = _.range(1,10);

class Game extends React.Component {
	state = {
  	selectedNumbers: [],
    randomNumberOfStars: 1 + Math.floor(Math.random() * 9)
  };
  
  selectNumber = (clickedNumber) => {
    this.setState(prevState => {
    	if (prevState.selectedNumbers.indexOf(clickedNumber) === -1) {
      	return {
        	selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }
      }
    });
  };
  
  unselectNumber = (clickedNumber) => {
  	this.setState(prevState => {
    	return { selectedNumbers: prevState.selectedNumbers
      .filter(number => number !== clickedNumber)};
    });
  }
  
  render() {
  	return (
    	<div className="container">
      	<h3>Play Nine</h3>
        <hr />
    	  <div className="row">
    	     <Stars numberOfStars={this.state.randomNumberOfStars}/>
       		 <Button selectedNumbers={this.state.selectedNumbers}/>
           <Answer selectedNumbers={this.state.selectedNumbers}
          	unselectNumber={this.unselectNumber}/> 
    	  </div>
        <br />
        <Numbers selectedNumbers={this.state.selectedNumbers} 
        selectNumber={this.selectNumber}/>
    	</div>
    )
  }
}

class App extends React.Component {
	render() {
  	return (
    	<div>
    	  <Game />
    	</div>
    )
  }
}

ReactDOM.render(<App />, mountNode);