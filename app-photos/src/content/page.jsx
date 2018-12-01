import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper' // Page background
import Header from './header'
import Footer from './footer' 
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
                <Header/>
                <Paper className={classes.back}>
                    <Gallery />
                </Paper>
                <Footer/>
            </Paper>
    )
}

export default withStyles(styles)(Page)
    