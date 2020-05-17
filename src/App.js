import React from 'react';
//import { Route, Link, Router} from 'react-router-dom'; 
import { render } from '@testing-library/react';

 class Main extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      firstName : '',
      lastName : '',
      age : '' , 
      email : '' ,
      gender : '' 
  }
    this.state={
    redirect : false 
  }
  this.handleChange = this.handleChange.bind(this);
}

handleChange (evt) {
  this.setState({ [evt.target.name]: evt.target.value });
}

onSubmit(){
  this.setState={
    redirect : true 
  }

}

  render () {
    return (
       <div>
         
         

      {(this.state.redirect ===false )?
        <div><form onSubmit={this.onSubmit}>
        <h1>Create Account</h1>
        <label >
          First name:
          <input name="firstName" value={this.state.firstName} onChange={this.handleChange} required />
        </label>
        
        <label>
          Last name:
          <input name="lastName" value={this.state.lastName} onChange={this.handleChange} required />
        </label>
        
        <label>
          Age:
          <input name="age" value={this.state.age} onChange={this.handleChange} required />
        </label>
        
        <label>
          Email:
          <input name="email" type="email" value={this.state.email} onChange={this.handleChange} required />
        
        </label>
      
        <label>
          Gender:
          <input name="gender"  value={this.state.gender} onChange={this.handleChange} required />
        </label>
      
        <button type='submit' >Submit</button>
  
        </form>
        </div>
      :
      
        <div>
        {this.state.firstName}
        {this.state.lastName}
        {this.state.age}
        {this.state.email}
        {this.state.gender}
        </div>
      
      }
      
    </div>
     
    )
    
  }
  
}


export default Main;
