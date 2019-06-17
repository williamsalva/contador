import React,{Component} from 'react';

export default class Hora extends Component {

    constructor() {
        super();
        this.state = {hora:24};
        
      }
      cambiarhora =(h)=>{
        this.setState({hora:h})
    }

      componentWillReceiveProps(nextProps){

        console.log("recibo"+nextProps.horas.hora);

        if (nextProps.horas.hora!== this.state.hora ) {
            this.cambiarhora(nextProps.horas.hora)
            if(nextProps.horas.hora===0){
               
                this.horaterminada();
             }
        }
     }

  horaterminada=()=>{
   
    let dia ={
        resta:1
    }
    this.props.diacompleto(dia);


  }



    render() {
        return (
            <div className="box">
                <h1 className="numbers">{this.state.hora}</h1>
               <p className="nom">Horas</p>
            </div>
        );
    }
}