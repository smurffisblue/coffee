
function fetchData() {
    const url = document.getElementById("urlInput").value;

    axios.get(url)
        .then(response => {
            const data = response.data;
            const table = generateTableHTML(data);
            displayTable(table);
        })
        .catch(error => {
            console.error('Terjadi kesalahan:', error);
        });
}

function generateTableHTML(data) {
    let html = "<table><tr>";
    for (let key in data[0]) {
        html += "<th>" + key + "</th>";
    }
    html += "</tr>";
    data.forEach(row => {
        html += "<tr>";
        for (let key in row) {
            html += "<td>" + row[key] + "</td>";
        }
        html += "</tr>";
    });
    return html + "</table>";
}

function displayTable(tableHTML) {
    const resultTable = document.getElementById("resultTable");
    resultTable.innerHTML = tableHTML;
}

// praktikum6.js

document.addEventListener("DOMContentLoaded", function() {
    const fetchButton = document.getElementById("fetchButton");
    fetchButton.addEventListener("click", fetchData);
});
