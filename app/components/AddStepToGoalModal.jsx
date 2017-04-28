import React, { PropTypes } from 'react';
import capitalize from 'lodash/capitalize';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

let styles = {};

class AddStepToGoalModal extends React.Component {

  generateTextField(fieldName) {
    const { onFieldChange } = this.props;
    return (
      <TextField
        style={styles.textFields}
        floatingLabelText={capitalize(fieldName)}
        onChange={event => onFieldChange(fieldName, event.target.value)}
      />
    );
  }

  generateActionButtons() {
    const { actions, parameters } = this.props;
    return [(
      <FlatButton
        label="Submit"
        onClick={() => actions.addStepToGoalRequest(parameters.pathId, parameters.selectedGoal)}
        primary
      />),
      (<FlatButton
        label="Close"
        onClick={() => actions.resetAddStepToGoalModal()}
      />),
    ];
  }

  render() {
    const { parameters } = this.props;
    const params = {
      showModal: parameters.id === parameters.selectedGoal || false,
    };
    const title = `Add step to goal: ${parameters.name}`;
    return (
      <Dialog
        title={title}
        open={params.showModal}
        actions={this.generateActionButtons()}
        modal
      >
        <div>
          {this.generateTextField('name')}
          {this.generateTextField('description')}
        </div>
      </Dialog>
    );
  }
}

AddStepToGoalModal.propTypes = {
  parameters: PropTypes.shape({
    pathId: PropTypes.string.isRequired,
    selectedGoal: PropTypes.string.isRequired,
  }).isRequired,
  onFieldChange: PropTypes.func.isRequired,
  actions: React.PropTypes.shape({
    resetAddStepToGoalModal: React.PropTypes.func,
    addStepToGoalRequest: React.PropTypes.func,
  }).isRequired,
};

styles = {
  modal: {
    width: '500px',
  },
  modalContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: '50px',
  },
  textFields: {
    width: '100%',
  },
  dueDateField: {
    paddingTop: 20,
    width: '100%',
  },
};

export default AddStepToGoalModal;
