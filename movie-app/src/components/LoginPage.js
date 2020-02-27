import React from 'react';
import AppMode from '../AppMode.js';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.emailInputRef = React.createRef();
        this.passwordInputRef = React.createRef();
        this.state = {
            loginBtnIcon: "fa fa-sign-in",
            loginBtnLabel: "Log In",
            accountName: "",
            accountPassword: ""
        }
    }

    componentDidMount() {
        this.emailInputRef.current.focus();
    }

    handleLogin = () => {
        this.setState({
            loginBtnIcon: "fa fa-sign-in",
            loginBtnLabel: "Log In"
        });
        this.props.setUserId(this.emailInputRef.current.value);
        let tInfo = localStorage.getItem(this.props.userId);
        if (tInfo == null) {
            let ttInfo = {
                "movieData":[]
            }
            //ttInfo["movieData"].push({"title":"","productionCompany":"","length":"","genre":"","budget":"","releaseDate":""})

            localStorage.setItem(this.props.userId, JSON.stringify(ttInfo));
        }
        this.props.changeMode(AppMode.MOVIE);
    }

    handleLoginSubmit = (event) => {
        event.preventDefault();
        this.setState({
            loginBtnIcon: "fa fa-spin fa-spinner",
            loginBtnLabel: "Logging In..."
        });

        setTimeout(this.handleLogin, 1000);
    }

    render() {
        return (
            <div id="login-mode-div" className="padded-page">
                <center>
                    <h1 />
                    <form onSubmit={this.handleLoginSubmit} onChange={this.handleLoginChange}>
                        <label htmlFor="emailInput" style={{ padding: 0, fontSize: 24 }}>
                            Email:
                    <input
                                ref={this.emailInputRef}
                                className="form-control login-text"
                                type="email"
                                placeholder="Enter Email Address"
                                id="emailInput"
                                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
                                required={true}
                            />
                        </label>
                        <p />
                        <label htmlFor="passwordInput" style={{ padding: 0, fontSize: 24 }}>
                            Password:
                    <input
                                ref={this.passwordInputRef}
                                className="form-control login-text"
                                type="password"
                                placeholder="Enter Password"
                                pattern="([A-Za-z0-9!@#$%^*]){4,}"
                                required={true}
                            />
                        </label>
                        {/*<p>Password must be at least 8 chars long and contain at least 1 of the following: lower case, upper case, number special character</p>*/}
                        <p className="bg-danger" id="feedback" style={{ fontSize: 16 }} />
                        <button
                            type="submit"
                            className="btn-color-theme btn btn-primary btn-block login-btn">
                            <span className={this.state.loginBtnIcon} />
                            &nbsp;{this.state.loginBtnLabel}
                        </button>
                        <br />

                    </form>
                </center>
            </div>
        );
    }
}

export default LoginPage;