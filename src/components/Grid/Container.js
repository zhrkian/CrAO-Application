import React from 'react'
import Paper from 'material-ui/Paper'

const Container = ({style, children}) => (
  <Paper elevation={4}>
    <div style={{padding: 16, paddingTop: 10, position: 'relative', display: 'flex'}}>
      {children}
    </div>
  </Paper>

)

export default Container
