import React from 'react'
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Pane from '../../Grid/Pane'

import s from './Spreedsheet.styles'

const Spreadsheet = props => {
  const { classes } = props
  const { name, sheet_url } = props
  const { onUrlChange, onNameChange } = props
  const onNewSpreadSheet = () => window.open('https://docs.google.com/spreadsheet/ccc?new')
  return (
    <Pane title='Connect your spreadsheet'>
      <div className={classes.root}>
        <div className={classes.inputs}>
          <TextField
            className={classes.input}
            label='Connection Name'
            placeholder='Connection Name'
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            fullWidth
          />
          <TextField
            className={classes.input}
            label='Sheets URL'
            placeholder='Sheets URL'
            value={sheet_url}
            onChange={(e) => onUrlChange(e.target.value)}
            fullWidth
          />
        </div>
        <div style={{width: '27%'}}>
          <Button raised className={classes.button} onClick={onNewSpreadSheet}>Create new</Button>
        </div>
      </div>
      <br/>
      <p>Share to: solar-application@innate-actor-181710.iam.gserviceaccount.com</p>
    </Pane>
  )
}

export default withStyles(s)(Spreadsheet)
