import { Component } from "../framework";

export class Pokemon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      name,
      sprites: { front_default }
    } = this.props.detail;
    return (
      <div>
        <h1>{name.toUpperCase()}</h1>
        <img src={front_default} />
      </div>
    );
  }
}
