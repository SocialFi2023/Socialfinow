const apiUrl = 'https://prod-api.kosetto.com/events';

// Function to get and display events
async function getevents() {
    try {
        const response = await axios.get(apiUrl);

        // Handle the response data and update the table
        const tableData = document.getElementById('tableData');
        tableData.innerHTML = ''; // Clear existing table content

        const events = response.data; // Assuming the API response is an array of events

        events.forEach((event) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${event.name}</td>
                <td>${event.date}</td>
            `;
            tableData.appendChild(row);
        });
    } catch (error) {
        console.error(error);
    }
}

// Call the getevents function to populate the table with events
getevents();
