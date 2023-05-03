import React from "react";
import Botones from "./Botones";
import * as math from "mathjs";


export default class Calc extends React.Component {
  constructor(){
    super();

    this.state = {
        result: "",
        signo:"",
        valor:"",
    }
  }

  callbackFunction = (childData) =>{
      this.setState({result: this.state.result.substring(0,8) + childData})
  }

  callbackFunction2 = (childData) =>{
    this.setState({signo: childData, valor:this.state.result.substring(0,9), result:""})
  }

  equalSign = (childData) =>{
    var res = math.evaluate(this.state.valor + this.state.signo + " " + this.state.result)
    if((res > 999999999)||(res < 0)) { 
      this.setState({result:"Error FATAL"});
    }
    else if((res < 999999999)&&(res > 0)){
      this.setState({result:math.evaluate(this.state.valor + this.state.signo + " " + this.state.result).toString().substring(0,8)});
    }
    else{
      this.setState({result:"Error FATAL"});
    }
  }

  clearBoton = (childData) =>{
    this.setState({valor:"", result:"", singo:""});
  }

  MasMenosSign = (childData) =>{
    this.setState({result:math.evaluate("-1 * " + this.state.result).toString().substring(0,8)});
  }

  render() {
    return (
        <div id="Calc">
            <textarea data-testid="texto" className = "input" maxLength="9" value={this.state.result} readOnly></textarea>
            <Botones añadirV = {this.callbackFunction} signo = {this.callbackFunction2} igual = {this.equalSign} limpiar = {this.clearBoton} Mm = {this.MasMenosSign}></Botones>
        </div>     
    );
  };
};