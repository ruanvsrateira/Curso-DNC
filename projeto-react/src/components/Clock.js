import { Component } from "react";

// Componente criado através de uma classe
export class Clock extends Component {
  constructor() {
    super();

    this.state = {
      time: new Date().toString(),
    };

    this.interval = false;
    this.color = "red";
  }
  // Função chamanda quando o component é montado na virtual dom
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ ...this.state, time: new Date().toString() });
    }, 1000);
  }

  // Função chamada quando o component é desmontado
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Função chamada quando o component é modificado
  componentDidUpdate() {
    if (this.color === "red") {
      this.color = "blue";
    } else {
      this.color = "red";
    }
  }

  render() {
    return <h3 style={{ color: this.color }}>{this.state.time}</h3>;
  }
}
