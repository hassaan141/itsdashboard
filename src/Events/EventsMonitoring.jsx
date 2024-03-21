// import React, { useEffect, useState } from 'react';
// import './EventsMonitoring.css'; // Make sure this path is correct
// import eventData from '../test.json'; // Update the import to match the location of your JSON file

// const EventsMonitoring = () => {
//   // Update the state to handle an array of event details
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     // Map over your JSON data to transform it into a suitable format for your state
//     const loadedEvents = eventData.filter(event => event.success).map(event => ({
//       camera: event.data.camera_number,
//       congType: event.data.congestion_level,
//       start: event.data.detection_time,
//       end: event.data.expected_end_time,
//     }));

//     setEvents(loadedEvents);
//   }, []);

//   return (
//     <section>
//       <div className="events-monitoring">
//         <header className="events-header">
//           <h2>Events Monitoring</h2>
//           <span className="new-events-count">{events.length} new events</span>
//         </header>
//         <div className="events-list"> {/* Wrapper for scrollable list */}
//           <div className="events-table">
//             <div className="table-row header">
//               <div className="table-cell">Camera</div>
//               <div className="table-cell">Congestion Type</div>
//               <div className="table-cell">Start Time</div>
//               <div className="table-cell">Expected End</div>
//             </div>
//             {/* Iterate over the events state to render each event */}
//             {events.map((event, index) => (
//               <div className="table-row" key={index}>
//                 <div className="table-cell">{event.camera}</div>
//                 <div className="table-cell">{event.congType}</div>
//                 <div className="table-cell">{event.start}</div>
//                 <div className="table-cell">{event.end}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EventsMonitoring;



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from 'react';
import './EventsMonitoring.css';
import { useData } from '../sendBackEnd/dataContext';

let camera, congType, start, end;

const EventsMonitoring = () => {
  const [events, setEvents] = useState([]);
  const { responseData } = useData(); // Assuming this provides the data correctly

  
  useEffect(() => {
    console.log("Response Data:", responseData); 
    if (responseData && responseData.success) {
      console.log(responseData)
      // const eventsArray = Object.values(responseData.data);
      // console.log(eventsArray);
      const loadedEvents = responseData.data.map((event) => ({ // Removed .data to correctly map over eventsArray
        //id: index, // Consider using a unique identifier from your data if available
        camera: responseData.data[4],
        congType: responseData.data[3],
        start: responseData.data[1],
        end: responseData.data[2],
      }));

      console.log("Loaded Events:", loadedEvents); // Debugging line to verify the loaded events
      setEvents(loadedEvents);
    }
  }, [responseData]);


  return (
    <section>
      <div className="events-monitoring">
        <header className="events-header">
          <h2>Events Monitoring</h2>
          <span className="new-events-count">{events.length} new events</span>
        </header>
        <div className="events-list">
          <div className="events-table">
            <div className="table-row header">
              <div className="table-cell">Camera</div>
              <div className="table-cell">Congestion Type</div>
              <div className="table-cell">Start Time</div>
              <div className="table-cell">Expected End</div>
            </div>
            {events.map((event, index) => (
              <div className="table-row" key={index}>
                <div className="table-cell">{event.camera}</div>
                <div className="table-cell">{event.congType}</div>
                <div className="table-cell">{event.start}</div>
                <div className="table-cell">{event.end}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsMonitoring;

