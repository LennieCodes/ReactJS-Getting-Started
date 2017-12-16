/*
    First decision to a react application is thinking about how many components
    you will use, and how you want things to nest. 
*/

const Card = (props) => {
    /*
    You can style react components using the style property. 
    you can also render react components using 'className' instead of class.
    className instead of class because this is JSX and you need a way to distinguish
    from javascript class keyword. 
    */
    return (
  	<div style={{margin: '1em'}}>
  	  <img width="75" src={props.avatar_url} />
      <div style={{display: 'inline-block', marginLeft:10}}>
        <div style={{fontSize: '1.25em', fontWeight:'bold'}}>
        	{props.name}
        </div>
      	<div>{props.blog}</div>
      </div>
  	</div>
  );
  	
};

let data = [
	{
  	name: "Lennie",
    blog: "www.emotivespace.com",
    avatar_url: "https://avatars2.githubusercontent.com/u/14254968?v=4"
  },
  {
  	name: "Eugene",
    blog: "https://github.com/eugenekgn",
    avatar_url:"https://avatars0.githubusercontent.com/u/1332647?v=4"
  }
]

const CardList = (props) => {
	return (
    /*
        Below is the spread operator. "..."
        Takes all properties passed inside a data object, and passes them in as 
        props into a card. That's how you'd get a foreach going. 
    */
    <div>
  	 {props.cards.map(card => <Card {...card} />)}
  	</div> 
  );
}

ReactDOM.render(<CardList cards={data} />, mountNode);