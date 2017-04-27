import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class AddStepToGoalModal extends React.Component {

  generateActionButtons() {
    return [(
      <FlatButton
        label="Cancel"
      />), (<FlatButton
        label="Submit"
        secondary
      />),
    ];
  }

  render() {
    const { parameters } = this.props;
    const params = {
      showModal: parameters.id === parameters.selectedGoal || false,
    };
    return (
      <Dialog
        title="Add Step to Goal"
        open={params.showModal}
        actions={this.generateActionButtons()}
        modal
      >
        <div>Hello</div>
      </Dialog>
    );
  }
}

AddStepToGoalModal.propTypes = {
  parameters: PropTypes.shape({
    showModal: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    goalId: PropTypes.string.isRequired,
  }).isRequired,
};

export default AddStepToGoalModal;
