import { Component } from "react";

class HijoNumeros extends Component{

    state = {
        numero: parseInt(Math.random()*100)+1,
      };

    

    render(){
        return(<div>

            <h1>Numero hijo: {this.state.numero} </h1>
            <button  >sumar numero</button>

        </div>)
    }
}
export default HijoNumeros