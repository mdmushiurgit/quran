let currentCount = 0;
let maxCount = 6; // Initial max count for the first radio button

function count() {
    if (document.querySelector('input[name="counter"]:checked')) {
        let selectedValue = document.querySelector('input[name="counter"]:checked').value;

        if (selectedValue === "0-7") {
            maxCount = 6;
        } else if (selectedValue === "0-33") {
            maxCount = 32;
        } else if (selectedValue === "0-99") {
            maxCount = 98;
        } else if (selectedValue === "0-99-unlimited") {
            maxCount = Infinity;
        }

        currentCount = (currentCount + 1) % (maxCount + 1);
        document.getElementById("count-display").textContent = "Count: " + currentCount;

        if (document.getElementById("vibrationCheckbox").checked) {
            // Vibrate for 100ms
            window.navigator.vibrate(100);
        }
    } else {
        console.log("Please select a counting range first.");
    }
}
function resetCount() {
    currentCount = 0;
    document.getElementById("count-display").textContent = "Count: " + currentCount;
}






function updateDates() {
    const currentDate = new Date();

    // Arabic Calendar
    const arabicDateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', calendar: 'islamic-umalqura' };
    document.getElementById("arabicDate").textContent = currentDate.toLocaleDateString('ar-EG', arabicDateOptions);

    // English Calendar
    const englishDateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("englishDate").textContent = currentDate.toLocaleDateString('en-US', englishDateOptions);

    // Bangla Calendar (Bengali)
    const banglaDateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', calendar: 'bengali' };
    document.getElementById("banglaDate").textContent = currentDate.toLocaleDateString('bn-BD', banglaDateOptions);
}

// Call the function to update dates immediately
updateDates();

// Update dates every second (1000 milliseconds)
setInterval(updateDates, 1000);
