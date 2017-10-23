import { observable, action, computed } from 'mobx'
import axios from 'axios'
import Sunspot from './sunspot'

import sunspotMocks from '../mocks/sunspots'

const flareFilter = (sunspot, filter) => {
  if (!filter || !filter.length) return true

  if (!sunspot.flares || !Object.keys(sunspot.flares).length) return false

  const filterRegexp = filter.map(c => c).join('') //`(?=.*${c})`

  return JSON.stringify(sunspot.flares).match(new RegExp(`[${filterRegexp}]`, 'g'))
}

const emptyFilters = { flareClasses: [] }

export default class Sunspots {
  @observable sunspots = []
  @observable thinking = false
  @observable filters = emptyFilters

  constructor () {
    this.getSunspotList()
  }

  async getSunspotList () {
    this.thinking = true
    try {
      // const { data } = await axios.get(`/api/test/list`)
      const data = sunspotMocks
      const { sunspots } = data || {}
      this.sunspots = sunspots.map(sunspot => new Sunspot(sunspot))
      this.error = null
    } catch (e) {
      this.error = 'Some error'
    }

    this.thinking = false
  }

  @action
  setFilters (value) {
    this.filters = value || emptyFilters
  }

  @action
  selectAll (value) {
    this.sunspots.forEach(sunspot => sunspot.selected = value)
  }

  findById (id) {
    return computed(() => this.sunspots.find(sunspot => sunspot.id == id)).get()
  }

  @computed
  get filtered () {
    return this.sunspots.filter(sunspot => {
      const isFlare = flareFilter(sunspot, this.filters.flareClasses)
      return isFlare
    })
  }

  @computed
  get selected () {
    const selectedItems = this.sunspots.filter(sunspot => sunspot.selected)
    return selectedItems.length
  }

  @computed
  get total () {
    return this.sunspots.length
  }
}
