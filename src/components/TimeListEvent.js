import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import EventTime from './EventTime'

const styles = {
  event: css`
    display: grid;
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

function TimeListEvent ({event, showRange, showPlace, className}) {
  return (
    <div css={styles.event} className={className}>
      <EventTime className="time" event={event} showRange={showRange === undefined || showRange} />
      <div className="info">
        <div className="name">{event.name}</div>
        { (showPlace === undefined || showPlace) && <div className="place">{event.place}</div> }
      </div>
    </div>
)
}

export default TimeListEvent
