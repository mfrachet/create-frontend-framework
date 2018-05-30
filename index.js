import { Component, render } from "./framework";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Marvin" };
  }

  handleClick() {
    const { name } = this.state;
    this.setState({ name: name === "Marvin" ? "Enchanté" : "Marvin" });
  }

  render() {
    const { name } = this.state;
    const className = name === "Marvin" ? "red" : "black";

    return (
      <div className={className} onClick={this.handleClick.bind(this)}>
        Hello {this.state.name}
      </div>
    );
  }
}

render("#app", new User());
