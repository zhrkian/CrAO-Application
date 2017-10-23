import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Table, {
  TableBody,
  TableFooter,
  TablePagination
} from 'material-ui/Table'
import s from './List.styles'

@withStyles(s)
class ListComponent extends Component {
  state = { page: 0, rowsPerPage: 25 }

  handleChangePage = (event, page) => {
    this.setState({ page })
  }

  handleChangeRowsPerPage = event => {
    const { total } = this.props
    const rowsPerPage = event.target.value === 'All' ? total : event.target.value
    this.setState({ rowsPerPage })
  }

  renderItems = (items = []) => {
    const { page, rowsPerPage } = this.state
    const { renderItem } = this.props
    return items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(item => renderItem(item))
  }

  render () {
    const { page, rowsPerPage } = this.state
    const { classes } = this.props
    const { items, total } = this.props

    return (
      <Paper className={classes.root}>
        { this.props.toolbar }
        <div className={classes.tableWrapper}>
          <Table>
            { this.props.header }
            <TableBody>

              { this.renderItems(items) }

            </TableBody>

            <TableFooter>
              <TablePagination
                count={total}
                rowsPerPage={rowsPerPage}
                page={page}
                rowsPerPageOptions={[25, 50, 100, 150]}
                onChangePage={this.handleChangePage}
                onChangeRowsPerPage={this.handleChangeRowsPerPage}
              />
            </TableFooter>

          </Table>
        </div>
      </Paper>
    )
  }
}

export default ListComponent
