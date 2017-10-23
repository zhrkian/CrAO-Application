const styles = theme => ({
  root: {
    position: 'fixed',
    zIndex: 1000,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: 5,
    marginRight: 5,
  },
  link: {
    color: 'black',
    padding: 10
  },
  activeLink: {
    color: 'gray',
    padding: 10,
    textDecoration: 'underline'
  }
})

export default styles