import React from 'react'
import { inject, observer } from 'mobx-react'
import Sunspot from './Sunspot'

const injectTo = (stores, props) => ({
  sunspot: stores.sunspotsStore.findById(props.id)
})

export default inject(injectTo)(observer(Sunspot))