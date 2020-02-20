import React from 'react';
import AppMode from '../AppMode.js';
import FloatingButton from './FloatingButton.js';
class MoviePage extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <div className="padded">
                    <h1>Movie Data Table</h1>
                    <div className="tableDiv">
                        <table id='movieDataTable' className="movieDataTableClass">
                            <thead>
                                <tr>
                                    <td>Title</td>
                                    <td>Production Company</td>
                                    <td>Length</td>
                                    <td>Genre</td>
                                    <td>Budget</td>
                                    <td>Release Date</td>
                                    <td>View/Edit</td>
                                    <td>Delete</td>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {/*<tr>
                                    <td>Toy Story</td>
                                    <td>1</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>6</td>
                                    <td><button onclick="openModal()">View</button></td>
                                    <td><button>Delete</button></td>
                                </tr>*/}
                                <tr>
                                    <td>No</td>
                                    <td>Info</td>
                                    <td>To</td>
                                    <td>Be</td>
                                    <td>Displayed</td>
                                    <td>:(</td>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <FloatingButton handleClick={()=>this.props.changeMode(AppMode.MOVIE_LOG)} menuOpen={this.props.menuOpen} icon={"fa fa-plus"} userId={this.props.userId}/>
            </div>
        );
    }
}

export default MoviePage;