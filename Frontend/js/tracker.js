console.log("tracker.js loaded");




const form = document.getElementById("trackerForm");
const historyBody = document.getElementById("historyBody");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const value = document.getElementById("value").value;
    const type = document.getElementById("type").value;
    const notes = document.getElementById("notes").value;

    if (!date || !time || !value || !type) {
        alert("Please fill all required fields");
        return;
    }

    const data = {
        user_id: 1, // TEMP user (we will fix after login integration)
        reading_date: date,
        reading_time: time,
        glucose_value: value,
        reading_type: type,
        notes: notes
    };

    try {
        const res = await fetch("http://localhost:5000/api/tracker/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await res.json();
        alert(result.message);

        form.reset();
        loadReadings();

    } catch (err) {
        console.error(err);
        alert("Error saving reading");
    }
});

// Load readings from backend
async function loadReadings() {
    try {
        
        const userId = 1; // or the new user id from DB

const res = await fetch(`http://localhost:5000/api/tracker/${userId}`);


        const readings = await res.json();

        historyBody.innerHTML = "";

        readings.forEach(r => {
            let status = "Normal";
            let statusClass = "normal";

            if (r.glucose_value > 180) {
                status = "High";
                statusClass = "high";
            } else if (r.glucose_value < 70) {
                status = "Low";
                statusClass = "low";
            }

            historyBody.innerHTML += `
                <tr>
                    <td>${new Date(r.reading_date).toLocaleDateString()}</td>

                    <td>${r.reading_time.slice(0,5)}</td>

                    <td>${r.glucose_value}</td>
                    <td>${r.reading_type}</td>
                    <td class="status ${statusClass}">${status}</td>
                </tr>
            `;
        });

    } catch (err) {
        console.error(err);
    }
}

// Load readings on page load
loadReadings();
