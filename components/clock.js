class Clock extends React.Component {
    //simple constructor
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    //gotta set that interval to update it once it is loaded on the screen
    componentDidMount() {
        this.timer = setInterval(() => this.updateTime(), 1000);
    }

    //clears the timer when the dom leaves the screen
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    //just sets a new date object
    updateTime() {
        this.setState({
            date: new Date()
        });
    }

    //puts it on the screen
    render() {
        return (
            <div className="col" >
                <h4>{this.state.date.toLocaleTimeString()}</h4>
            </div>
        )
    }

}

//places it into the clockDiv
ReactDOM.render(<Clock />, document.getElementById("clockDiv"));