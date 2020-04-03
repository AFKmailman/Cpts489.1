import React from 'react';
import NavBar from './NavBar.js';
import LoginPage from './LoginPage.js';
import MoviePage from './MoviePage.js';
import AddPage from './AddPage.js';
import InfoPage from './InfoPage.js';
import SideMenu from './SideMenu.js';
import ModeBar from './ModeBar.js';
import AppMode from '../AppMode.js';
import MovieRefresh from './MovieRefresh.js';
import CreateAccountPage from './CreateAccountPage.js';
import ResetPasswordPage from './ResetPasswordPage.js';

const modeTitle = {};
modeTitle[AppMode.LOGIN] = "Welcome";
modeTitle[AppMode.MOVIE] = "Movie Table";
modeTitle[AppMode.MOVIE_EDIT] = "Edit Movie";
modeTitle[AppMode.MOVIE_LOG] = "Add Movie";
modeTitle[AppMode.MOVIE_INFO] = "Addition Info";
modeTitle[AppMode.MOVIER] = "REFRESHING";
modeTitle[AppMode.CREATE_ACCOUNT] = " Create Account";
modeTitle[AppMode.RESET_PASSWORD] = "Reset Password";

const modeToPage = {};
modeToPage[AppMode.LOGIN] = LoginPage;
modeToPage[AppMode.MOVIE] = MoviePage;
modeToPage[AppMode.MOVIE_EDIT] = AddPage;
modeToPage[AppMode.MOVIE_LOG] = AddPage;
modeToPage[AppMode.MOVIE_INFO] = InfoPage;
modeToPage[AppMode.MOVIER] = MovieRefresh;
modeToPage[AppMode.CREATE_ACCOUNT] = CreateAccountPage;
modeToPage[AppMode.RESET_PASSWORD] = ResetPasswordPage;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: AppMode.LOGIN,
      menuOpen: false,
      userId: "",
      showAbout: false
    };
  }

  handleChangeMode = (newMode) => {
    this.setState({ mode: newMode });
  }

  openMenu = () => {
    this.setState({ menuOpen: true });
  }

  closeMenu = () => {
    this.setState({ menuOpen: false });
  }

  toggleMenuOpen = () => {
    this.setState(prevState => ({ menuOpen: !prevState.menuOpen }));
  }

  setUserId = (Id) => {
    this.setState({ userId: Id });
  }

  componentDidMount() {
    window.addEventListener("click", this.handleClick);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleClick);
  }

  handleClick = (event) => {
    if (this.state.menuOpen) this.closeMenu();
    event.stopPropagation();
  }

  toggleAbout = () => {
    this.setState(prevState => ({ showAbout: !prevState.showAbout }));
  }

  renderAbout = () => {
    return (
      <div id="aboutModal" className="modal">
        <div className="modal-content">
          <header><h2>About</h2></header>
          <br></br>
          
          <p>This application is used for storing movie data.</p>
          <span id="modal-close-id" className="modal-close" onClick={this.toggleAbout}>OK</span>
        </div>
      </div>
    );
  }

  render() {
    const ModePage = modeToPage[this.state.mode];
    return (
      <div onClick={this.handleClick}>
        <NavBar 
          title={modeTitle[this.state.mode]}
          mode={this.state.mode}
          changeMode={this.handleChangeMode}
          menuOpen={this.state.menuOpen}
          toggleMenuOpen={this.toggleMenuOpen}/>
        <SideMenu 
          mode={this.state.mode}
          menuOpen={this.state.menuOpen}
          changeMode={this.handleChangeMode}
          userId={this.state.userId}
          showAbout={this.toggleAbout}/>
        <ModeBar 
          mode={this.state.mode} 
          changeMode={this.handleChangeMode}
          menuOpen={this.state.menuOpen}/>
        <ModePage menuOpen={this.state.menuOpen}
          mode={this.state.mode} 
          changeMode={this.handleChangeMode}
          userId={this.state.userId}
          setUserId={this.setUserId}/>
        {this.state.showAbout ? this.renderAbout() : null}
      </div>
    );
  }
}

export default App;
