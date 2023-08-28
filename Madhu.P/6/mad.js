const jsonString = '[{"id":"bk101","authors":{"author":["Gambardella","Matthew"]},"title":"Developers Guide","price":"650","publish_date":"2000-10-01"},{"id":"bk102","authors":{"author":["Rails","Kim"]},"title":"Midnight Rain","price":"225","publish_date":"2000-12-16"}]';
const displayTable = (jsonString) => {
    const data = JSON.parse(jsonString);
    const tableContainer = document.getElementById('table-container');
    const table = document.createElement('table');
      const thead = document.createElement('thead');
      const headerRow = document.createElement('tr');
      for (const key in data[0]) {
        const th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
      }
      thead.appendChild(headerRow);
      table.appendChild(thead);

   
      const tbody = document.createElement('tbody');
      data.forEach((item) => {
        const row = document.createElement('tr');
        for (const key in item) {
          const td = document.createElement('td');
          if (key === 'authors') {
            const authors = item[key].author.join(', ');
            td.textContent = authors;
          } else {
            td.textContent = item[key];
          }
          row.appendChild(td);
        }
        tbody.appendChild(row);
      });
      table.appendChild(tbody);

    tableContainer.appendChild(table);
  };


    
  displayTable(jsonString);