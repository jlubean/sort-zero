import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import DayEvent from './components/DayEvent';
import MonthEvent from './components/MonthEvent';
import Event from './components/Event';

export default { title: 'Examples' };

const events = [
  {
    name: 'Travel to SORT',
    begin: new Date(2019, 9, 8, 7),
    duration: 1*60,
  },
  {
    name: 'SORT Conference',
    place: 'U of U Institute Building, Salt Lake City',
    begin: new Date(2019, 9, 8, 8),
    end: new Date(2019, 9, 9, 9),
    duration: 8*60,
  },
  {
    name: 'Travel Home',
    begin: new Date(2019, 9, 8, 16),
    duration: 1*60,
  },
  {
    name: 'Team Halloween Party',
    place: 'Conference Room',
    begin: new Date(2019, 9, 31, 14, 30),
    duration: 2*60
  },
];

const styles = {
  upcoming: css`
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;

    .upcoming {
      border: 1px solid #666;
      margin: 0 auto;
      text-align: left;
      width: 440px;
    }

    .event {
      padding: 4px;
    }
  `,
  day: css`
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;

  .day {
    border: 1px solid #666;
    margin: 0 auto;
    text-align: left;
    width: 360px;
  }

  .event {
    padding: 4px;
  }
`,
month: css`
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;

    & .calendar {
      display: grid; 
      grid-template-columns: repeat(7,minmax(0,1fr));
      grid-template-rows: repeat(5,1fr);
      height: 800px;
      margin: 0 auto;
      max-width: 1000px;
    }

    & .calendar > div {
      border: 1px solid #666;
      padding: 20px 6px 4px;
      position: relative;
    }

    & .calendar .date {
      position: absolute;
      top: 4px;
      left: 6px;
    }

    .event {
      background-color: #1EA7FD;
      border-radius: 4px;
      padding: 2px;
    }

    .other {
      background-color: #eee;
    }
  `
}

export const eventView = () => <div css={styles.upcoming}>
<h2>Upcoming Events</h2>
<div class="upcoming">
  <Event event={events[1]} className="event" />
  <Event event={events[3]} className="event" />
</div>
</div>;

export const dayView = () => <div css={styles.day}>
  <h2>Tuesday, October 8, 2019</h2>
  <div class="day">
    <DayEvent event={events[0]} className="event" />
    <DayEvent event={events[1]} className="event" />
    <DayEvent event={events[2]} className="event" />
  </div>
</div>;

export const monthView = () => <div css={styles.month}>
  <h2>October 2019</h2>
  <div class="calendar">
    <div class="other"><span class="date">29</span></div>
    <div class="other"><span class="date">30</span></div>
    <div><span class="date">1</span></div>
    <div><span class="date">2</span></div>
    <div><span class="date">3</span></div>
    <div><span class="date">4</span></div>
    <div><span class="date">5</span></div>
    <div><span class="date">6</span></div>
    <div><span class="date">7</span></div>
    <div>
      <span class="date">8</span>
      <MonthEvent event={events[1]} className="event"></MonthEvent>
    </div>
    <div>
      <span class="date">9</span>
      <MonthEvent event={events[1]} className="event"></MonthEvent>
    </div>
    <div>
      <span class="date">10</span>
    </div>
    <div><span class="date">11</span></div>
    <div><span class="date">12</span></div>
    <div><span class="date">13</span></div>
    <div><span class="date">14</span></div>
    <div><span class="date">15</span></div>
    <div><span class="date">16</span></div>
    <div><span class="date">17</span></div>
    <div><span class="date">18</span></div>
    <div><span class="date">19</span></div>
    <div><span class="date">20</span></div>
    <div><span class="date">21</span></div>
    <div><span class="date">22</span></div>
    <div><span class="date">23</span></div>
    <div><span class="date">24</span></div>
    <div><span class="date">25</span></div>
    <div><span class="date">26</span></div>
    <div><span class="date">27</span></div>
    <div><span class="date">28</span></div>
    <div><span class="date">29</span></div>
    <div><span class="date">30</span></div>
    <div><span class="date">31</span></div>
    <div class="other"><span class="date">1</span></div>
    <div class="other"><span class="date">2</span></div>
  </div>
</div>
