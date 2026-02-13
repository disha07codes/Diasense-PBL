console.log("dashboard.js loaded");

async function loadDashboard() {
    try {

        const userId = 1; // TEMP user id
        const res = await fetch(`http://localhost:5000/api/tracker/${userId}`);
        const readings = await res.json();

        if (!readings.length) return;

        // ===== SUMMARY CARDS =====

        const latest = readings[0];

        document.getElementById("latestReading").textContent =
            `${latest.glucose_value} mg/dL`;

        const values = readings.map(r => Number(r.glucose_value));

        document.getElementById("highestReading").textContent =
            `${Math.max(...values)} mg/dL`;

        document.getElementById("lowestReading").textContent =
            `${Math.min(...values)} mg/dL`;

        const avg =
            Math.round(values.reduce((a, b) => a + b, 0) / values.length);

        document.getElementById("weeklyAverage").textContent =
            `${avg} mg/dL`;

        // ===== RECENT READINGS TABLE =====

        const table = document.getElementById("dashboardHistory");
        table.innerHTML = "";

        readings.slice(0, 5).forEach(r => {

            let status = "Normal";
            let statusClass = "normal";

            if (r.glucose_value > 180) {
                status = "High";
                statusClass = "high";
            } else if (r.glucose_value < 70) {
                status = "Low";
                statusClass = "low";
            }

            table.innerHTML += `
                <tr>
                    <td>${r.reading_date.split("T")[0]}</td>
                    <td>${r.reading_time.substring(0,5)}</td>
                    <td>${r.glucose_value}</td>
                    <td>${r.reading_type}</td>
                    <td class="status ${statusClass}">${status}</td>
                </tr>
            `;
        });

        // ===== CHART SECTION =====

        const labels = readings
            .map(r => r.reading_date.split("T")[0])
            .reverse();

        const glucoseValues = readings
            .map(r => r.glucose_value)
            .reverse();

        const ctx = document.getElementById("glucoseChart").getContext("2d");

        new Chart(ctx, {
            type: "line",
            data: {
                labels: labels,
                datasets: [{
                    label: "Glucose Level (mg/dL)",
                    data: glucoseValues,
                    borderColor: "#4CAF50",
                    backgroundColor: "rgba(76, 175, 80, 0.2)",
                    tension: 0.3,
                    fill: true,
                    pointRadius: 5
                }]
            },
            options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: true }
    },
    scales: {
        y: { beginAtZero: false }
    }
}

        });

    } catch (err) {
        console.error("Dashboard Error:", err);
    }
}

window.onload = loadDashboard;
