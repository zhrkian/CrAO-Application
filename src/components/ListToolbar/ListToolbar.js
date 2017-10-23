import React from 'react'
import { withStyles } from 'material-ui/styles'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import Tooltip from 'material-ui/Tooltip'
import AddBoxIcon from 'material-ui-icons/AddBox'
import FilterListIcon from 'material-ui-icons/FilterList'
import s from './ListToolbar.styles'

import Collapse from 'material-ui/transitions/Collapse'

class ListToolbar extends React.Component {
  state = { open: false }

  onToggleFilterPanel = () => {
    const { open } = this.state
    return this.setState({ open: !open })
  }

  render () {
    const { selected, title, classes } = this.props
    const { open } = this.state

    return (
      <div>
        <Toolbar>
          <div className={classes.title}>
            {selected > 0 ? (
              <Typography type="subheading">{selected} selected</Typography>
            ) : (
              <Typography type="title">{ title }</Typography>
            )}
          </div>
          <div className={classes.spacer} />
          <div className={classes.actions}>
            {
              selected > 0 ? (
                <Tooltip title="Create Job">
                  <IconButton aria-label="Create Job">
                    <AddBoxIcon />
                  </IconButton>
                </Tooltip>
              ) : null
            }
            {
              this.props.filters ? (
                <Tooltip title="Filter list">
                  <IconButton color={ open ? 'accent' : 'default' } aria-label="Filter list" onClick={this.onToggleFilterPanel}>
                    <FilterListIcon />
                  </IconButton>
                </Tooltip>
              ) : null
            }

          </div>
        </Toolbar>
        <Collapse in={open} transitionDuration="auto" unmountOnExit>
          { this.props.filters }
        </Collapse>
      </div>
    )
  }
}

export default withStyles(s)(ListToolbar)
