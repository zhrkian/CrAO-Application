import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import moment from 'moment'
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs'
import s from './Sunspot.styles'

import CreateChartContainer from '../ResponsiveChartContainer'
import { Legend } from 'react-easy-chart'

const AreaChart = CreateChartContainer('AreaChart')
const ScatterPlot = CreateChartContainer('ScatterPlot')

const AreaChartBar = ({ data, xLabel, yLabel }) => {
  const values = Object.keys(data).map(date => ({ x: moment(new Date(date)).format('DD MMM') /*.split('-')[2]*/, y: data[date] })).filter(item => item.y)
  return (
    <AreaChart
      axes
      grid
      dataPoints
      interpolate={'cardinal'}
      xType={'text'}
      axisLabels={{ x: xLabel, y: yLabel }}
      yTicks={3}
      data={[ values ]}/>
  )
}

const FlaresScatter = ({ flares }) => {
  let data = []
  Object.keys(flares).map(date => {
    Object.keys(flares[date]).map(flareClass => {
      flares[date][flareClass].forEach(flare => {
        if (!flare) return
        data.push({
          x: moment(new Date(date)).format('DD MMM'),
          y: flare,
          type: `${flareClass} flare class`
        })
      })
    })
  })

  return (
    <div>
      <ScatterPlot
        axes
        grid
        yType={'text'}
        xType={'text'}
        data={data} />
      <Legend data={data} dataId={'type'} />
    </div>
  )
}

const ClassesScatter = ({ classes }) => {
  let data = []
  Object.keys(classes).map(date => {
    if (!classes[date]) return
    data.push({
      x: moment(new Date(date)).format('DD MMM'),
      y: classes[date],
      type: `${classes[date]} - class`
    })
  })

  return (
    <div>
      <ScatterPlot
        axes
        grid
        xType={'text'}
        data={data} />
      <Legend data={data} dataId={'type'} />
    </div>
  )
}

const TabContainer = ({ children }) => <div style={{ padding: 8 * 3 }}>{children}</div>

@withStyles(s)
class Sunspot extends Component {
  state = { tab: 0 }

  componentWillMount () {
    const { sunspot, onSetTitle } = this.props
    return onSetTitle && sunspot ? onSetTitle(`NOAA ${sunspot.number}`) : null
  }

  handleTabChange = (event, tab) => {
    this.setState({ tab })
  }

  render () {
    const { classes } = this.props
    const { sunspot } = this.props
    const { tab } = this.state

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={tab}
            onChange={this.handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
          >
            <Tab label={'Number of Spots/Area'} />
            <Tab label={'Sunspot Flares'} />
            {/*<Tab label={'Hale Classes'} />*/}
            {/*<Tab label={'MacIntosh Flares'} />*/}
          </Tabs>
        </AppBar>
        {
          tab === 0 && (
            <TabContainer>
              <AreaChartBar classes={classes} data={sunspot.sunspots_amount} yLabel={'Number of Spots'} />
              <AreaChartBar classes={classes} data={sunspot.area} yLabel={'Sunspot Area [millionths]'} />
            </TabContainer>
          )
        }
        {
          tab === 1 && (
            <TabContainer>
              <FlaresScatter {...sunspot} />
            </TabContainer>
          )
        }
        {/*{*/}
          {/*tab === 2 && (*/}
            {/*<TabContainer>*/}
              {/*<ClassesScatter classes={sunspot.hale_class} />*/}
            {/*</TabContainer>*/}
          {/*)*/}
        {/*}*/}
        {/*{*/}
          {/*tab === 3 && (*/}
            {/*<TabContainer>*/}
              {/*<ClassesScatter classes={sunspot.macintosh_class} />*/}
            {/*</TabContainer>*/}
          {/*)*/}
        {/*}*/}
      </div>
    )
  }
}

export default Sunspot
