import './App.css';
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';
import owl from './owl_uncombed.jpg'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Click me',
      showMessage: false,
    };
  }

  render() {
    return (
    	<div>
	    	<button onClick={() => this.setState({showMessage:!this.state.showMessage})}>
	       		{this.state.value}
	      	</button>
	      	{this.state.showMessage ?
	      		<div><img src={owl} /></div>:
	      		null	      	
	      	}
	    </div>

    );
  }
}


export default App;