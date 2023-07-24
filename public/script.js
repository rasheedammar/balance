const api1Ids = [/* API 1 account IDs */];
const api2Ids = [/* API 2 account IDs */];

async function fetchData() {
    try {
        const response = await fetch('/data');
        const data = await response.json();
        updateUI(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function updateUI(data) {
    const api1Data = data.api1;
    const api2Data = data.api2;

    const api1List = document.getElementById('api1-data');
    const api2List = document.getElementById('api2-data');

    api1List.innerHTML = '';
    api2List.innerHTML = '';

    api1Data.forEach((account) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${account.name}: $: ${account.balance}, %: ${account.percentage}`;
        listItem.style.color = account.percentageColor;
        api1List.appendChild(listItem);
    });

    api2Data.forEach((account) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${account.name}: $: ${account.balance}, %: ${account.percentage}`;
        listItem.style.color = account.percentageColor;
        api2List.appendChild(listItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});
