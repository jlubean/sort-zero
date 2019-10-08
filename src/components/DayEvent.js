import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import EventTime from './base/EventTime'

const styles = {
  event: css`
    display: grid;
    font-family: Arial, Helvetica, sans-serif;
    grid-template-columns: 150px 1fr;
    grid-column-gap: 12px;
    box-sizing: border-box;
    max-width: 100%;
    position: relative;

    .time {
      overflow: hidden;
      text-align: right;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `
}

function DayEvent ({event, className}) {
  return (
    <div css={styles.event} className={className}>
      <EventTime className="time" event={event} showRange={true} />
      <div className="name">{event.name}</div>
    </div>
  )
}

export default DayEvent
