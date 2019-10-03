import React from 'react'

import ListEvent from './ListEvent'

function SimpleDateListEvent ({event, className}) {
  return (
    <ListEvent className={className}
      name={event.name}
      beginDate={event.begin}
      duration={event.duration}
      endDate={event.end}
      showDate={true}
    />
)
}

export default SimpleDateListEvent
