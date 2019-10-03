import React from 'react'

import ListEvent from './ListEvent'

function SimpleTimeListEvent ({event, className}) {
  return (
    <ListEvent className={className}
      name={event.name}
      beginDate={event.begin}
      duration={event.duration}
      endDate={event.end}
      showTime={true}
    />
)
}

export default SimpleTimeListEvent
