import { Component } from "../framework";

export class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="container m-t">{this.props.children}</div>;
  }
}
