import '../styles/App.css'
import React, { useState } from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const localizer = momentLocalizer(moment);


const App = () => {
 const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filter, setFilter] = useState('all');

  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');

  const handleSlotSelect = ({ start }) => {
    setSelectedDate(start);
    setTitle('');
    setLocation('');
    setSelectedEvent(null);
    Popup.create({
      title: 'Create Event',
      content: (
        <div>
          <input
            type="text"
            placeholder="Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          /><br /><br />
          <input
            type="text"
            placeholder="Event Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      ),
      buttons: {
        right: [
          {
            text: 'Save',
            className: 'mm-popup__btn',
            action: () => {
              const newEvent = {
                title,
                location,
                start: selectedDate,
                end: selectedDate,
              };
              setEvents([...events, newEvent]);
              Popup.close();
            },
          },
        ],
      },
    });
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setTitle(event.title);
    setLocation(event.location);
    Popup.create({
      title: 'Edit Event',
      content: (
        <div>
          <input
            type="text"
            placeholder="Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          /><br /><br />
          <input
            type="text"
            placeholder="Event Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      ),
      buttons: {
        left: [
          {
            text: 'Delete',
            className: 'mm-popup__btn--danger',
            action: () => {
              setEvents(events.filter((e) => e !== event));
              Popup.close();
            },
          },
        ],
        right: [
          {
            text: 'Save',
            className: 'mm-popup__btn--info',
            action: () => {
              const updated = events.map((e) =>
                e === event ? { ...e, title, location } : e
              );
              setEvents(updated);
              Popup.close();
            },
          },
        ],
      },
    });
  };

  const filterEvents = () => {
    const now = new Date();
    if (filter === 'past') {
      return events.filter((e) => new Date(e.start) < now);
    } else if (filter === 'upcoming') {
      return events.filter((e) => new Date(e.start) >= now);
    }
    return events;
  };

  const eventStyleGetter = (event) => {
    const now = new Date();
    const isPast = new Date(event.start) < now;
    return {
      style: {
        backgroundColor: isPast
          ? 'rgb(222, 105, 135)'
          : 'rgb(140, 189, 76)',
        color: 'white',
        borderRadius: '5px',
        padding: '2px',
      },
    };
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Event Tracker Calendar</h1>

      <div style={{ marginBottom: '10px' }}>
        <button className="btn" onClick={() => setFilter('all')}>All</button>
        <button className="btn" onClick={() => setFilter('past')}>Past</button>
        <button className="btn" onClick={() => setFilter('upcoming')}>Upcoming</button>
      </div>

      <Calendar
        localizer={localizer}
        events={filterEvents()}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSlotSelect}
        onSelectEvent={handleEventClick}
        style={{ height: 600 }}
        eventPropGetter={eventStyleGetter}
      />

      <Popup />
    </div>
  );
}

export default App