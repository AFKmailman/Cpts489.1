import React from 'react';
import AppMode from '../AppMode.js';
import App from './App.js';

class AddPage extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.mode === AppMode.MOVIE_LOG) {
            this.state = {
                title: "",
                productionCompany: "",
                length: 0,
                genre: "",
                budget: 0,
                releaseDate: "",
                faIcon: "fa fa-save",
                btnLabel: "Save Info"
            }
        }
        else {
            console.log(this.props);
            let i = localStorage.getItem(this.props.userId+"_index");
            let tInfo = JSON.parse(localStorage.getItem(this.props.userId));
            this.state = {
                title: tInfo.movieData[i].title,
                productionCompany: tInfo.movieData[i].productionCompany,
                length: tInfo.movieData[i].length,
                genre: tInfo.movieData[i].genre,
                budget: tInfo.movieData[i].budget,
                releaseDate: tInfo.movieData[i].releaseDate,
                faIcon: "fa fa-edit",
                btnLabel: "Update Info"
            } 
            
        }
    }

    saveData = (data) => {
        console.log(data);
        console.log(this.props.userId);
        let tInfo = JSON.parse(localStorage.getItem(this.props.userId));
        if(this.props.mode === AppMode.MOVIE_EDIT){
            let i = localStorage.getItem(this.props.userId+"_index");
            tInfo.movieData.splice(i, 1);
        }
        console.log(tInfo);
        if (tInfo == null) {
            let ttInfo = {
                "movieData":[]
            }
            ttInfo["movieData"].push(data)

            localStorage.setItem(this.props.userId, JSON.stringify(ttInfo));
        }
        else {
            tInfo.movieData.push(data);
            localStorage.setItem(this.props.userId, JSON.stringify(tInfo));
        }
        this.props.changeMode(AppMode.MOVIE);
    }

    handleChange = (event) => {
        const name = event.target.name;
        this.setState({ [name]: event.target.value });
    }

    handleSubmit = (event) => {
        //start spinner
        this.setState({
            faIcon: "fa fa-spin fa-spinner",
            btnLabel: (this.props.mode === AppMode.MOVIE_LOG ?
                "Saving..." : "Updating...")
        });
        //Prepare current round data to be saved
        let movieData = this.state;
        delete movieData.faIcon;
        delete movieData.btnLabel;
        //call saveRound on 1 second delay to show spinning icon
        setTimeout(this.saveData, 1000, movieData);
        event.preventDefault();
    }


    render() {
        return (
            <div className="padded">
                <form onSubmit={this.handleSubmit}>
                    <center>
                        <label>
                            Title:
                            <input name="title" className="form-control form-center" type="text" value={this.state.title} onChange={this.handleChange} />
                        </label>
                        <p></p>
                        <label>
                            Production Company:
                            <input name="productionCompany" className="form-control form-center" type="text" value={this.state.productionCompany} onChange={this.handleChange} />
                        </label>
                        <p></p>
                        <label>
                            Length:
                            <input name="length" className="form-control form-center" type="number" value={this.state.length} onChange={this.handleChange} />
                        </label>
                        <p></p>
                        <label>
                            Genre:
                            <input name="genre" className="form-control form-center" type="text" value={this.state.genre} onChange={this.handleChange} />
                        </label>
                        <p></p>
                        <label>
                            Budget:
                            <input name="budget" className="form-control form-center" type="number" value={this.state.budget} onChange={this.handleChange} />
                        </label>
                        <p></p>
                        <label>
                            Release Date:
                            <input name="releaseDate" className="form-control form-center" type="text" value={this.state.releaseDate} onChange={this.handleChange} />
                        </label>
                        <p></p>
                        <p></p>
                        <button type="submit" className="btn btn-primary btn-color-theme"><span className={this.state.faIcon}>&nbsp;{this.state.btnLabel}</span></button>
                    </center>
                </form>
            </div>
        );
    }
}

export default AddPage;