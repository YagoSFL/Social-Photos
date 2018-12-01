import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper' // Page background
import TopBar from './topBar' // Page header
import Gallery from './gallery'// Gallery component


const styles = theme => ({
    root: {
        heigth: 600
    },
    back: {
        padding: 20
    }
})

function Page(props) {

    const { classes } = props

    return (
            <Paper className={classes.root}>
                <TopBar/>
                <Paper className={classes.back}>
                    <Gallery />
                </Paper>
            </Paper>
    )
}

export default withStyles(styles)(Page)
    