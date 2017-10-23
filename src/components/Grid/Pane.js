import React from 'react'
import Card, { CardHeader, CardContent } from 'material-ui/Card'

const Pane = ({ style, children, title, subtitle, disabled }) => (
  <Card style={Object.assign({ margin: 10 }, style || {})}>
    <CardHeader
      title={title}
      subtitle={subtitle}>
    </CardHeader>
    <CardContent >
      { children }
    </CardContent>
  </Card>
)

export default Pane;
