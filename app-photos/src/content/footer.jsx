import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { AppBar, CssBaseline, Typography } from '@material-ui/core'

const styles = theme => ({
    footer: {
        background: '#FF5733',
        top: 'auto',
        bottom: 0,
        textAlign: 'center'
    },
    mark: {
        fontStyle: 'italic',
        color: '#fff',
        padding: 10
    }
});



function BottomAppBar(props) {
  const { classes } = props;
  return (
    <Fragment>
      <CssBaseline />
      <AppBar position="relative" color="primary" className={classes.footer}>
            <Typography variant="subtitle2" className={classes.mark}>
                <span style={{fontSize: "10px", fontWeight: "bold"}}>App by</span> Yago Santos
            </Typography>
      </AppBar>
    </Fragment>
  );
}

export default withStyles(styles)(BottomAppBar);