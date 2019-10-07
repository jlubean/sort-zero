import React from 'react';
import DayEvent from '../DayEvent';

export default { title: 'DayEvent' };

const event = {
  name: 'SORT Conference',
  place: 'U of U Institute Building, Salt Lake City',
  begin: new Date(2019, 9, 8, 8),
  end: new Date(2019, 9, 9, 9),
  duration: 8*60,
};

export const defaults = () => <DayEvent event={event} />;

