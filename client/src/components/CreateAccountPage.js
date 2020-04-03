import React from 'react';
import AppMode from '../AppMode.js';

class CreateAccountPage extends React.Component {
    constructor(props) {
        super(props);
        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
        this.repeatPasswordRef = React.createRef();
        this.securityQuestionRef = React.createRef();
        this.securityAnswerRef = React.createRef();
        this.state = {
            email: "",
            password: "",
            repeatPassword: "",
            securityQuestion: "",
            securityAnswer: "",
            profileImageUrl: ""
        }
    }

    saveData = (data) => {
        
    }

    handleSubmit = (event) => {
        // let mData = this.state;
        event.preventDefault();

        if(this.passwordRef.current.value === this.repeatPasswordRef.current.value) {
            if(this.securityQuestionRef.current.value !== "" && this.securityAnswerRef.current.value !== ""){
                let data = {
                    movieData:[],
                    accountInfo: {
                        provider: 'mySite',
                        password: this.passwordRef.current.value,
                        securityQuestion: this.securityQuestionRef.current.value,
                        securityAnswer: this.securityAnswerRef.current.value,
                        profileImageUrl: ""
                    }
                }
                localStorage.setItem(this.emailRef.current.value, JSON.stringify(data));
                alert("Account has been created");
                this.props.changeMode(AppMode.LOGIN);
            }
            else{
                alert("Account has not been created. missing information");
            }
        }
        else{
            alert("password and repeat password do not match.");
        }
        
    }

    handleChange = (event) => {
        const name = event.target.name;
        //console.log("name: " + name);
        //console.log("eventName: " + event.target.name);
        this.setState({ [name]: event.target.value });
    }

    goBack = () => {
        this.props.changeMode(AppMode.LOGIN);
    }

    render() {
        return(
            <div className="padded">
                <form onSubmit={this.handleSubmit}>
                    <center>
                        <label>
                            Email:
                            <input 
                                name='email' 
                                ref={this.emailRef}
                                className="form-control form-center" 
                                type='text'
                                type="email"
                                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
                                required={true} />
                        </label>
                        <br/>
                        <label>
                            Password:
                            <input 
                                ref={this.passwordRef} 
                                name='password'  
                                type="password" 
                                className="form-control form-center" 
                                pattern="([A-Za-z0-9!@#$%^*]){4,}"
                                required={true}
                            />
                        </label>
                        <br/>
                        <label>
                            Repeat Password:
                            <input 
                                ref={this.repeatPasswordRef} 
                                name='repeatPassword' 
                                type="password" 
                                className="form-control form-center" 
                                type='password' 
                                pattern="([A-Za-z0-9!@#$%^*]){4,}"
                                required={true}
                                />
                        </label>
                        <br/>
                        <label>
                            Security Question:
                            <input 
                                ref={this.securityQuestionRef}
                                name='securityQuestion' 
                                className="form-control form-center" 
                                type='text' 
                                required={true}
                            />
                        </label>
                        <br/>
                        <label>
                            Answer to Security Question:
                            <input 
                                ref={this.securityAnswerRef}
                                name='securityAnswer' 
                                className="form-control form-center" 
                                type='text' 
                                required={true}
                            />
                        </label>
                        <br/>
                        <button type="submit" className="btn btn-primary btn-color-theme"><span>&nbsp;Create Account</span></button>

                    </center>
                </form>
                <button className="btn btn-primary btn-color-theme" onClick={this.goBack}><span>&nbsp;Go Back</span></button>
            </div>
        );
    }
}

export default CreateAccountPage;