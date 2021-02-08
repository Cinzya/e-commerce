import React, { Component } from 'react';
import './sign-in.styles.scss';


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }
    
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with yor email and password</span>

                <form>
                    <input type="text" name="email" id="" value={this.state.email} required/>
                    <label htmlFor="">Email</label>
                    <input type="passwort" name="password" id="" value={this.state.password} required/>
                    <label htmlFor="">Password</label>

                    <input type="submit" name="" id="" value="Submit Form"/>
                </form>
            </div>
        );
    }
}

export default SignIn;