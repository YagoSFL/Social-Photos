import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import { Modal, Button } from '@material-ui/core'
import { Visibility } from '@material-ui/icons'

const styles = theme => ({
  paper: {
    position: 'absolute',
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    top: '20%',
    left: '25%'
  },
  btnModal: {
    color: 'rgba(255, 255, 255, 0.54)',
    float: 'right',
    paddingTop: 20
  }
});

class SimpleModal extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, children } = this.props;

    return (
      <div>
        <Button onClick={this.handleOpen} className={classes.btnModal} >
          <Visibility />
        </Button>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
          >
            <div className={classes.paper}>
              { children }
            </div>
          </Modal>
      </div>
    );
  }
}

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;