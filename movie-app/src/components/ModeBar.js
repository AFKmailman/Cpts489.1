import React from 'react';
import AppMode from '../AppMode.js';

class ModeBar extends React.Component {
    handleModeBtnClick = (newMode) => {
        if (this.props.mode != newMode) {
            this.props.changeMode(newMode);
        }
    }

    render() {
        return (
            <div className={"modebar " + (this.props.mode === AppMode.LOGIN ? "invisible" : "visible")}>
                <a className={"modebar-btn" + (this.props.mode === AppMode.MOVIE ? " modebar-item-selected" : "")} onClick={this.props.menuOpen ? null : () => this.handleModeBtnClick(AppMode.MOVIE)}>
                    <span className="modebar-icon nonMenuItem fa fa-th-list"></span>
                    <span className="modebar-text">Movie</span>
                </a>
                <a className={"modebar-btn" + (this.props.mode === AppMode.MOVIE_INFO ? " modebar-item-selected" : "")} onClick={this.props.menuOpen ? null : () => this.handleModeBtnClick(AppMode.MOVIE_INFO)}>
                    <span className="modebar-icon nonMenuItem fa fa-th-list"></span>
                    <span className="modebar-text">Movie Info</span>
                </a>
            </div>
        );
    }
}

export default ModeBar;