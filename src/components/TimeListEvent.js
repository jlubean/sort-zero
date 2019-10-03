import React from 'react'

import ListEvent from './ListEvent'

function TimeListEvent ({event, className}) {
  return (
    <ListEvent className={className}
      name={event.name}
      place={event.place}
      beginDate={event.begin}
      duration={event.duration}
      endDate={event.end}
      showPlace={true}
      showTimeRange={true}
    />
  )
}

export default TimeListEvent
