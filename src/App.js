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
          <p>Audre Lorde vs Ayn Rand, via GPT-2 + GeDi<br/><a href="https://www.leebutterman.com/2020/11/01/lorde-versus-rand.html">by Lee Butterman</a></p>
          <form onSubmit={e => {this.setState({prompt: this.state.localprompt || "", apicall: true}); e.preventDefault()}} >
            <textarea value={this.state.localprompt} onChange={e => this.setState({localprompt: e.target.value})} />
            <br/>
            <input type="submit" value="elaborate, à la Lorde/Rand" />
          </form>
          {
            this.state.apicall ? (<div className="prompt">à la Audre Lorde:<br/><iframe title="lorde" src={apicall({prompt: this.state.prompt, code: 0})} /><hr/>à la Ayn Rand:<br/><iframe title="rand" src={apicall({prompt: this.state.prompt, code: 1})} /></div>) : ""
          }
        </header>
      </div>
  );
  }
}

export default App;
