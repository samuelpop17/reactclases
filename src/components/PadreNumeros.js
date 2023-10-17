import { Component } from "react";

import HijoNumeros from "./HijoNumeros";
class PadreNumeros extends Component {



  numeros = [0, 0, 0];

  state = {
    sumados: 0,
  };

  render() {
    return (
      <div>
        <h1>la suma es: {this.state.sumados} </h1>
        <button onClick={() => this.generarNumero()}>Nuevo numero</button>
        {this.numeros.map((numeros, index) => {
          return <HijoNumeros ></HijoNumeros>;
        })}
      </div>
    );
  }
}
export default PadreNumeros;
