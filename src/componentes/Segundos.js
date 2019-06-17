import React,{Component} from 'react';

export default class Segundos extends Component {

    constructor() {
        super();
        this.state = { segundos:60 };
        
      }

      componentWillMount() {
        this.updateClock()
      }
      cambiarsegundos=(s)=>{
        this.setState({segundos:s})
    }
  
updateClock =()=> {

let segundo=this.state.segundos;
    this.cambiarsegundos(segundo-1)
 if(this.state.segundos===0){
   
    this.setState({segundos:60});
    let minuto ={resta:1 }
   
    this.props.minutocompleto(minuto);
    setTimeout(this.updateClock.bind(this), 1000);
 }
 else{
    setTimeout(this.updateClock.bind(this), 1000);
 }
}




    render() {
        return (
            <div className="box">
                
                <h1 className="numbers">{this.state.segundos}</h1>
               <p className="nom">Segundos </p> 
               
                
            </div>
        );
    }
}