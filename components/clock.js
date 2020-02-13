class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timer = setInterval(() => this.updateTime(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    updateTime() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h3>Current time: {this.state.date.toString()}</h3>
            </div>
        )
    }

}

ReactDOM.render(<Clock />, document.getElementById("root"))