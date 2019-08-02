import React, { Component } from "react";

const formatAMPM = date => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = `${hours}:${minutes}:${seconds} ${ampm}`;
  return strTime;
};
export default class Home extends Component {
  state = { date: new Date(), isToggleOn: true };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState({
      date: new Date()
    });
  };

  handleClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  };
  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>Time is {formatAMPM(this.state.date)}.</h2>
        <button onClick={this.handleClick}>Show/Hide Date</button>
        {this.state.isToggleOn ? (
          <h2>{this.state.date.toDateString()}.</h2>
        ) : (
          ""
        )}
      </div>
    );
  }
}
