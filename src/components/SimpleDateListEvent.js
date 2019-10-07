import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import DateListEvent from './DateListEvent'

const styles = {
  event: css`
    .date-list-event {
      grid-template-columns: 55px 1fr;
    }
  `
}

function SimpleDateListEvent ({event, className}) {
  return (
    <div css={styles.event}><DateListEvent className={`date-list-event ${className || ''}`} event={event} showRange={false} showPlace={false} /></div>
  )
}

export default SimpleDateListEvent
