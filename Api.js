const apiUrl = 'https://prod-api.kosetto.com';
const authKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNss...'; // Replace with your actual authentication key

async function getUsers() {
  try {
    const response = await fetch(`${apiUrl}/users`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${authKey}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}
