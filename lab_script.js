const labCsvData = `Day,Time,Subject,Batch,Faculty,Lab
Monday,8.45-10.45,DS-19,A,PMD,601
Monday,11.00-1.00,OOPJ-19,A,JM,601
Wednesday,11.00-1.00,SPCF-19,A,HP,803
Friday,1.30-3.30,VP-19,A,SAP,310 (currently 309)
Monday,8.45-10.45,SPCF-19,B,JN,609
Monday,11.00-1.00,VP-19,B,SAP,310 (currently 309)
Wednesday,11.00-1.00,DS-19,B,AAP,604
Friday,1.30-3.30,OOPJ-19,B,PKP,810 (Currently 809)
Monday,8.45-10.45,VP-19,C,SAP,310(Currently 309)
Monday,11.00-1.00,SPCF-19;SPCF-5,C,KKW,802
Wednesday,11.00-1.00,OOPJ-19,C,PZS,810 (Currently 809)
Friday,1.30-3.30,DS-19,C,SN,603
Monday,8.45-10.45,VP 20,D,SAM,811 (currently 810)
Monday,11.00-1.00,OOPJ-20,D,SB,804(A)
Wednesday,11.00-1.00,DS-20,D,PHD,612 (Currently 611)
Friday,1.30-3.30,SPCF-20,D,KKW,811 (currently 810)
Monday,8.45-10.45,DS-20,E,SN,603
Monday,11.00-1.00,OOPJ-20,E,PKP,602
Wednesday,11.00-1.00,RE-20,E,V5,402
Friday,1.30-3.30,SPCF-20,E,JN,802
Monday,8.45-10.45,CG-10(Only VP and CG),F,GBT,803
Monday,11.00-1.00,CG-13 & CG-5,F,GBT,803
Monday,8.45-10.45,SPCF-21,F,HP,612 (currently 611)
Monday,11.00-1.00,RE-16 & RE-13,F,VS,402
Wednesday,11.00-1.00,DS-16,F,PMD,802
Friday,1.30-3.30,OOPJ-21,F,JM,711 (Currently 710)
Monday,8.45-10.45,OOPJ-19,G,JM,711 (Currently 710)
Monday,11.00-1.00,DS-19,G,AAP,604
Wednesday,11.00-1.00,VP-19,G,SAP,310 (currently 309)
Friday,1.30-3.30,RE-19,G,VS,402
Monday,8.45-10.45,CG-10(Only VP and CG),H,GBT,803
Monday,11.00-1.00,VP-10;VP-9,H,SAM,811 (currently 810)
Monday,8.45-10.45,RE-22,H,VS,402
Monday,11.00-1.00,CG-13;CG-5,H,GBT,803
Wednesday,11.00-1.00,OOPJ-9,H,SB,711 (Currently 710)
Friday,1.30-3.30,DS-9,H,PHD,609
Monday,8.45-10.45,OOPJ-27,I,SB,811 (currently 810)
Monday,11.00-1.00,DS-27,I,PHD,603
Wednesday,11.00-1.00,VP-27,I,SAM,811 (currently 810)
Friday,1.30-3.30,CG-27,I,GBT,80
Monday,11.00-1.00,SPCF-19;SPCF-5,J,KKW,802 
Monday,11.00-1.00,RE-16;RE-13,J,VS,402
Monday,8.45-10.45,CG-10,J,GBT,803
Monday,11.00-1.00,VP-10;VP-9,J,SAM,811 (currently 810)
Wednesday,11.00-1.00,OOPJ-28,J,SB,804
Friday,1.30-3.30,DS-28,J,PHD,804
`;

function parseCSV(csv) {
    const lines = csv.trim().split('\n');
    const headers = lines[0].split(',');

    return lines.slice(1).map(line => {
        const values = line.split(',');
        const obj = {};
        headers.forEach((header, index) => {
            if (index < values.length) {
                obj[header.trim()] = values[index] ? values[index].trim().replace(/^"|"$/g, '') : '';
            }
        });
        return obj;
    });
}

function filterByBatch(batch) {
    const selectedBatch = batch || document.getElementById('batchSelect').value;
    const data = parseCSV(labCsvData);

    const tbody = document.getElementById('labTable').querySelector('tbody');
    tbody.innerHTML = ''; 

    data.forEach(row => {
        if (selectedBatch === 'All' || (row.Batch && row.Batch.includes(selectedBatch))) {  
            const tr = document.createElement('tr');
            Object.values(row).forEach(value => {
                const td = document.createElement('td');
                td.textContent = value || 'N/A';
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        }
    });
}

window.onload = function() {
    
    
    setTimeout(() => {
        loadTimetables(); 
        highlightCurrentTimeColumn(); 
        loadTimetablesA(); 
        highlightCurrentTimeColumnA(); 
    }, 500); // Adjust the timeout duration as needed
};

// Add an event listener to the batch select dropdown to filter data
document.getElementById('batchSelect').addEventListener('change', function() {
    filterByBatch(this.value);
});

