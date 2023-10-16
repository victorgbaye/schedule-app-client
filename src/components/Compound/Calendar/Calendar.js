import moment from 'moment';
import './Calendar.css'; // Import your CSS file for styling


import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';


const Calendar = () => {
  const events = [
    { title: 'Event 1', date: '2023-10-10' },
    { title: 'Event 2', date: '2023-10-15' },
    // Add more events as needed
  ];

  return (
    <div className="scheduler">
      <h2>Scheduler</h2>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
      />
    </div>
  );
};

export default Calendar;
