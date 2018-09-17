import { Component, render } from "./framework";

class Text extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <span>{this.props.children} in text component</span>;
  }
}

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
        <Text>{this.state.name}</Text>
      </div>
    );
  }
}

render("#app", User);
