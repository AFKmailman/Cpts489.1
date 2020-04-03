import React from 'react';
import AppMode from '../AppMode.js';

class SideMenu extends React.Component {


    renderModeMenuItems = () => {
        if (this.props.mode === AppMode.MOVIE) {
            return (
                <div>
                    <a className="sideMenuItem" onClick={()=> {this.props.changeMode(AppMode.MOVIE_LOG)}}>
                        <span className="fa fa-plus"></span>
                        &nbsp;Add Movie
                    </a>
                </div>
            );
        }
        else {
            return null;
        }
    }

    render() {
        return (
            <div className={"sidemenu " + (this.props.menuOpen ? "sidemenu-open" : "sidemenu-closed")} >
                <div className="sidemenu-title">
                    <img src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/7/2/3/4/634327-1-eng-GB/Middle-Eastern-wars-hit-Moldovan-lamb-export-sales_wrbm_large.jpg" height="40px" width="40px"></img>
                    <span id="userID" className="userIdText">{this.props.userId}</span>
                </div>
                {this.renderModeMenuItems()}
                <a id='about' className="aboutMenuItem menuItem" onClick={this.props.showAbout}><span className="fa fa-angle-right">&nbsp;About&nbsp;</span></a>
                <a id="logout" className="logoutMenuItem menuItem" onClick={() => {this.props.changeMode(AppMode.LOGIN)}}><span className="fa fa-angle-right">&nbsp;Logout&nbsp;</span></a>
            </div>
        );
    }
}

export default SideMenu;
