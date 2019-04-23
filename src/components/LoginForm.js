import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  login = (e) => {
    e.preventDefault()
    if(this.state.username && this.state.password){
      this.props.handleLogin(e)
    }
  }

  render() {
    return (
      <form onSubmit={(e)=>this.login(e)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={(e) => this.handleChange(e)} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={(e) => this.handleChange(e)} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
