import React from 'react'
import { withStyles } from 'material-ui/styles'
import { FormGroup, FormLabel, FormControl, FormControlLabel } from 'material-ui/Form'
import Button from 'material-ui/Button'
import Checkbox from 'material-ui/Checkbox'
import s from './SunspotFilters.styles'

const FLARE_CLASSES = ['A', 'B', 'C', 'M', 'X']

const FlareClassFilter = ({ flareClasses, onChange }) => {
  const onFilterChange = value => (event, checked) => {
    if (checked) {
      return onChange([...flareClasses, value])
    }
    return onChange(flareClasses.filter(c => c !== value))
  }
  const filterLegendText = flareClasses && flareClasses.length ? `(sunspots with flares ${flareClasses.join(', ')})` : ''

  return (
    <FormControl component='fieldset'>
      <FormLabel component='legend'>{`Flare class ${filterLegendText}`}</FormLabel>
      <FormGroup row>
        {
          FLARE_CLASSES.map(c => (
            <FormControlLabel
              key={c}
              control={
                <Checkbox
                  checked={flareClasses.indexOf(c) > -1}
                  onChange={onFilterChange(c)}
                />
              }
              label={`${c} class`}
            />
          ))
        }
      </FormGroup>
    </FormControl>
  )
}

class SunspotFilters extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      filters: Object.assign({}, props.filters)
    }
  }

  handleFilterChange = name => (event, checked) => {
    const { filters } = this.state
    this.setState({ filters: Object.assign(filters, { [name]: checked }) })
  }

  handleFlareFilterChange = value => {
    const { filters } = this.state
    this.setState({ filters: Object.assign(filters, { flareClasses: value }) })
  }

  onApplyFilters = () => {
    const { filters } = this.state
    const { onApply } = this.props
    return onApply(filters)
  }

  onResetFilters = () => {
    const { onReset } = this.props
    return this.setState({ filters: { flareClasses: [] } }, onReset)
  }

  render () {
    const { filters } = this.state
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <FormGroup row>
          <FlareClassFilter flareClasses={filters.flareClasses}
                            onChange={this.handleFlareFilterChange} />
        </FormGroup>


        <div className={classes.actions}>
          <Button raised
                  className={classes.button}
                  onClick={this.onApplyFilters}>
            Apply
          </Button>
          <Button raised
                  color='accent'
                  className={classes.button}
                  onClick={this.onResetFilters}>
            Reset
          </Button>
        </div>
      </div>
    )
  }
}

export default withStyles(s)(SunspotFilters)