import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const styles = {
  event: css`
    display: grid;
    font-family: Arial, Helvetica, sans-serif;
    grid-template-columns: 130px 1fr;
    grid-column-gap: 12px;
    box-sizing: border-box;
    max-width: 100%;
    position: relative;

    .info > div {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .date-time {
      text-align: right;
    }

    .date-time > div {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .time {
      color: #444;
      font-size: 0.8em;
    }

    .time-range {
      color: #444;
      font-size: 0.8em;
    }

    &.time-only {
      grid-template-columns: 70px 1fr;
    }

    &.time-only .time {
      color: inherit;
      font-size: 1em;
    }

    &.time-range-only {
      grid-template-columns: 130px 1fr;
    }

    &.time-range-only .time-range {
      color: inherit;
      font-size: 1em;
    }

    &.date-only {
      grid-template-columns: 55px 1fr;
    }

    &.date-range-only {
      grid-template-columns: 130px 1fr;
    }

    .name {
    }

    .place {
      color: #444;
      font-size: 0.8em;
    }
  `
}

function ComplexListEvent (props) {
  const { name, place, beginDate, duration, endDate, className } = props
  const { showDate, showDateRange, showTime, showTimeRange, showPlace } = props
  const timeOnly = !showDate && !showDateRange && showTime && !showTimeRange
  const timeRangeOnly = !showDate && !showDateRange && showTimeRange
  const dateOnly = showDate && !showDateRange && !showTime && !showTimeRange
  const dateRangeOnly = showDateRange && !showTime && !showTimeRange

  function getEndTime () {
    let endTime = beginDate
    if(beginDate && duration) {
      endTime = new Date(beginDate.getTime() + duration * 60 * 1000)
    }
    return endTime
  }

  function formatDate (date) {
    return date ? date.toLocaleDateString('en-US', {day: 'numeric', month: 'short'}) : ''
  }

  function formatDateRange () {
    const b = formatDate(beginDate)
    const e = formatDate(endDate)
    return beginDate && endDate && beginDate.getFullYear() === endDate.getFullYear() && beginDate.getMonth() === endDate.getMonth() ? b + '-' + endDate.getDate() : b && (!e || b === e) ? b : b + ' - ' + e
  }

  function formatTime (date) {
    return date ? date.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit' }).replace(':00', '') : ''
  }

  function formatTimeRange () {
    const b = formatTime(beginDate)
    const e = formatTime(getEndTime())
    return b === e ? b : b + ' - ' + e
  }

  return (
    <div className={`${className || ''}  ${timeRangeOnly ? 'time-range-only' : ''} ${timeOnly ? 'time-only' : ''} ${dateOnly ? 'date-only' : ''} ${dateRangeOnly ? 'date-range-only' : ''}`} css={styles.event}>
      <div className="date-time">
        { showDate && !showDateRange && beginDate && <div className="date">{formatDate(beginDate)}</div> }
        { showDateRange && beginDate && <div className="date-range">{formatDateRange()}</div> }
        { showTime && !showTimeRange && beginDate && <div className="time">{formatTime(beginDate)}</div> }
        { showTimeRange && beginDate && <div className="time-range">{formatTimeRange()}</div> }
      </div>
      <div className="info">
        <div className="name">{name}</div>
        { showPlace && place && <div className="place">{place}</div> }
      </div>
    </div>
  )
}

export default ComplexListEvent
