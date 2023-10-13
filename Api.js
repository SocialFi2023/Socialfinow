const apiUrl = 'https://prod-api.kosetto.com';

async function getEvents() {
  try {
    const response = await fetch(`${apiUrl}/events`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
}
