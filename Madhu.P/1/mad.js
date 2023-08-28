const apiKey = "";
const apiUrl = "https://hotels4.p.rapidapi.com/locations/v2/search";
const xhr = new XMLHttpRequest();
xhr.open("GET", apiUrl, true);
xhr.setRequestHeader("X-RapidAPI-Key", apiKey);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const locations = response.suggestions[0].entities;

        const tableBody = document.getElementById("table-body");
        locations.forEach(location => {
            const row = document.createElement("tr");
            const nameCell = document.createElement("td");
            const countryCell = document.createElement("td");
            const regionCell = document.createElement("td");

            nameCell.textContent = location.name;
            countryCell.textContent = location.country.name;
            regionCell.textContent = location.region != null ? location.region.name : "-";

            row.appendChild(nameCell);
            row.appendChild(countryCell);
            row.appendChild(regionCell);
            tableBody.appendChild(row);
        });
    }
};
xhr.send();