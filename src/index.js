import('./styles/main.scss')
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { Provider } from 'mobx-react'
import { AppContainer } from 'react-hot-loader'
import App from './containers/App'
import stores from './stores'

const theme = createMuiTheme()

const renderApp = Component => {
  render(
    <AppContainer>
      <MuiThemeProvider theme={theme}>
        <Provider {...stores}>
          <Router>
            <Route component={Component} />
          </Router>
        </Provider>
      </MuiThemeProvider>
    </AppContainer>,
    document.getElementById('root')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept(() => renderApp(App))
}
