import { observable, action } from 'mobx'
import axios from 'axios'

export default class Sunspot {
  id
  name
  @observable selected = false

  constructor (options) {
    this.id = options.id
    this.name = options.name
  }

  @action
  toggleSelected () {
    this.selected = !this.selected
  }
}
