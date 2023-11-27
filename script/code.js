function convertMinutesToSeconds() {
    var minutesInput = document.getElementById("Minutes").value;
    if (!isNaN(minutesInput)) {
        var seconds = minutesInput * 60;
        document.querySelector('[data-output]').textContent = (minutesInput + " minutes is equal to " + seconds + " seconds.");
    } else {
        alert("Please enter a valid number for minutes.");
    }
    
}