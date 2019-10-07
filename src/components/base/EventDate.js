import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const styles = {
  host: css`
  `
}

function formatDate (date) {
  return date ? date.toLocaleDateString('en-US', {day: 'numeric', month: 'short'}) : ''
}

function formatDateRange (beginDate, endDate) {
  const b = formatDate(beginDate)
  const e = formatDate(endDate)
  return beginDate && endDate && beginDate.getFullYear() === endDate.getFullYear() && beginDate.getMonth() === endDate.getMonth() ? b + '-' + endDate.getDate() : b && (!e || b === e) ? b : b + ' - ' + e
}

function EventDate ({event, showRange, className}) {
  return (
    <div css={styles.host} className={className}>{ showRange ? formatDateRange(event.begin, event.end) : formatDate(event.begin) }</div>
  )
}

export default EventDate
