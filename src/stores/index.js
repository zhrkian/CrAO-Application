import sunspotsStore from './sunspots'
import jobs from './jobs'

const stores = {
  sunspotsStore: new sunspotsStore(),
  jobsStore: new jobs()
}

window.___ALL_STORES___ = stores

export default stores
