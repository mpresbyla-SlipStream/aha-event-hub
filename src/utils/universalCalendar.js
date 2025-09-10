// Universal calendar link generator using AddCal service
export const generateUniversalCalendarLink = (session) => {
  const eventTitle = `AHA 2025: ${session.title}`;
  const eventDescription = `Speaker: ${session.speaker}\nEmployee: ${session.employee}\nDate: ${session.date}\nTime: ${session.time}`;
  const location = session.location || '';
  
  // Convert ISO datetime to AddCal format
  const startDate = new Date(session.startDateTime);
  const endDate = new Date(session.endDateTime);
  
  // Format dates for AddCal API (YYYY-MM-DD HH:MM:SS format)
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };
  
  const startFormatted = formatDate(startDate);
  const endFormatted = formatDate(endDate);
  
  // Create AddCal universal link
  const baseUrl = 'https://addcal.io/e';
  const params = new URLSearchParams({
    title: eventTitle,
    start: startFormatted,
    end: endFormatted,
    description: eventDescription,
    location: location,
    timezone: 'America/New_York' // Adjust based on your event timezone
  });
  
  return `${baseUrl}?${params.toString()}`;
};

// Alternative: Generate direct calendar links for each platform
export const generatePlatformLinks = (session) => {
  const eventTitle = `AHA 2025: ${session.title}`;
  const eventDetails = `Speaker: ${session.speaker}\nEmployee: ${session.employee}\nDate: ${session.date}\nTime: ${session.time}`;
  const location = session.location || '';
  
  // Format dates for Google Calendar (YYYYMMDDTHHMMSSZ format)
  const formatGoogleDate = (dateTime) => {
    return new Date(dateTime).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  };
  
  const startDate = formatGoogleDate(session.startDateTime);
  const endDate = formatGoogleDate(session.endDateTime);
  
  return {
    google: `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&details=${encodeURIComponent(eventDetails)}&location=${encodeURIComponent(location)}&dates=${encodeURIComponent(`${startDate}/${endDate}`)}`,
    
    outlook: `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(eventTitle)}&body=${encodeURIComponent(eventDetails)}&location=${encodeURIComponent(location)}&startdt=${encodeURIComponent(session.startDateTime)}&enddt=${encodeURIComponent(session.endDateTime)}`,
    
    apple: `data:text/calendar;charset=utf8,BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
URL:${window.location.href}
DTSTART:${startDate}
DTEND:${endDate}
SUMMARY:${eventTitle}
DESCRIPTION:${eventDetails}
LOCATION:${location}
END:VEVENT
END:VCALENDAR`,
    
    yahoo: `https://calendar.yahoo.com/?v=60&view=d&type=20&title=${encodeURIComponent(eventTitle)}&st=${startDate}&dur=false&desc=${encodeURIComponent(eventDetails)}&in_loc=${encodeURIComponent(location)}`
  };
};

