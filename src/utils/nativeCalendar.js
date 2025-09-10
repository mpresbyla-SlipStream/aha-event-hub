// Native calendar integration for iOS and Android
export const detectPlatform = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'ios';
  }
  
  if (/android/i.test(userAgent)) {
    return 'android';
  }
  
  return 'web';
};

export const generateNativeCalendarLink = (session) => {
  const platform = detectPlatform();
  const eventTitle = `AHA 2025: ${session.title}`;
  const eventDescription = `Speaker: ${session.speaker}\nEmployee: ${session.employee}\nDate: ${session.date}\nTime: ${session.time}`;
  const location = session.location || '';
  
  // Convert to milliseconds for Android
  const startTime = new Date(session.startDateTime).getTime();
  const endTime = new Date(session.endDateTime).getTime();
  
  switch (platform) {
    case 'ios':
      // For iOS, we'll use calshow:// to open calendar app
      // Note: iOS has limited URL scheme support for event creation
      return 'calshow://';
      
    case 'android':
      // Android Intent URL for native calendar app
      const androidIntentUrl = `intent://calendar/events#Intent;` +
        `action=android.intent.action.INSERT;` +
        `S.title=${encodeURIComponent(eventTitle)};` +
        `S.description=${encodeURIComponent(eventDescription)};` +
        `S.eventLocation=${encodeURIComponent(location)};` +
        `l.beginTime=${startTime};` +
        `l.endTime=${endTime};` +
        `end`;
      return androidIntentUrl;
      
    default:
      // Web fallback - return null to use other methods
      return null;
  }
};

export const openNativeCalendar = (session) => {
  const platform = detectPlatform();
  const nativeLink = generateNativeCalendarLink(session);
  
  if (platform === 'ios') {
    // For iOS, open calendar app and let user create event manually
    // Or fallback to .ics download
    window.location.href = nativeLink;
    return 'ios_calendar_opened';
  } else if (platform === 'android' && nativeLink) {
    // For Android, use intent URL
    window.location.href = nativeLink;
    return 'android_intent_triggered';
  } else {
    // Web or unsupported platform
    return 'unsupported_platform';
  }
};

// Enhanced calendar options based on platform
export const getCalendarOptions = () => {
  const platform = detectPlatform();
  
  const baseOptions = [
    { id: 'google', label: 'Google Calendar', icon: '📅' },
    { id: 'outlook', label: 'Outlook Calendar', icon: '📧' },
    { id: 'ics', label: 'Download .ics file', icon: '📄' }
  ];
  
  if (platform === 'ios') {
    return [
      { id: 'native', label: 'iPhone Calendar', icon: '📱' },
      ...baseOptions
    ];
  } else if (platform === 'android') {
    return [
      { id: 'native', label: 'Android Calendar', icon: '📱' },
      ...baseOptions
    ];
  } else {
    return baseOptions;
  }
};

