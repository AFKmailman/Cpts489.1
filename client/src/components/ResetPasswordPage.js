import React from 'react';
import AppMode from '../AppMode.js';

class ResetPasswordPage extends React.Component {
    constructor(props) {
        super(props);
        this.emailRef = React.createRef();
        this.securityAnswerRef = React.createRef();
        this.passwordRef = React.createRef();
        this.repeatPasswordRef = React.createRef();
        this.state = {
            question:"",
            showLookUp: true,
            showAnswerDiv: false,
            showResetDiv: false
        }
    }

    componentDidMount() {
        
    }

    handleLookUpSubmit = (event) => {
        event.preventDefault();
        let data = JSON.parse(localStorage.getItem(this.emailRef.current.value));
        if (data != null) {
            this.setState({
                showLookUp: false,
                showAnswerDiv: true,
                question: data.accountInfo.securityQuestion
            });
        }
        else {
            alert("can not find account.")
        }
    }

    handleAnswerSubmit = (event) => {
        event.preventDefault();
        let data = JSON.parse(localStorage.getItem(this.emailRef.current.value));
        if (data != null){
            if (data.accountInfo.securityAnswer == this.securityAnswerRef.current.value) {
                this.setState({
                    showResetDiv: true,
                    showAnswerDiv: false
                });
            }
            else{
                alert("incorrect answer");
            }
        }
        else{
            this.props.changeMode(AppMode.LOGIN);
        }
    }

    handleResetSubmit = (event) => {
        event.preventDefault();
        let data = JSON.parse(localStorage.getItem(this.emailRef.current.value));
        if (data != null){
            if (this.passwordRef.current.value == this.repeatPasswordRef.current.value) {
                data.accountInfo.password = this.passwordRef.current.value;
                localStorage.setItem(this.emailRef.current.value, JSON.stringify(data));
                this.props.changeMode(AppMode.LOGIN);
            }
            else{
                alert("passwords do not match");
            }
        }
        else{
            this.props.changeMode(AppMode.LOGIN);
        }
    }

    render() {
        return (
            <div className="padded">
                <div id="lookUpDiv" className={"padded " + (this.state.showLookUp ? null : ' hide ')}>
                    <form onSubmit={this.handleLookUpSubmit}>
                        <center>
                            <h3>Look Up Email</h3>
                            <label>
                                <input 
                                    name='email' 
                                    ref={this.emailRef}
                                    className="form-control form-center" 
                                    type='text'
                                    type="email"
                                    pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
                                    required={true}
                                />
                            </label>
                            <br/>
                            <button type="submit" className="btn btn-primary btn-color-theme"><span>Look Up Email</span></button>
                        </center>
                    </form>
                </div>
                <div id="answerDiv" className={"padded " + (this.state.showAnswerDiv ? null : ' hide ')}>
                    <form onSubmit={this.handleAnswerSubmit}>
                        <center>
                            <h3>Security Question:</h3>
                            <h5>{this.state.question}</h5>
                            <br/>
                            <h3>Security Question Answer:</h3>
                            <label>
                                <input 
                                    name='answer'
                                    ref={this.securityAnswerRef}
                                    type='text'
                                />
                            </label>
                            <br/>
                            <button type='submit' className='btn btn-primary btn-color-theme'><span>Verify Answer</span></button>
                        </center>
                    </form>
                </div>
                <div id="resetDiv" className={"padded " + (this.state.showResetDiv ? null : ' hide ')}>
                    <form onSubmit={this.handleResetSubmit}>
                        <center>
                            <h3>New Password:</h3>
                            <label>
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
                            <h3>Repeat New Password:</h3>
                            <label>
                                <input 
                                    ref={this.repeatPasswordRef} 
                                    name='repeatPassword'  
                                    type="password" 
                                    className="form-control form-center" 
                                    pattern="([A-Za-z0-9!@#$%^*]){4,}"
                                    required={true}
                                />
                            </label>
                            <br/>
                            <button type='submit' className='btn btn-primary btn-color-theme'><span>Change Password</span></button>
                        </center>
                    </form>
                </div>
            </div>
        );
    }
}

export default ResetPasswordPage;