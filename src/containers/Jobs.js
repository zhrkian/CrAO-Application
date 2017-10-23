import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import List from '../components/List'
import ListToolbarDefault from '../components/ListToolbar'
import ListHeaderDefault from '../components/ListHeader'

const columns = [
  { id: 'title', disablePadding: true, label: 'Title' },
  { id: 'created_at', disablePadding: true, label: 'Created At' },
  { id: 'last_seen', disablePadding: true, label: 'Last seen' }
]

const ListToolbar = inject(stores => ({ selected: stores.jobsStore.selected }))(observer(ListToolbarDefault))

const ListHeader = inject(stores => ({
  selected: stores.jobsStore.selected,
  onSelectAll: (value) => stores.jobsStore.selectAll(value)
}))(observer(ListHeaderDefault))

@inject(stores => ({ jobs: stores.jobsStore.filtered || [], total: stores.jobsStore.filtered.length }))
@observer
class Jobs extends Component {
  render () {
    const { sunspots, total } = this.props
    return (
      <List items={sunspots}
            columns={columns}
            total={total}
            toolbar={<ListToolbar total={total} title="Jobs" />}
            header={<ListHeader total={total} columns={columns} />}
            renderItem={item => <div key={item.id}></div>}/>
    )
  }
}

export default Jobs
