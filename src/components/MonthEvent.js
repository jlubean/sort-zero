import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const styles = {
  event: css`
    font-family: Arial, Helvetica, sans-serif;
    .name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `
}

function DateListEvent ({event, className}) {
  return (
    <div css={styles.event} className={className}>
      <div className="name">{event.name}</div>
    </div>
  )
}

export default DateListEvent
