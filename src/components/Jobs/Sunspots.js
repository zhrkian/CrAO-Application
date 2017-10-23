import React from 'react'
import { withStyles } from 'material-ui/styles'
import _ from 'lodash'
import Chip from 'material-ui/Chip'
import Pane from '../Grid/Pane'
import SelectFields from './components/SelectFields'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

import s from './Sunspots.styles'

const fields = [
  {
    value: 'number',
    name: 'NOAA Number',
    selected: true,
    disabled: true
  },
  {
    selected: true,
    value: 'visible',
    name: 'Visible (Days)'
  },
  {
    selected: true,
    value: 'start_at',
    name: 'First seen'
  },
  {
    selected: true,
    value: 'end_at',
    name: 'Last seen'
  },
  {
    selected: true,
    value: 'flare_index',
    name: 'Flare Index'
  }
]


const Sunspots = ({ classes, options = {}, onChange }) => {
  const onCheck = (field) => {
    const updatedFields = (fields || options.fields).map(f => {
      if (f.name === field.name) {
        f.selected = !f.selected
      }
      return f
    })
    onChange(Object.assign(options, { fields: updatedFields}))
  }
  const onAdd = () => {
    const input = document.querySelector('#sunspots-textarea')
    const sunspots = options.sunspots || []
    const value = input.value || ' '
    onChange(Object.assign(options, { sunspots: _.uniqWith([...sunspots, ...(value.match(/(\d+)/g) || []) ], _.isEqual) }))
    input.value = ''
  }
  const onRemove = index => {
    const sunspots = options.sunspots || []
    onChange(Object.assign(options, { sunspots: [...sunspots.slice(0, index), ...sunspots.slice(index + 1)] }))
  }

  return (
    <Pane title='Sunspots Job'>
      <div className={classes.root}>


        <div className={classes.chips}>
          {
            (options.sunspots || []).map((spot, index) => <Chip
                style={{ margin: 5 }}
                label={`NOAA${spot}`}
                key={spot}
                onRequestDelete={() => onRemove(index)}
              />
            )
          }
        </div>
        <TextField
          id="sunspots-textarea"
          className={classes.input}
          label='Sunspot numbers'
          placeholder='Sunspot numbers'
          multiline
          rows={'5'}
          fullWidth
        />
        <Button raised className={classes.button} onClick={onAdd}>Add sunspots</Button>

        <Pane title='Fields' style={{ width: '100%'}}>
          <SelectFields items={options.fields || fields} onCheck={onCheck} />
        </Pane>

      </div>
    </Pane>
  )
}

export default withStyles(s)(Sunspots)