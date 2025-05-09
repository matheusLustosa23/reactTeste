import React from "react";

class componentClasse extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Message: "Hello World",
        }
    }

    compomentDidMount(){
        console.log("Executa quando o usuario acessa pela primeira vez");
    }

    render(){
        return(
            <div>
                <h1>{this.state.Message}</h1>
            </div>
        )
    }
}

export default componentClasse;