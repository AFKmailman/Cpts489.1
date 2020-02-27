import React from 'react';

class DeleteButton extends React.Component {
    render(){
        return (
            <div>
                <btn className="deletebtn" onClick={this.props.deleteItem}>Delete</btn>
            </div>
        );
    }
}

export default DeleteButton;