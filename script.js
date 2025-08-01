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
    
    // Event listeners
    format12Btn.addEventListener('click', function() {
        is24HourFormat = false;
        format12Btn.classList.add('active');
        format24Btn.classList.remove('active');
        updateClock();
    });
    
    format24Btn.addEventListener('click', function() {
        is24HourFormat = true;
        format24Btn.classList.add('active');
        format12Btn.classList.remove('active');
        updateClock();
    });
    
    timezoneSelect.addEventListener('change', function() {
        currentTimezone = this.value;
        updateClock();
    });
    
    // Update clock function
    function updateClock() {
        const now = new Date();
        
        // Handle timezone
        let time;
        if (currentTimezone === 'local') {
            time = now;
        } else if (currentTimezone === 'UTC') {
            time = new Date(now.toLocaleString("en-US", {timeZone: "UTC"}));
        } else {
            time = new Date(now.toLocaleString("en-US", {timeZone: currentTimezone}));
        }
        
        // Get time components
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        
        // Format hours based on 12/24 hour format
        let period = '';
        if (!is24HourFormat) {
            period = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12 || 12;
        }
        
        // Format time with leading zeros
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}${period ? ' ' + period : ''}`;
        
        // Get date components
        const day = days[time.getDay()];
        const date = time.getDate();
        const month = months[time.getMonth()];
        const year = time.getFullYear();
        
        // Format date
        const formattedDate = `${month} ${date}, ${year}`;
        
        // Update DOM
        timeElement.textContent = formattedTime;
        dateElement.textContent = formattedDate;
        dayElement.textContent = day;
    }
    
    // Initial call
    updateClock();
    
    // Update every second
    setInterval(updateClock, 1000);
});
