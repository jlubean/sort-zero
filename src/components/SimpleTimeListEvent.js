import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import TimeListEvent from './TimeListEvent'

const styles = {
  event: css`
    .time-list-event {
      grid-template-columns: 70px 1fr;
    }
  `
}

function SimpleTimeListEvent ({event, className}) {
  return (
    <div css={styles.event}><TimeListEvent className={`time-list-event ${className || ''}`} event={event} showRange={false} showPlace={false} /></div>
  )
}

export default SimpleTimeListEvent
