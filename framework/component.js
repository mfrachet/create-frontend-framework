import { patch } from "./";

export class Component {
  constructor(props) {
    this.props = props;
    this.state = null;
  }

  setState(nextState) {
    this.state = { ...this.state, ...nextState };
    this.prevNode = this.currentNode;
    this.currentNode = this.render();

    patch(this.prevNode, this.currentNode);
  }
}
