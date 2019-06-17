import React,{Component} from 'react';

export default class Minutos extends Component {

    constructor() {
        super();
        this.state = { minutos:60};
        
      }

      componentWillReceiveProps(nextProps){

        console.log("recibo"+nextProps.minuto.minutos);

       if (nextProps.minuto.minutos!== this.state.minutos ) {
            this.cambiarminutos(nextProps.minuto.minutos)


            if(this.state.minutos==0){
                 this.minutosterminados()}
             }
      }

 cambiarminutos=(m)=>{
     this.setState({minutos:m})
 }


   minutosterminados=() =>{
    
    
      let hora ={resta:1}
    this.props.horacompleta(hora);
 }
     
     
    render() {
        return (
            <div className="box">
                <h1 className="numbers">{this.state.minutos}</h1>
                <p className="nom">Minutos</p>
            </div>
        );
    }
}