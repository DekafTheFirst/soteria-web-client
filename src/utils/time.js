export const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const date = dateObject.toLocaleDateString('en-US', {
        weekday: 'long', // Display the full name of the weekday
        year: 'numeric', // Display the year
        month: 'long', // Display the full name of the month
        day: 'numeric',// Display the day of the month
    });

    return (date)
}

export const formatDateWithoutWeekday = (dateString) => {
    const dateObject = new Date(dateString);
    const date = dateObject.toLocaleDateString('en-US', {
        weekday: false, // Display the full name of the weekday
        year: 'numeric', // Display the year
        month: 'long', // Display the full name of the month
        day: 'numeric',// Display the day of the month
    });

    return (date)
}

export const formatTime = (timeString) => {
    // Split the time string into hours, minutes, and seconds
    const [hours, minutes, seconds] = timeString.split(':'); 
  
    // Create a new Date object with today's date and the provided time
    const date = new Date();
    date.setHours(parseInt(hours, 10));
    date.setMinutes(parseInt(minutes, 10));
    date.setSeconds(parseInt(seconds, 10));
  
    // Format the time string using toLocaleTimeString
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}



