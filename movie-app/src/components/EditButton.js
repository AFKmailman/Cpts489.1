import React from 'react';

class EditButton extends React.Component {
    render(){
        return (
            <div>
                <btn className="editbtn" onClick={this.props.deleteItem}>Delete</btn>
            </div>
        );
    }
}

export default EditButton;