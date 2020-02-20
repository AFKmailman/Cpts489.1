import React from 'react';
import AppMode from '../AppMode.js';

class NavBar extends React.Component {

    handleMenuBtnClick = () => {
        if(this.props.mode === AppMode.MOVIE_EDIT || this.props.mode === AppMode.MOVIE_LOG) {
            this.props.changeMode(AppMode.MOVIE);
        }
        else if (this.props.mode != AppMode.LOGIN){
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
            <div id="navBar" className="navbar">
                <span className="navbarItems">
                    <button id="menuBtn" onClick={this.handleMenuBtnClick}>
                        <span id="menuBtnIcon" className={'menuBtnIcon' + this.getMenuBtnIcon()}></span>
                    </button>
                    <span id="topBarTitle">&nbsp;&nbsp;&nbsp;{this.props.title}&nbsp;&nbsp;&nbsp;</span>
                </span>
            </div>
        )
    }
}

export default NavBar;