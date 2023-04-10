import React from "react";

class ContactsPage extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            value: ""
        }
    }

userPage = () =>{
this.setState({
    value:""
})
}
inputPage = () =>{
    console.log(this.state.value)
    this.userPage()
}

addUser =(event) =>{
    this.setState({
value: event.target.value

    })
}
    render(){
     
        return(
            <>
            <input
             type="text"
             placeholder="name"
             onChange={this.addUser}
             value = {this.state.value}

             />
            <button onClick={this.inputPage}>add</button>
            <button onClick={this.userPage} >clear</button>
            </>
        )
    }
}


export default ContactsPage