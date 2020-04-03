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
            githubIcon: "fa fa-github",
            githubLabel: "Sign In with GitHub",
            accountName: "",
            accountPassword: ""
        }
    }

    componentDidMount() {
        this.emailInputRef.current.focus();
        window.addEventListener("click", this.handleClick);
        if (!this.state.authenticated) {
            fetch("/auth/test")
            .then((response) => response.json())
            .then((obj) => {
                if (obj.isAuthenticated) {
                    //change local storage to get userdata
                    let data = JSON.parse(localStorage.getItem(obj.user.id));
                    console.log(obj.user.id)
                    if (data == null){
                        data = {
                            accountInfo: {
                                provider: obj.user.provider,
                                password: '',
                                securityQuestion: '',
                                securityAnswer: '',
                                profileImageUrl: obj.user.profileImageUrl
                            },
                            movieData: []
                        };
                        console.log(data);
                        localStorage.setItem(obj.user.id, JSON.stringify(data));//"{\"movieData\":[],\"accountInfo\":[]}");
                    }
                    
                    // if(!data.hasOwnProperty(obj.user.id)) {
                    //     data = {
                    //         accountInfo: {
                    //             provider: obj.user.provider,
                    //             password: '',
                    //             securityQuestion: '',
                    //             securityAnswer: ''
                    //         },
                    //         movieData: []
                    //     };
                    //     localStorage.setItem("movieAppUserData", JSON.stringify(data));
                    // }
                    this.setState({
                        authenticated: true,
                        user: obj.user,
                        mode: AppMode.MOVIE
                    });
                    this.props.setUserId(obj.user.id);
                    this.props.changeMode(AppMode.MOVIE);
                }
            });
        }
    }

    handleLogin = () => {
        this.setState({
            loginBtnIcon: "fa fa-sign-in",
            loginBtnLabel: "Log In"
        });
        this.props.setUserId(this.emailInputRef.current.value);
        let tInfo = JSON.parse(localStorage.getItem(this.props.userId));
        
        if(tInfo != null){
            if(tInfo.accountInfo.password == this.passwordInputRef.current.value){
                this.props.changeMode(AppMode.MOVIE);
            }
            else{
                alert("incorrect Login info");
                this.props.changeMode(AppMode.LOGIN);
            }
        }
        else{
            this.props.changeMode(AppMode.LOGIN);
        }
        
        
        
        
        
        // if (tInfo === null) {
        //     // let ttInfo = {
        //     //     "movieData":[]
        //     // }
        //     //ttInfo["movieData"].push({"title":"","productionCompany":"","length":"","genre":"","budget":"","releaseDate":""})

        //     localStorage.setItem(this.props.userId, "{\"movieData\":[],\"accountInfo\":{}}");
        // }
        // this.props.changeMode(AppMode.MOVIE);
    }

    handleLoginSubmit = (event) => {
        event.preventDefault();
        this.setState({
            loginBtnIcon: "fa fa-spin fa-spinner",
            loginBtnLabel: "Logging In..."
        });

        setTimeout(this.handleLogin, 1000);
    }

    handleOAuthLogin = (provider) => {
        window.open('/auth/'+provider, "_self");
    }

    handleOAuthLoginClick = (provider) => {
        this.setState({[provider+"Icon"] : "fa fa-spin fa-spinner",
        [provider+"label"] : "Connecting..."});
        console.log('/auth/'+provider);
        setTimeout(() => this.handleOAuthLogin(provider), 1000);
    }

    handleCreateAccount = () => {
        this.props.changeMode(AppMode.CREATE_ACCOUNT);
    }

    handleResetPassword = () => {
        this.props.changeMode(AppMode.RESET_PASSWORD);
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
                        <button type="button" className="btn-color-theme btn btn-github btn-primary" onClick={()=>this.handleOAuthLoginClick("github")}>
                            <span className={this.state.githubIcon}></span>&nbsp;{this.state.githubLabel}
                        </button>
                        <br />
                        <br />
                        <button type="button" className="btn-color-theme btn btn-primary" onClick={()=>this.handleCreateAccount()}>
                            &nbsp;Create&nbsp;Account&nbsp;
                        </button> 
                        <button type="button" className="btn-color-theme btn btn-primary " onClick={()=>this.handleResetPassword()}>
                            &nbsp;Reset&nbsp;Password&nbsp;
                        </button>
                    </form>
                </center>
            </div>
        );
    }
}

export default LoginPage;