import { Component } from "../framework";

export class Input extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = { value: "" };
  }

  handleChange(e) {
    if (e.keyCode === 13) {
      return this.props.onEnter(this.state.value);
    }

    return this.setState({ value: e.target.value });
  }

  render() {
    const { onEnter } = this.props;
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a pokemon name. Default is bulbasaur"
          onKeyUp={this.handleChange}
        />
      </div>
    );
  }
}
