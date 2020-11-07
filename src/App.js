import React from 'react';
import './App.css';

const endpoint = "https://gpu.leebutterman.com/predict";
const apicall = ({code, prompt}) => `${endpoint}?code=${code}&prompt=${prompt}`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {localprompt: "The aged can now get cash lump sums to walk in and be mulched into a fine nutrient slurry. I think"};
  }
  render() {
    return (!this.state) ? "loading" : (
      <div className="App">
        <header className="App-header">
          <p>Audre Lorde versus Ayn Rand, à la GPT-2-XL + GeDi</p>
          <p><a href="https://leebutterman.com/argle-bargle">by Lee Butterman</a></p>
          <form onSubmit={e => {this.setState({prompt: this.state.localprompt || "", apicall: true}); e.preventDefault()}} >
            <textarea value={this.state.localprompt} onChange={e => this.setState({localprompt: e.target.value})} />
            <br/>
            <input type="submit" value="continue on the prompt, in two different styles" />
          </form><br/><hr/><br/>
          {
            this.state.apicall ? (<div class="prompt">Audre Lorde:<br/><iframe src={apicall({prompt: this.state.prompt, code: 0})} /><hr/>Ayn Rand:<br/><iframe src={apicall({prompt: this.state.prompt, code: 1})} /></div>) : ""
          }
        </header>
      </div>
  );
  }
}

export default App;
