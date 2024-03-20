import React from 'react'
import ListItem from './ListItem'

const List = ({children,className}) => {
  return (
    <ul className={className}>{children}</ul>
  )
}

export default List