import React from 'react'
import { withStyles } from 'material-ui/styles'
import Input, { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import { FormControl } from 'material-ui/Form'
import Select from 'material-ui/Select'
import Pane from '../../Grid/Pane'

import s from './Setup.styles'

const Setup = props => {
  const { classes } = props
  const { kind } = props
  const { onKindChange } = props
  return (
    <Pane title='Setup your job'>
      <div className={classes.root}>
        <div className={classes.form}>
          <FormControl className={classes.select}>
            <InputLabel htmlFor={'job-input'}>Type</InputLabel>
            <Select
              value={kind}
              onChange={e => onKindChange(e.target.value)}
              input={<Input id={'job-input'} />}
              autoWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'sunspots'}>Sunspots</MenuItem>
              <MenuItem value={'grabbing'} disabled>Grabbing</MenuItem>
              <MenuItem value={'new_jobs'} disabled>New Jobs</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </Pane>
  )
}

export default withStyles(s)(Setup)
