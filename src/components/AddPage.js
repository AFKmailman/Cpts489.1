import React from 'react';
import AppMode from '../AppMode.js';

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
            this.state = this.props.data;
            this.state.faIcon = "fa fa-edit";
            this.state.btnLabel = "Update Info"
        }
    }

    saveData = (data) => {
        console.log(data);
        console.log(this.props.userId);
        localStorage.setItem(this.props.userId, JSON.stringify(data));
        this.props.changeMode(AppMode.MOVIE);
    }

    handleChange = (event) => {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
    }

    handleSubmit = (event) => {
        //start spinner
        this.setState({faIcon: "fa fa-spin fa-spinner",
                       btnLabel: (this.props.mode === AppMode.ROUNDS_LOGROUND ? 
                                    "Saving..." : "Updating...")});
        //Prepare current round data to be saved
        let movieData = this.state;
        delete movieData.faIcon;
        delete movieData.btnLabel;
        //call saveRound on 1 second delay to show spinning icon
        setTimeout(this.saveData,1000,movieData); 
        event.preventDefault(); 
      }
    

    render() {
        return (
            <div className="padded">
                <form onSubmit={this.handleSubmit}>
                    <center>
                        <label>
                            Title:
                            <input name="title" className="form-control form-center" type="text" value={this.props.title} onChange={this.handleChange}/>
                        </label>
                        <p></p>
                        <label>
                            Production Company:
                            <input name="productionCompany" className="form-control form-center" type="text" value={this.props.productionCompany} onChange={this.handleChange}/>
                        </label>
                        <p></p>
                        <label>
                            Length:
                            <input name="length" className="form-control form-center" type="number" value={this.props.length} onChange={this.handleChange}/>
                        </label>
                        <p></p>
                        <label>
                            Genre:
                            <input name="genre" className="form-control form-center" type="text" value={this.props.genre} onChange={this.handleChange}/>
                        </label>
                        <p></p>
                        <label>
                            Budget:
                            <input name="budget" className="form-control form-center" type="number" value={this.props.budget} onChange={this.handleChange}/>
                        </label>
                        <p></p>
                        <label>
                            Release Date:
                            <input name="releaseDate" className="form-control form-center" type="text" value={this.props.releaseDate} onChange={this.handleChange}/>
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