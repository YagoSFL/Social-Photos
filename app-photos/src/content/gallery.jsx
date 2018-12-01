import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { handleUps, handleDowns } from '../actions/socialActions'
import { withStyles } from '@material-ui/core/styles'
import { GridList, GridListTile, GridListTileBar, IconButton }from '@material-ui/core'
import { ThumbUp, ThumbDown } from '@material-ui/icons'

import data from '../data/db.json'
import View from './view'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  imgTile: {
    width: 300
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
    fontSize: 14
  },
  title: {
    float: 'left',
    clear: 'both',
    width: 190,
    overflow: 'hidden',
    paddingTop: 10
  },
  posit: {
    display: 'inline'
  },
  num: {
    marginLeft: 5
  }
})

class Gallery extends Component {

  render() {
     
    //Destructuring props
    const { classes, handleUps, handleDowns } = this.props

    return (
      <div className={classes.root}>
      <GridList cellHeight={250} className={classes.gridList} cols={3}> 
        {data.map(tile => (
          <GridListTile key={tile.id} className={classes.imgTile}>
            <img src={tile.url} alt={tile.imgDesc} width={300} height={250}/>
            <GridListTileBar
              title={<div className={classes.posit}> 
                    <span className={classes.title}>{tile.imgDesc}</span>
                    <span>
                    <View handleClick={this.props.onClick} >
                        <img src={tile.url} alt={tile.imgDesc} width={600} height={400}/>
                        <GridListTileBar 
                          title={ tile.imgDesc }
                          subtitle={ <span>Posted by: {tile.user}</span> }
                          actionIcon={
                            <div>
                              <IconButton className={classes.icon} onClick={() => handleUps(tile)}>
                                <ThumbUp/><span className={classes.num}>{tile.upVotes}</span>
                              </IconButton>
                              <IconButton className={classes.icon} onClick={() => handleDowns(tile)}>
                                <ThumbDown/><span className={classes.num}>{tile.downVotes}</span>
                              </IconButton>
                            </div> 
                          } 
                          />
                    </View>
                    </span>
                </div>}
              subtitle={ <span>by: {tile.user}</span> }
              actionIcon={
                <div>
                  <IconButton className={classes.icon} onClick={() => handleUps(tile)}>
                    <ThumbUp/><span className={classes.num}>{tile.upVotes}</span>
                  </IconButton>
                  <IconButton className={classes.icon} onClick={() => handleDowns(tile)}>
                    <ThumbDown/><span className={classes.num}>{tile.downVotes}</span>
                  </IconButton>
                </div> 
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    )
  }
}

// State with values updated (upVotes and downVotes for each post id)
const mapStateToProps = state => ({ list: state.gallery.gallery})
//Dispatch actions that count up and down votes
const mapDispatchToProps = dispatch => bindActionCreators({ handleUps, handleDowns }, dispatch)
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Gallery))