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

    this.frases = ['A vida que está por vir é muito mais importante do que aquela que ficou no passado.', 'A estrada para o sucesso está sempre em construção.', 
    'A vida não é um problema a ser resolvido, mas sim uma realidade para ser apreciada.', 
    'Deixe para trás aquilo que não te leva para a frente.',
    'Se você fizer as coisas sempre do mesmo jeito, ficará sempre no mesmo lugar.',
    'Acredite: os grandes desafios são colocados no caminho das pessoas de maior caráter. ',
    'Viva o hoje. Afinal, o ontem já foi e pode ser que o amanhã não venha.','A vida não fica mais fácil, só que você se torna mais forte. ',
     'Antes de correr, aprenda a andar. Tudo tem o seu tempo.','Duvide do que vem fácil, mas nunca desista daquilo que é difícil. ' ];
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
      <h1>Frases de reflexão</h1>
      <img className="img" src={paz}alt="paz" ></img>
      <Botao nome="Gerar Frase" acaoBtn={this.geraFrase}/>
      <h3 className="textoFrase">{this.state.textoFrase}</h3>
    </div>
    ) 
  }
}

export default App;
