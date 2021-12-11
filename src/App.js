import { Component } from "react/cjs/react.production.min";
import paz from "./assets/paz.png";
import Botao from "./components/Botao";
import './estilo.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      textoFrase:''
    };

    this.geraFrase = this.geraFrase.bind(this);

    this.frases = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'];
  }
  geraFrase(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random()* this.frases.length);
    state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "'
    this.setState(state);
  }

  render() {
    return(
    <div className="container">
      <img className="img" src={paz}alt="paz" ></img>
      <Botao nome="Gerar Frase" acaoBtn={this.geraFrase}/>
      <h3 className="textoFrase">{this.state.textoFrase}</h3>
    </div>
    ) 
  }
}

export default App;
