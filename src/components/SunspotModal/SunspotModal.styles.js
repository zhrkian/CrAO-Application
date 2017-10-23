const styles = theme => (
  {
    appBar: {
      position: 'relative',
    },
    flex: {
      flex: 1,
    },
    content: {
      marginTop: theme.spacing.unit * 10
    },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    },
    item: {
      background: 'white',
      display: 'inline-flex',
      flexDirection: 'column',
      margin: '1em'
    }
  }
)

export default styles