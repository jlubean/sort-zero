import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const styles = {
  host: css`
  `
}

function getEndTime (beginDate, duration) {
  let endTime = beginDate
  if(beginDate && duration) {
    endTime = new Date(beginDate.getTime() + duration * 60 * 1000)
  }
  return endTime
}

function formatTime (date) {
  return date ? date.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit' }).replace(':00', '') : ''
}

function formatTimeRange (beginDate, duration) {
  const b = formatTime(beginDate)
  const e = formatTime(getEndTime(beginDate, duration))
  return b === e ? b : b + ' - ' + e
}

function EventTime ({event, showRange, className}) {
  return (
    <div css={styles.host} className={className}>{ showRange ? formatTimeRange(event.begin, event.duration) : formatTime(event.begin) }</div>
  )
}

export default EventTime
