import React from "react";

class PortfolioPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            works: []
        }
        this.getUser = this.getUser.bind(this)
    }
    getUser(){
        this.setState({
            works: ["Works1", "Works2"]
        })
    }

    render(){

        return(
            <>
            <button onClick={this.getUser}>Click me</button>
            <ul>
                <li>{this.state.works[0]}</li>
                <li>{this.state.works[1]}</li>
            </ul>
           
            </>
        )
    }
}
export default PortfolioPage