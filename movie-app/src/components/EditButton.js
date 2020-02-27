import React from 'react';

class EditButton extends React.Component {
    render(){
        return (
            <div>
                <button className="editbtn" onClick={this.props.handleClick}>Edit</button>
            </div>
        );
    }
}

export default EditButton;