import { observable, action } from 'mobx'
import axios from 'axios'

export default class Sunspot {
  id
  number
  kind
  start_at
  end_at
  position
  hale_class
  macintosh_class
  area
  sunspots_amount
  flares
  @observable selected = false

  constructor (options) {
    this.id = options.id
    this.number = options.number
    this.kind = options.kind
    this.start_at = options.start_at
    this.end_at = options.end_at
    this.position = options.position
    this.hale_class = options.hale_class
    this.macintosh_class = options.macintosh_class
    this.area = options.area
    this.sunspots_amount = options.sunspots_amount
    this.flares = options.flares
  }

  @action
  toggleSelected () {
    this.selected = !this.selected
  }
}
