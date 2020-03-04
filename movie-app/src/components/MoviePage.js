import React from 'react';
import $ from 'jquery';
import AppMode from '../AppMode.js';
import FloatingButton from './FloatingButton.js';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
class MoviePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: JSON.parse(localStorage.getItem(this.props.userId))
        }
    }

    setRows = (t) => {
        this.setState(
            {
                rows: t
            }
        )
    }

    componentDidMount() {
        console.log(this.props.userId);
        let tInfo = localStorage.getItem(this.props.userId);
        if (tInfo == null || tInfo.length == 0) {
            //tInfo = JSON.parse(tInfo);
            //console.log(tInfo);
            //let temp = this.state.rows.movieData[0].title;
            //console.log("temp:"+temp);
            let inH = "<tr><td>No</td><td>Info</td><td>To</td><td>Be</td><td>Displayed</td><td>:(</td></tr>";
            let tempp = {
                "movieData": [
                    {
                        "title": "no",
                        "productionCompany": "Information",
                        "length": "To",
                        "genre": "Display,",
                        "budget": "Sorry",
                        "releaseDate": ":("
                    }
                ]
            }
            this.setState({rows: tempp });
            // let t = 0;
            // for (let i = 0; i < tInfo.movieData.length; i++) {
            //     //t = tInfo[i].id;
            //     inH += "<tr>\n";
            //     //inH += "<td>" + tInfo[i].id + "</td>\n";
            //     inH += "<td>" + tInfo.movieData[i].title + "</td>\n";
            //     inH += "<td>" + tInfo.movieData[i].productionCompany + "</td>\n";
            //     inH += "<td>" + tInfo.movieData[i].length + "</td>\n";
            //     inH += "<td>" + tInfo.movieData[i].genre + "</td>\n";
            //     inH += "<td>" + tInfo.movieData[i].budget + "</td>\n";
            //     inH += "<td>" + tInfo.movieData[i].releaseDate + "</td>\n";
            //     inH += "<td>" + "<button onclick='editViewRecordData(" + t.toString() + ")'>View/Edit</button>" + "</td>\n";
            //     inH += "<td>" + "<button onclick='deleteRecird(" + t.toString() + ")'>Delete</button>" + "</td>\n";
            //     inH += "</tr>";
            // }
            $('#movieDataTable')[0].tBodies[0].innerHTML = inH;
        }
    }

    testFunction(t) {
        console.log("t:"+t);
    }

    deleteItem(t){
        let tInfo = JSON.parse(localStorage.getItem(this.props.userId));
        tInfo.movieData.splice(t, 1);
        localStorage.setItem(this.props.userId, JSON.stringify(tInfo));
        this.props.changeMode(AppMode.MOVIER);
        this.forceUpdate();
    }

    goToEdit(t) {
        localStorage.setItem(this.props.userId+"_index", t);
        this.props.changeMode(AppMode.MOVIE_EDIT)
    }

    render() {
        return (
            <div>
                <div className="padded">
                    <h1>Movie Data Table</h1>
                    <div className="tableDiv">
                        <h3>could not get it to print no data to show. should be fine</h3>
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
                                { this.state.rows.movieData.map((r, index) => (
                                    <tr>
                                        <td>
                                            {r.title}
                                        </td>
                                        <td>
                                            {r.productionCompany}
                                        </td>
                                        <td>
                                            {r.length}
                                        </td>
                                        <td>
                                            {r.genre}
                                        </td>
                                        <td>
                                            {r.releaseDate}
                                        </td>
                                        <td>
                                            <EditButton handleClick={() => this.goToEdit(index)} data={this.state.rows} iIndex={index}/>
                                        </td><td>
                                            <DeleteButton handleClick={() => this.deleteItem(index)} iIndex={index}/>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <FloatingButton handleClick={() => this.props.changeMode(AppMode.MOVIE_LOG)} menuOpen={this.props.menuOpen} icon={"fa fa-plus"} userId={this.props.userId} />
            </div>
        );
    }
}

export default MoviePage;