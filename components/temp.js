class Temp extends React.Component {
    //constructor to set my shit up correctly
    constructor(props) {
        super(props);
        this.state = {
            temp: 68,
            unit: 1,
            uUnit: 'F'
        };
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    //handles the up arrow click. will disable buttons and re-enable them if needed. caps at 80
    buttonClickUp(a) {
        if (a <= 80) {
            if (a == 80) document.getElementById('tempBtnUp').classList.add("disabled");
            if (a != 50) document.getElementById('tempBtnDown').classList.remove("disabled");
            this.setState({
                temp: a
            })
        }
    }

    //handles the down arrow click. will disable buttons and re-enable them if needed. caps at 50
    buttonClickDown(a) {
        if (a >= 50) {
            if (a == 50) document.getElementById('tempBtnDown').classList.add("disabled");
            if (a != 80) document.getElementById('tempBtnUp').classList.remove("disabled");
            this.setState({
                temp: a
            })
        }
    }

    //just changes the units on the UI where they need to change
    changeUnit(a) {
        let t = a % 2;
        if (a % 2 == 0) {
            document.getElementById('unitButton').innerHTML = '&#8451;';
            document.getElementById('unitButton').classList.remove('btn-success');
            document.getElementById('unitButton').classList.add('btn-info');


            this.setState({
                uUnit: 'C',
                unit: t
            })
        }
        else {
            document.getElementById('unitButton').innerHTML = '&#8457;';
            document.getElementById('unitButton').classList.remove('btn-info');
            document.getElementById('unitButton').classList.add('btn-success');
            this.setState({
                uUnit: 'F',
                unit: t
            })
        }
    }

    //just converts the units from F to C
    convert(a, b) {
        if (!a) return ((b - 32) / (9 / 5)).toFixed(1);
        return b;
    }


    //not sure how to comment the shit below but it works. i make the conversion before i add the element so i can have an appropriate temp. all increments are done in F and then converted. no whole numbers for C
    render() {
        return (
            <div className="col centered" >
                <div className="row">
                    <div className="col-md-7"><h4>{this.convert(this.state.unit, this.state.temp)}°{this.state.uUnit}</h4></div>
                    <div className="col-md-0">
                        <div>
                            <div><button id="tempBtnUp" className="btn btn-danger" onClick={() => this.buttonClickUp(this.state.temp + 1)}><i className="fas fa-angle-double-up"></i></button></div>
                            <div><button id="tempBtnDown" className="btn btn-danger" onClick={() => this.buttonClickDown(this.state.temp - 1)}><i className="fas fa-angle-double-down"></i></button></div>
                        </div>
                    </div>
                </div>

                <div className="col-md-7"><button id="unitButton" className="btn btn-success" value='&#8451;' onClick={() => this.changeUnit(this.state.unit + 1)}>&#8457;</button></div>
            </div>
        )
    }

}



//puts it on the page under tempDiv
ReactDOM.render(<Temp />, document.getElementById("tempDiv"));