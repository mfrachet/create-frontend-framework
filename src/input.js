import { Component } from "../framework";

export class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="input-group mb-3">
        <input type="text" className="form-control" />
      </div>
    );
  }
}
