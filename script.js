document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    const dayElement = document.getElementById('day');
    const format12Btn = document.getElementById('format12');
    const format24Btn = document.getElementById('format24');
    const timezoneSelect = document.getElementById('timezone-select');
    
    // State
    let is24HourFormat = true;
    let currentTimezone = 'local';
    
    // Days and months
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
