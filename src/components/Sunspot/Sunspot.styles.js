const styles = theme => (
  {
    root: {
      flexGrow: 1,
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      backgroundColor: theme.palette.background.paper
    },
    item: {
      background: 'white',
      display: 'inline-flex',
      flexDirection: 'column',
      margin: '1em',
    }
  }
)

export default styles
