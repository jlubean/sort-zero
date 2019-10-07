import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import EventDate from './EventDate'
import EventTime from './EventTime'

const styles = {
  event: css`
    display: grid;
    grid-template-columns: 150px 1fr;
    grid-column-gap: 12px;
    box-sizing: border-box;
    max-width: 100%;
    position: relative;

    .date-time {
      overflow: hidden;
    }

    .date {
      overflow: hidden;
      text-align: right;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .time {
      color: #444;
      font-size: 0.8em;
      text-align: right;
    }

    .info {
      overflow: hidden;
    }

    .name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .place {
      color: #444;
      font-size: 0.8em;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `
}

function DateTimeListEvent ({event, className}) {
  return (
    <div css={styles.event} className={className}>
      <div className="date-time">
        <EventDate className="date" event={event} showRange={true} />
        <EventTime className="time" event={event} showRange={true} />
      </div>
      <div className="info">
        <div className="name">{event.name}</div>
        <div className="place">{event.place}</div>
      </div>
    </div>
  )
}

export default DateTimeListEvent
