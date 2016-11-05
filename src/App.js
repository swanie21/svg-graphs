import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import StackedBarGraph from './StackedBarGraph';
import BarGraph from './BarGraph';
import Immutable from 'immutable';
import DataPoint from './DataPoint';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Immutable.List.of(23, 87, 52, 46),
      data2: Immutable.List.of(50, 100, 54, 44),
      width: 600,
      height: 40,
      percentage: 60
    };
  }

  render() {
    const { data } = this.state;
    const { data2 } = this.state;

    return (
      <div className="App">
        <div>
        <h1>Progress Bar</h1>
        <ProgressBar
          {...this.state}
        />
        <div className="InputContainer">
          <div className="Input">
          <p>Change progress bar percentage</p>
          <input
            type="range"
            min="1"
            max="100"
            value={this.state.percentage}
            onChange={e => this.setState({ percentage: parseInt(e.target.value) })}
          />
          <input
            type="number"
            min="1"
            max="100"
            value={this.state.percentage}
            onChange={e => this.setState({ percentage: parseInt(e.target.value) })}
          />
        </div>
        <div className="Input">
          <p>Change progress bar height</p>
          <input
            type="range"
            min="1"
            max="500"
            value={this.state.height}
            onChange={e => this.setState({ height: parseInt(e.target.value) })}
          />
          <input
            type="number"
            min="1"
            max="500"
            value={this.state.height}
            onChange={e => this.setState({ height: parseInt(e.target.value) })}
          />
        </div>
        <div className="Input">
          <p>Change progress bar width</p>
          <input
            type="range"
            min="1"
            max={window.innerWidth}
            value={this.state.width}
            onChange={e => this.setState({ width: parseInt(e.target.value) })}
          />
          <input
            type="number"
            min="1"
            max={window.innerWidth}
            value={this.state.width}
            onChange={e => this.setState({ width: parseInt(e.target.value) })}
          />
        </div>
      </div>
      </div>
      <div className="BarGraph">
        <h1>Stacked Bar Graph</h1>
        <StackedBarGraph>
         { data.toArray().map((d, i) => <DataPoint value={d} key={i} />) }
        </StackedBarGraph>
         <div className="inputs">
           { data.toArray().map((d, i) => (
             <input
               type="number"
               value={d}
               key={i}
               onChange={e => this.setState({ data: data.set(i, +e.target.value) })}
             />
           )) }
        </div>
      </div>
      <div className="BarGraph">
        <h1>Bar Graph</h1>
        <BarGraph>
         { data2.toArray().map((d, i) => <DataPoint value={d} key={i} />) }
        </BarGraph>
         <div className="inputs">
           { data2.toArray().map((d, i) => (
             <input
               type="number"
               value={d}
               key={i}
               onChange={e => this.setState({ data2: data2.set(i, +e.target.value) })}
             />
           )) }
        </div>
      </div>
      </div>
    );
  }
}

export default App;
