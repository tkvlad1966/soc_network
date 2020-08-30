import React from 'react';
// import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };
  ActiveEditMode = () => {
    this.setState({ editMode: true });
  };
  deActiveEditMode = () => {
    this.setState({ editMode: false });
  };
  render() {
    return (
      <div>
        {!this.state.editMode && (
          <span onDoubleClick={this.ActiveEditMode}>{this.props.status}</span>
        )}
        <div />
        <div>
          {this.state.editMode && (
            <input
              autoFocus={true}
              onBlur={this.deActiveEditMode}
              value={this.props.status}
            />
          )}
        </div>
      </div>
    );
  }
}

export default ProfileStatus;
