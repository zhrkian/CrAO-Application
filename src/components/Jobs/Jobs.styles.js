const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  content: {
    width: '50%',
    overflow: 'hidden'
  },
  job: { width: '50%', overflow: 'hidden' },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'rgba(255,255,255,0.9)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    zIndex:100
  }
})

export default styles
