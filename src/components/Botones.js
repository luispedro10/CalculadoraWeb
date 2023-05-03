import React from "react";

export default class Botones extends React.Component {

    sendData = (e) =>{
        this.props.añadirV(e);
    }

    sendSign = (e) =>{
        this.props.signo(e);
    }

    equal = (e) =>{
        this.props.igual(e);
    }

    clear = (e) =>{
        this.props.limpiar(e);
    }

    MasMenos = (e) =>{
        this.props.Mm(e)
    }

  render() {
    return (
        <div id="Botones">
            <div className="row">
                <button onClick = {() => this.MasMenos("+/-")}>+/-</button>
                <button onClick = {() => this.sendSign("%")}>%</button>
                <button data-testid='clear' onClick = {() => this.clear("C")}>C</button>
                <button data-testid="divi" onClick = {() => this.sendSign("/")}>/</button>
            </div>
            <div className="row">
                <button onClick = {() => this.sendData("7")}>7</button>
                <button onClick = {() => this.sendData("8")}>8</button>
                <button onClick = {() => this.sendData("9")}>9</button>
                <button data-testid="multi" onClick = {() => this.sendSign("*")}>x</button>
            </div>
            <div className="row">
                <button onClick = {() => this.sendData("4")}>4</button>
                <button onClick = {() => this.sendData("5")}>5</button>
                <button onClick = {() => this.sendData("6")}>6</button>
                <button data-testid="resta" onClick = {() => this.sendSign("-")}>-</button>
            </div>
            <div className="row">
                <button data-testid="uno" onClick = {() => this.sendData("1")}>1</button>
                <button onClick = {() => this.sendData("2")}>2</button>
                <button onClick = {() => this.sendData("3")}>3</button>
                <button data-testid="suma" onClick = {() => this.sendSign("+")}>+</button>
            </div>  
            <div className="row">
                <button onClick = {() => this.sendData(".")}>.</button>
                <button onClick = {() => this.sendData("0")}>0</button>
                <button data-testid="igual" onClick = {() => this.equal("=")}>=</button>
            </div>
        </div>     
    );
  };
};