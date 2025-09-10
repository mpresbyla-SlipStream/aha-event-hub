import { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import SessionCard from '../components/SessionCard'


const SessionsPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  
  const sessions = [
    {
      id: 1,
      title: "Oral Presentation",
      date: "Saturday, November 8, 2025",
      time: "10:00 AM CST",
      speaker: "Bob Smith",
      employee: "",
      location: "Room 101",
      startDateTime: "2025-11-08T10:00:00-06:00", // CST is UTC-6
      endDateTime: "2025-11-08T11:00:00-06:00" // Assuming 1 hour duration
    },
    {
      id: 2,
      title: "Poster Presentation",
      date: "Saturday, November 8, 2025",
      time: "12:00 PM EST",
      speaker: "Julie Baranack",
      employee: "",
      location: "Exhibition Hall",
      startDateTime: "2025-11-08T12:00:00-05:00", // EST is UTC-5
      endDateTime: "2025-11-08T13:00:00-05:00"
    },
    {
      id: 3,
      title: "Poster Oral Presentation",
      date: "Saturday, November 8, 2025",
      time: "4:00 PM EST",
      speaker: "Tom Lulo",
      employee: "",
      location: "Auditorium A",
      startDateTime: "2025-11-08T16:00:00-05:00",
      endDateTime: "2025-11-08T17:00:00-05:00"
    },
    {
      id: 4,
      title: "Keynote Address",
      date: "Monday, November 10, 2025",
      time: "9:00 AM EST",
      speaker: "Dr. Jane Doe",
      employee: "",
      location: "Main Ballroom",
      startDateTime: "2025-11-10T09:00:00-05:00",
      endDateTime: "2025-11-10T10:00:00-05:00"
    },
    {
      id: 5,
      title: "Panel Discussion: Future of Cardiology",
      date: "Monday, November 10, 2025",
      time: "2:00 PM EST",
      speaker: "Various",
      employee: "",
      location: "Conference Room C",
      startDateTime: "2025-11-10T14:00:00-05:00",
      endDateTime: "2025-11-10T15:30:00-05:00"
    }
  ]

  const filteredSessions = sessions.filter(session =>
    session.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    session.speaker.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedSessions = filteredSessions.reduce((acc, session) => {
    (acc[session.date] = acc[session.date] || []).push(session);
    return acc;
  }, {});



  useEffect(() => {
    if (window.addeventatc) {
      window.addeventatc.refresh();
    }
  }, [filteredSessions]);

  return (
    <div className="p-4">
      <div className="mb-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
          <p className="text-sm text-blue-800 font-medium">Recommended for Us</p>
        </div>
      </div>
      
      <SearchBar 
        placeholder="Search sessions..."
        value={searchTerm}
        onChange={setSearchTerm}
      />
      
      <div className="space-y-4">
        {Object.entries(groupedSessions).map(([date, sessions]) => (
          <div key={date}>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">{date}</h2>
            <div className="space-y-3">
              {sessions.map(session => (
                <SessionCard
                  key={session.id}
                  title={session.title}
                  date={session.date}
                  time={session.time}
                  speaker={session.speaker}
                  employee={session.employee}
                  session={session}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SessionsPage

