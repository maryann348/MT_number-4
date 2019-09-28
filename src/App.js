import React, {Component} from 'react';
import BusinessCard from './Component/BusinessCard';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
        firstName: '',
        lastname: '',
        address:'',
        email:'',
        phoneNumber:'',
        register:false,
        
    }
}

handleRegister = (e) => {
    const { firstName,lastname,address,email,phoneNumber} = this.state;
      if(firstName === "" || lastname === "" || address === "" || email === "" || phoneNumber === ""){
        this.setState({ register: false });
        alert("Something is empty");
      }else{
        this.setState({register : true});
      }
  }
render() {
    const {register} = this.state;
    if (!register) {
        return (
            <div className = "center">
                <h1>REGISTER FORM</h1>
                <hr></hr>
                <br></br>
               FirstName : <input type="text" placeholder="FirstName" onChange = {e => this.setState({firstName : e.target.value})}></input><br></br>
               <br></br>
               LastName : <input type="text" placeholder="LastName" onChange = {e => this.setState({lastname : e.target.value})}></input><br></br>
               <br></br>
               Address :  <input type="text" placeholder="Address" onChange = {e => this.setState({address : e.target.value})}></input><br></br>
               <br></br>
               Email :  <input type="text" placeholder="Email" onChange = {e => this.setState({email : e.target.value})}></input><br></br>
               <br></br>
               PhoneNumber :  <input type="number" placeholder="Phone Number" onChange = {e => this.setState({phoneNumber : e.target.value})}></input><br></br>
               <br></br>
                <button className="button1" onClick={e => this.handleRegister(e)}>Register</button>
                <br></br>
                <br></br>
            </div>
        )
    }
    else {
        return(
            <div>
            <BusinessCard/>
            </div>
        )
    }
}
}

export default App;

