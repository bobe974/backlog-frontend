import React from 'react'
import GameItem from './GameItem'

function List({games}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {games.map(item => (
        <GameItem key={item.id} game={item} /> 
      ))}
    </div>
  )
}

export default List
