const styles = theme => ({
  root: {
    paddingRight: 24,
    paddingLeft: 24,
    paddingBottom: 10
  },
  actions: {
    display: 'inline-flex',
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing.unit / 2,
  }
})

export default styles