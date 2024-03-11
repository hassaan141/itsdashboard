import React from 'react';
import './EventsMonitoring.css'; // Make sure you import the CSS file

const EventItem = ({ icon, description, time }) => (
  <div className="event-item">
    <span className="event-icon">{icon}</span>
    <span className="event-description">{description}</span>
    <span className="event-time">{time}</span>
  </div>
);

const EventsMonitoring = ({ events }) => (
  <div className="events-monitoring">
    <header className="events-header">
      <h2>Events Monitoring</h2>
      <span className="new-events-count">{events.length} new events</span>
    </header>
    <div className="events-list">
      {events.map((event, index) => (
        <EventItem
          key={index}
          icon={event.icon}
          description={event.description}
          time={event.time}
        />
      ))}
    </div>
  </div>
);

export default EventsMonitoring;
