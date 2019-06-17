import React,{Component} from 'react';

export default class Dias extends Component {

    constructor() {
        super();
        this.state = {dia:2 };
        
      }


      componentWillReceiveProps(nextProps){

        

        if (nextProps.dias.dia !== this.state.dia ) {
            var dianuevo=nextProps.dias.dia

          this.setState({dia:dianuevo})
        }
         


}






    render() {
        return (
            <div className="box">
                <h1 className="numbers">{this.state.dia}</h1>
                <p className="nom">Días</p>
            </div>
        );
    }
}