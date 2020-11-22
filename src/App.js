import React from 'react';
import './App.css';

const endpoint = "https://gpu.leebutterman.com/predict";
const apicall = ({code, prompt}) => `${endpoint}?code=${code}&prompt=${prompt}`;

const defaultPrompt = "It is indefensible that";

class App extends React.Component {
  constructor(props) {
    super(props);
    const localprompt = decodeURIComponent(window.location.hash.slice(1)) || defaultPrompt;
    this.state = {localprompt};
    // a la Lorde talks about equal pay for equal work, which she never discusses in the essay selection! and rand talks about cops, which she doesn't mention except obliquely!
     // {localprompt: "The aged can now get cash lump sums to walk in and be mulched into a fine nutrient slurry. I think"};
  }
  render() {
    if(!this.state || !this.state.localprompt) return "loading";
    if(this.state.prompt) window.location.hash = this.state.prompt;
    return (!this.state) ? "loading" : (
      <div className="App">
        <header className="App-header">
          <p>Audre Lorde vs Ayn Rand, via GPT-2 + GeDi<br/><a href="https://www.leebutterman.com/2020/11/01/lorde-versus-rand.html">by Lee Butterman</a></p>
          <form onSubmit={e => {this.setState({prompt: this.state.localprompt || ""}); e.preventDefault()}} >
            <textarea value={this.state.localprompt} onChange={e => this.setState({localprompt: e.target.value})} />
            <br/>
            <input type="submit" value="elaborate, à la Lorde/Rand" />
          </form>
          {
            this.state.prompt ? (<div className="prompt">à la Audre Lorde:<br/><iframe title="lorde" src={apicall({prompt: this.state.prompt, code: 0})} /><hr/>à la Ayn Rand:<br/><iframe title="rand" src={apicall({prompt: this.state.prompt, code: 1})} /></div>) : ""
          }
        </header>
      </div>
  );
  }
}

export default App;
