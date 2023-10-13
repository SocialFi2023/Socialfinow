const apiKey = '3dd68de743msh96ad8045f9e98f5p10f04bjsne7a31f1ac768';

// Function to fetch Ethereum data based on the selected time frame
async function fetchData(timeFrame) {
    try {
        const contractAddress = '0xC16F200c5B6930bcAd195508D243712F85D4a73b';
        const endpoint = 'https://blockchainzakutynskyv1.p.rapidapi.com/getMultiAddress';

        const options = {
            method: 'POST',
            url: endpoint,
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'BlockchainzakutynskyV1.p.rapidapi.com',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: `address=${contractAddress}`,
        };

        const response = await axios.request(options);

        // Handle the response data and update the table
        const tableData = document.getElementById('tableData');
        tableData.innerHTML = '';

        // Process the response data to populate the table
        // You'll need to extract and format the relevant data from the response

    } catch (error) {
        console.error(error);
    }
}

// Function to update the table based on the selected time frame
function updateTable() {
    const timeFrame = document.getElementById('timeFrame').value;
    fetchData(timeFrame);
}

// Add an event listener for the time frame dropdown
document.getElementById('timeFrame').addEventListener('change', updateTable);

// Initial data load
updateTable();
