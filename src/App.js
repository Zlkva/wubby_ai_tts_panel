import React from 'react'
import './App.css';

class Panel extends React.Component{
  
  constructor(props) {
    super(props)
    this.state = {
      voiceBank: [{"name":"Wubby","id":"wubby","order":0},{"name":"Ham","id":"ham","order":1},{"name":"Peanut","id":"peanut","order":2},{"name":"Carlos","id":"carlos","order":3},{"name":"Yeb","id":"yeb","order":4},{"name":"HelloNeptune","id":"neptune","order":5},{"name":"Alluux","id":"alex","order":6},{"name":"Ash","id":"ash","order":7},{"name":"DJ","id":"dj","order":8},{"name":"TT","id":"tt","order":9},{"name":"Wubby's Dad","id":"wubbydad","order":10},{"name":"Todd","id":"todd","order":11}],
      step: 'setup',
      voice: 'wubby',
      cheer: 500,
      message: undefined
    }
  }

  handleToggleVoice = (event) => {
    let value = event.target.value

    this.setState({
      voice: value
    })
  }

  handleCheerUpdate = (event) => {
    let value = event.target.value

    this.setState({
      cheer: value
    }) 
  }

  processData = () => {

    let cheerCheck = (this.state.cheer >= 500)

    if (cheerCheck){
      this.setState({
        step: 'complete'
      })  
    }
  }

  handleReset = () => {
    this.setState({
      step: 'setup',
      voice: 'wubby',
      cheer: 500
    })
  }

  render(){
    return (
      <div id="app">
          <div id="container">
            <div className="App--Title">
                <div>AI TTS</div>
            </div>
            {(this.state.step === 'setup' || this.state.step === undefined) && (
              <React.Fragment>
                <div className="App--Upper">
                    <div className="App--Selector">
                        <label for="voice">Pick your voice:</label>
                        <select name="voice" id="voice" value={this.state.setVoice} onChange={this.handleToggleVoice}>
                          {Array.from(this.state.voiceBank).map((item, i) => {
                            return (
                              <option key={`option_${i}`} value={item.id}>{item.name}</option>
                            )
                            })
                          }  
                        </select>
                        <div>Debug Voice: {this.state.voice}</div>
                    </div>
                    <div className="App--Cheer">
                        <label for="cheer">Donation Amount:</label>
                        <input name="cheer" type="number" min="500" step="100" value={this.state.cheer} onChange={this.handleCheerUpdate}/>
                        <div>Debug Cheer: {this.state.cheer}</div>
                    </div>
                </div>
                <div className="App--Lower">
                    <div className="App--Input">
                        <label for="chosenText">What should TTS say?</label>
                        <input name="chosenText" type="text"/>
                    </div>
                </div>
                <div>
                  <button onClick={()=>{this.processData()}}><span>Continue</span></button>
                </div>
              </React.Fragment>
            )}
            {(this.state.step === 'complete') && (
              <React.Fragment>
                    <div className="App--Output">
                        <input id="output" type="textarea" value={this.state.formatted} readonly/>
                    </div>
                    <div>
                      <button onClick={()=>{this.handleReset()}}><span>Reset</span></button>
                    </div>
              </React.Fragment>
            )}
          </div>
    </div>
      )
  }
}

export default Panel