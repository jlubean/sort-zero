import React from 'react';
import ComplexEvent from '../ComplexEvent';

export default { title: 'ComplexEvent' };

export const timeAndName = () => <ComplexEvent
  name="SORT Conference"
  place="U of U Institute Building, Salt Lake City"
  beginDate={new Date(2019, 9, 8, 8)}
  duration={8*60}
  endDate={new Date(2019, 9, 9, 9)}
  showPlace={false}
  showDate={false}
  showDateRange={false}
  showTime={true}
  showTimeRange={false}
/>;

export const timeRangeAndNameAndPlace = () => <ComplexEvent
  name="SORT Conference"
  place="U of U Institute Building, Salt Lake City"
  beginDate={new Date(2019, 9, 8, 8)}
  duration={8*60}
  endDate={new Date(2019, 9, 9, 9)}
  showPlace={true}
  showDate={false}
  showDateRange={false}
  showTime={true}
  showTimeRange={true}
/>;

export const dateAndName = () => <ComplexEvent
  name="SORT Conference"
  place="U of U Institute Building, Salt Lake City"
  beginDate={new Date(2019, 9, 8, 8)}
  duration={8*60}
  endDate={new Date(2019, 9, 9, 9)}
  showPlace={false}
  showDate={true}
  showDateRange={false}
  showTime={false}
  showTimeRange={false}
/>;

export const dateRangeAndNamePlace = () => <ComplexEvent
  name="SORT Conference"
  place="U of U Institute Building, Salt Lake City"
  beginDate={new Date(2019, 9, 8, 8)}
  duration={8*60}
  endDate={new Date(2019, 9, 9, 9)}
  showPlace={true}
  showDate={true}
  showDateRange={true}
  showTime={false}
  showTimeRange={false}
/>;

export const dateAndTimeAndNameAndPlace = () => <ComplexEvent
  name="SORT Conference"
  place="U of U Institute Building, Salt Lake City"
  beginDate={new Date(2019, 9, 8, 8)}
  duration={8*60}
  endDate={new Date(2019, 9, 9, 9)}
  showPlace={true}
  showDate={true}
  showDateRange={false}
  showTime={true}
  showTimeRange={false}
/>;

export const dateRangeAndTimeRangeAndNameAndPlace = () => <ComplexEvent
  name="SORT Conference"
  place="U of U Institute Building, Salt Lake City"
  beginDate={new Date(2019, 9, 8, 8)}
  duration={8*60}
  endDate={new Date(2019, 9, 9, 9)}
  showPlace={true}
  showDate={true}
  showDateRange={true}
  showTime={true}
  showTimeRange={true}
/>;

