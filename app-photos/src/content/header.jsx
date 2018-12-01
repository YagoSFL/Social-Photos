import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { CameraAlt } from '@material-ui/icons'

const styles = {
  root: {
    flexGrow: 1,
    paddingBottom: 65,
    fontWeight: 'bold'
  },
  header: {
    background: '#FF5733'
  }
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.header}>
        <Toolbar>
          <CameraAlt fontSize="large"/>
          <Typography variant="h5" color="inherit">
             Photos
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(SimpleAppBar)