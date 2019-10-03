import React from 'react'

import ListEvent from './ListEvent'

function DateListEvent ({event, className}) {
  return (
    <ListEvent
      name={event.name}
      place={event.place}
      beginDate={event.begin}
      duration={event.duration}
      endDate={event.end}
      showPlace={true}
      showDateRange={true}
    />
  )
}

export default DateListEvent
