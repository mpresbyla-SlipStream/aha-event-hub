// ICS file generator utility for calendar events
export const generateICS = (session) => {
  const formatDateTime = (dateTime) => {
    // Convert ISO string to ICS format (YYYYMMDDTHHMMSSZ)
    return new Date(dateTime).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  };

  const eventTitle = `AHA 2025: ${session.title}`;
  const eventDetails = `Speaker: ${session.speaker}\\nEmployee: ${session.employee}\\nDate: ${session.date}\\nTime: ${session.time}`;
  const startDate = formatDateTime(session.startDateTime);
  const endDate = formatDateTime(session.endDateTime);
  const location = session.location || '';
  
  // Generate unique ID for the event
  const uid = `aha2025-${session.id}-${Date.now()}@aha-event-hub.com`;
  
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//AHA 2025 Event Hub//Event Calendar//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTART:${startDate}`,
    `DTEND:${endDate}`,
    `SUMMARY:${eventTitle}`,
    `DESCRIPTION:${eventDetails}`,
    `LOCATION:${location}`,
    `STATUS:CONFIRMED`,
    `SEQUENCE:0`,
    `CREATED:${formatDateTime(new Date().toISOString())}`,
    `LAST-MODIFIED:${formatDateTime(new Date().toISOString())}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  return icsContent;
};

export const downloadICS = (session) => {
  const icsContent = generateICS(session);
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `AHA2025-${session.title.replace(/[^a-zA-Z0-9]/g, '-')}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

