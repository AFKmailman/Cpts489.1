import React from 'react';
import AppMode from '../AppMode.js';
import App from './App.js';

class NavBar extends React.Component {

    handleMenuBtnClick = () => {
        if(this.props.mode === AppMode.MOVIE_EDIT || this.props.mode === AppMode.MOVIE_LOG) {
            this.props.changeMode(AppMode.MOVIE);
        }
        else if (this.props.mode === AppMode.CREATE_ACCOUNT || this.props.mode === AppMode.RESET_PASSWORD){
            this.props.changeMode(AppMode.LOGIN);
        }
        else if (this.props.mode != AppMode.LOGIN || this.props.mode != AppMode.CREATE_ACCOUNT || this.props.mode != AppMode.RESET_PASSWORD){
            this.props.toggleMenuOpen();
        }
    }

    getMenuBtnIcon = () => {
        if (this.props.mode === AppMode.MOVIE_LOG || this.props.mode === AppMode.MOVIE_EDIT) {
            return "fa fa-arrow-left";
        }
        if (this.props.menuOpen) {
            return "fa fa-times";
        }
        return "fa fa-bars";
    }

    render() {
        return (
            <div id="navbar" className="navbar">
                <span className="navbar-items">
                    <button id="sidemenu-btn" onClick={this.handleMenuBtnClick}>
                        <span id="sidemenu-btn-icon" className={'sidemenu-btn-icon ' + this.getMenuBtnIcon()}></span>
                    </button>
                    <span id="topBarTitle" className="navbar-title">&nbsp;&nbsp;&nbsp;{this.props.title}&nbsp;&nbsp;&nbsp;</span>
                </span>
            </div>
        )
    }
}

export default NavBar;