import React, { useEffect, useState } from 'react';
import './EventsMonitoring.css'; // Make sure this path is correct
import Test from '../test.json'; // Correct import of JSON data

const EventsMonitoring = () => {
  // It seems you are only using a single event from the JSON. If you have multiple events,
  // consider adjusting the state structure to handle an array of events.
  useEffect(() => {
    // Assuming Test might have multiple events in future updates, we directly use the first event for now
    if (Test.success && Test.data.congestion_detected) {
      setEventDetails({
        camera: Test.data.camera_number,
        congType: Test.data.congestion_level,
        start: Test.data.detection_time,
        end: Test.data.expected_end_time,
        numCong: numCong+1, 
      });
    }
  }, []);

  // Use a single state object to manage the event details
  const [eventDetails, setEventDetails] = useState({
    camera: null,
    congType: null,
    start: null,
    end: null,
    numCong: 0,
  });

  return (
    <section>
      <div className="events-monitoring">
        <header className="events-header">
          <h2>Events Monitoring</h2>
          <span className="new-events-count">{eventDetails.numCong} new events</span>
        </header>
        <div className="events-table">
          <div className="table-row header">
            <div className="table-cell">Camera</div>
            <div className="table-cell">Congestion Type</div>
            <div className="table-cell">Start Time</div>
            <div className="table-cell">Expected End</div>
          </div>
          <div className="table-row">
            <div className="table-cell">{eventDetails.camera}</div>
            <div className="table-cell">{eventDetails.congType}</div>
            <div className="table-cell">{eventDetails.start}</div>
            <div className="table-cell">{eventDetails.end}</div>
          </div>
          {/* If handling multiple events, iterate over them here */}
        </div>
      </div>
    </section>
  );
};

export default EventsMonitoring;
