import React from 'react';
import $ from 'jquery';
import AppMode from '../AppMode.js';

class MovieRefresh extends React.Component {
    componentDidMount(){
        this.props.changeMode(AppMode.MOVIE)
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default MovieRefresh;