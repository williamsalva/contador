import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Segundos from './componentes/Segundos'
import Minutos from './componentes/Minutos'
import Hora from './componentes/Hora';
import Dias from './componentes/Dias';
 
 
 export default class App extends Component {
    constructor(){
      super();
     this.state={
        minutos:60,
        hora:24,
        dia:2
      }
    }
    

  cambiarminuto=(m)=>{
    this.setState({minutos:m})
  }
  cambiardia=(d)=>{
    this.setState({dia:d})
  }
  cambiarhora=(h) =>{
    this.setState({hora:h})
  }


    
     minutocompleto=(minuto)=>{
      
        let min=this.state.minutos;
        let resta = minuto.resta
        let minutorestado =min-resta;
        
        
            
        this.cambiarminuto(minutorestado)
        
          if(this.state.minutos===0){
              this.cambiarminuto(60);  
              }
    
       }

  

    horacompleta=(hora)=>{
        let min=this.state.hora;
        let resta = hora.resta
        let horarestada =min-resta;
        this.cambiarhora(horarestada);
      if(horarestada===0){
        console.log("esta en ceros la hora ");
        
          this.cambiarhora(24);
          let min=this.state.dia-1;

           this.cambiardia(min);

        }
      }



   
     
    

     render() {
         return (
          <div className="App">
          <Dias
          dias={this.state}
          />
          <Hora 
          diacompleto={this.diacompleto}
          horas={this.state}
          
          />
          <Minutos
          horacompleta={this.horacompleta}
          minuto={this.state}
          />
         <Segundos
          minutocompleto= {this.minutocompleto}
         />
    
         
        </div>
            
         );
     }
 }


