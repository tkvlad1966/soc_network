import React from 'react';
// import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  OnStatusChange = (e) => {
    const { value: status } = e.currentTarget;
    this.setState({ status });
  };
  ActiveEditMode = () => {
    this.setState({ editMode: true });
  };
  deActiveEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };
  render() {
    return (
      <div>
        {!this.state.editMode && (
          <span onDoubleClick={this.ActiveEditMode}>
            {this.props.status || '_ _ _ _'}
          </span>
        )}
        <div />

        {this.state.editMode && (
          <div>
            <input
              onChange={this.OnStatusChange}
              autoFocus={true}
              onBlur={this.deActiveEditMode}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
