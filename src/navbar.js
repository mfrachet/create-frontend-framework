import { Component } from "../framework";

export class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand">Pokedex</a>
        <button className="navbar-toggler">
          <span className="navbar-toggler-icon" />
        </button>
      </nav>
    );
  }
}
