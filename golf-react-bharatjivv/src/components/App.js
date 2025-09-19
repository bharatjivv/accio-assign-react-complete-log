import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,          // Controls if the ball is shown
      posi: 0                     // Stores numeric position of ball (in px)
    };

    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.renderBallOrButton = this.renderBallOrButton.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  // Handle Start button click
  buttonClickHandler() {
    this.setState({ renderBall: true });
  }

  // Handle key press (Right Arrow)
  handleKeyDown(event) {
    if (event.keyCode === 39) { // ArrowRight key
      this.setState((prevState) => ({
        posi: prevState.posi + 5
      }));
    }
  }

  // Add keydown event listener after component mounts
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  // Clean up the event listener when component unmounts
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  // Conditionally render the ball or the button
  renderBallOrButton() {
    if (this.state.renderBall) {
      return (
        <div
          className="ball"
          style={{ left: `${this.state.posi}px`, position: "absolute" }}
        ></div>
      );
    } else {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    }
  }

  render() {
    return <div className="playground">{this.renderBallOrButton()}</div>;
  }
}

export default App;
