import { Component } from "react/cjs/react.production.min";
import './estilo.css';

class Botao extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
            </div>
        )
    }
}
export default Botao;