import React from 'react'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'

const SelectFields = ({ items, onCheck }) => (
  <List>
    {
      items.map((item) => (
        <ListItem
          key={item.value}
          dense
          button
          disabled={item.disabled}
          onClick={ () => onCheck(item) }
        >
          <Checkbox
            checked={item.selected}
            tabIndex={-1}
            disableRipple
          />
          <ListItemText primary={item.name} />
        </ListItem>
      ))
    }
  </List>
)

export default SelectFields
