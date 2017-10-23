import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import DevTools from 'mobx-react-devtools'
import GrabbedData from './GrabbedData'
// import Jobs from './Jobs'
import Sunspots from './Sunspots'
import SunspotModal from '../components/SunspotModal'
import AppBar from '../components/AppBar'

import Jobs from '../components/Jobs'

class AppSwitch extends React.Component {
  previousLocation = this.props.location

  componentWillUpdate(nextProps) {
    const { location } = this.props
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location
    }
  }

  render() {
    const { location } = this.props
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    )
    return (
      <div>
        <DevTools />
        <AppBar />

        <Switch location={isModal ? this.previousLocation : location}>
          <Route
            exact
            path='/'
            render={() => (<Redirect to={{ pathname: `/sunspots`, state: { title: 'Sunspots' } }} />)}
            // state={{ title: 'Grabbed Data' }}
            // component={GrabbedData}
          />

          <Route
            path='/jobs'
            render={() => (<Redirect to={{ pathname: `/sunspots`, state: { title: 'Sunspots' } }} />)}
            // state={{ title: 'Jobs' }}
            // component={Jobs}
          />

          <Route
            path='/sunspots'
            state={{ title: 'Sunspots' }}
            component={Sunspots}
          />

          <Route
            path='/sunspots/:id'
            state={{ modal: true, back: true, defaultBack: '/sunspots' }}
            component={SunspotModal} />
        </Switch>
        { isModal ? <Route path='/sunspots/:id' component={SunspotModal} /> : null }
      </div>
    )
  }
}

const App = () => (
  <Router>
    <Route component={AppSwitch} />
  </Router>
)

export default App