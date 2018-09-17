import { Component } from "../framework";

export class Pokemon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return <div>Pokemon view</div>;
  }
}
