import React from 'react';

class DeleteButton extends React.Component {
    render(){
        return (
            <div>
                <button className="btn-danger" onClick={this.props.handleClick}>Delete</button>
            </div>
        );
    }
}

export default DeleteButton;