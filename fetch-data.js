

async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    document.getElementById('api-data').innerText = 'Loading user data...';
    const dataContainer = document.getElementById('api-data');
   try {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(apiUrl); 
    const users = await response.json();  
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  dataContainer.innerHTML = '';
  const userList = document.createElement('ul');
  users.forEach(user => {
  const listItem = document.createElement('li');
  listItem.textContent = user.name;
  userList.appendChild(listItem);
});
dataContainer.appendChild(userList);
dataContainer.textContent = 'Failed to load user data.';
document.addEventListener('DOMContentLoaded', fetchUserData);

}
