import { observable, action, computed } from 'mobx'
import axios from 'axios'
import Job from './job'

export default class Jobs {
  @observable jobs = []
  @observable thinking = false
  @observable filters = ''

  constructor () {
    this.getJobsList()
  }

  async getJobsList () {
    this.thinking = true
    try {
      const { data } = await axios.get(`/api/jobs`)
      const { jobs } = data || {}
      this.jobs = jobs.map(job => new Job(job))
      this.error = null
    } catch (e) {
      this.error = 'Some error'
    }

    this.thinking = false
  }

  @action
  setFilters (value) {
    this.filters = value
  }

  @action
  selectAll (value) {
    this.jobs.forEach(job => job.selected = value)
  }

  findById (id) {
    return computed(() => this.jobs.find(job => job.id == id)).get()
  }

  @computed
  get filtered () {
    return this.jobs
  }

  @computed
  get selected () {
    const selectedItems = this.jobs.filter(job => job.selected)
    return selectedItems.length
  }

  @computed
  get total () {
    return this.jobs.length
  }
}
