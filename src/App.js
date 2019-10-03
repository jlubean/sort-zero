import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import './App.css'

import DateListEvent from './components/DateListEvent'
import DateTimeListEvent from './components/DateTimeListEvent'
import ListEvent from './components/ListEvent'
import SimpleDateListEvent from './components/SimpleDateListEvent'
import SimpleTimeListEvent from './components/SimpleTimeListEvent'
import TimeListEvent from './components/TimeListEvent'

const styles = {
  eventList: css`
    display: grid;
    box-sizing: border-box;
    margin: 0 16px;
    max-width: 100%;
    position: relative;

    * {
      box-sizing: border-box;
    }

    ul {
      border: 1px solid #999;
      list-style: none;
      margin: 0;
      padding: 0;
      width: 400px;
    }

    li {
      margin: 0;
      padding: 0;
    }

    .event {
      border-top: 1px solid #999;
      padding: 6px;
    }

    .event:first-of-type {
      border-top: 0;
    }
  `,
}


function App() {
  let events =  [
    {
      name: 'Autumn',
      place: 'Northern Hemisphere',
      begin: new Date(2019, 8, 23, 0),
      end: new Date(2019, 11, 20, 23, 59, 59)
    },
    {
      name: 'SORT Conference',
      place: 'U of U Institute Building, Salt Lake City',
      begin: new Date(2019, 9, 8, 8),
      end: new Date(2019, 9, 9, 9),
      duration: 8*60,
    },
    {
      name: 'Team Halloween Party',
      place: '',
      begin: new Date(2019, 9, 31, 12, 20),
      duration: 2*60
    }
  ]
  return (
    <div className="App" css={styles.eventList}>
      <h3>Time Event List</h3>
      <ul>
        { events && events.map((event, index) => (
          <li className="event" key={`t-${index}`}>
            { false && 
            <ListEvent
              name={event.name}
              place={event.place}
              beginDate={event.begin}
              duration={event.duration}
              endDate={event.end}
              showPlace={true}
              showTimeRange={true}
            />
            }
            <TimeListEvent event={event} />
          </li>
          )) 
        }
      </ul>
      <h3>Simple Time Event List</h3>
      <ul>
        { events && events.map((event, index) => (
          <li className="event" key={`st-${index}`}>
            { false && 
            <ListEvent
              name={event.name}
              beginDate={event.begin}
              duration={event.duration}
              endDate={event.end}
              showTime={true}
            />
            }
            <SimpleTimeListEvent event={event} />
          </li>
          )) 
        }
      </ul>
      <h3>Date Event List</h3>
      <ul>
        { events && events.map((event, index) => (
          <li className="event" key={`d-${index}`}>
            { false && 
            <ListEvent
              name={event.name}
              place={event.place}
              beginDate={event.begin}
              duration={event.duration}
              endDate={event.end}
              showPlace={true}
              showDateRange={true}
            />
            }
            <DateListEvent event={event} />
          </li>
          )) 
        }
      </ul>
      <h3>Simple Date Event List</h3>
      <ul>
        { events && events.map((event, index) => (
          <li className="event" key={`sd-${index}`}>
            { false && 
            <ListEvent
              name={event.name}
              beginDate={event.begin}
              duration={event.duration}
              endDate={event.end}
              showDate={true}
            />
            }
            <SimpleDateListEvent event={event} />
          </li>
          )) 
        }
      </ul>
      <h3>Date & Time Event List</h3>
      <ul>
        { events && events.map((event, index) => (
          <li className="event" key={`dt-${index}`}>
            { false && 
            <ListEvent
              name={event.name}
              place={event.place}
              beginDate={event.begin}
              duration={event.duration}
              endDate={event.end}
              showPlace={true}
              showDateRange={true}
              showTimeRange={true}
            />
            }
            <DateTimeListEvent event={event} />
          </li>
          )) 
        }
      </ul>
    </div>
  );
}

export default App
