
import React from "react";

class AboutUs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: ""
        }
        this.nameUS = this.nameUS.bind(this)
    }
    nameUS(){
        this.setState({
            text: this.state.text, text: "Kutman"
        })
    }

    render(){

        return(
           <>
           <p>{this.state.text}</p>
           <button onClick={this.nameUS} >Click me</button>
           </>
        )
    }
}
export default AboutUs