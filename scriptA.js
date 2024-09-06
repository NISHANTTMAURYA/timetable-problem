const csvDataA  = `
Date,Day,8:45 to 9:45 am,9:45 to 10:45 am,10:45 to 11:00 am,11:00 to 12:00 am,12:00 to 1:00 pm,1:00 to 1:30 pm,1:30 to 2:30 pm,2:30 to 3:30 pm,3:30 to 4:30 pm
21-08-24,Wednesday,COA(HP),LE(SSR),Short Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),Lunch Break,"VP (SSR)(Day 3) (A;B:11;G:2;H:4)",IDT (KKW),IDT (KKW)
22-08-24,Thursday,,DMGT(Tut) (RSP),Short Break,DMGT(RSP),COA(HP),Lunch Break,HVPE (AB),RES(VS),IDT (KKW)
23-08-24,Friday,CC,CC,Short Break,HVPE(P) (AB),HVPE(P)(AB),Lunch Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),IDT (KKW)
24-08-24,Saturday,CRMD,CRMD,Short Break,CRMD,CRMD,Lunch Break,CRMD,CRMD,CRMD
25-08-24,Sunday,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY
26-08-24,Monday,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),Short Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),Lunch Break,DS(AAP),"VP (SSR) (Day 1) (G:17;B:7;C;D)/ SPCF (JN)(Day 1)",IDT (KKW)
27-08-24,Tuesday,IDT (KKW),IDT (KKW),Short Break,DMGT(RSP),DS(AAP),Lunch Break,LE(DAB),IDT (KKW),IDT (KKW)
28-08-24,Wednesday,COA(HP),LE(SSR),Short Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),Lunch Break,"VP (SSR)(Day 3) (A;B:11;G:2;H:4)",IDT (KKW),IDT (KKW)
29-08-24,Thursday,,DMGT(Tut) (RSP),Short Break,DMGT(RSP),COA(HP),Lunch Break,HVPE (AB),RES(VS),IDT (KKW)
30-08-24,Friday,CC,CC,Short Break,HVPE(P) (AB),HVPE(P)(AB),Lunch Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),IDT (KKW)
31-08-24,Saturday,CC,CC,Short Break,FPTI,FPTI,Lunch Break,CEP,CEP,CEP
01-09-24,Sunday,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY
02-09-24,Monday,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),Short Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),Lunch Break,DS(AAP),"VP (SSR) (Day 1) (G:17;B:7;C;D)/ SPCF (JN)(Day 1)",IDT (KKW)
03-09-24,Tuesday,IDT (KKW),IDT (KKW),Short Break,DMGT(RSP),DS(AAP),Lunch Break,LE(DAB),IDT (KKW),IDT (KKW)
04-09-24,Wednesday,COA(HP),LE(SSR),Short Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),Lunch Break,"VP (SSR)(Day 3) (A;B:11;G:2;H:4)",IDT (KKW),IDT (KKW)
05-09-24,Thursday,,DMGT(Tut) (RSP),Short Break,DMGT(RSP),COA(HP),Lunch Break,HVPE (AB),RES(VS),IDT (KKW)
06-09-24,Friday,CC,CC,Short Break,HVPE(P) (AB),HVPE(P)(AB),Lunch Break,Lab (SECE/SEAIDS),,IDT (KKW)
07-09-24,Saturday,HOLIDAY,HOLIDAY,Short Break,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY
08-09-24,Sunday,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAYHOLIDAY,HOLIDAY,HOLIDAY
09-09-24,Monday,MSE,MSE,Short Break,MSE,MSE,Lunch Break,MSE,MSE,MSE
10-09-24,Tuesday,MSE,MSE,Short Break,MSE,MSE,Lunch Break,MSE,MSE,MSE
11-09-24,Wednesday,MSE,MSE,Short Break,MSE,MSE,Lunch Break,MSE,MSE,MSE
12-09-24,Thursday,MSE,MSE,Short Break,MSE,MSE,Lunch Break,MSE,MSE,MSE
13-09-24,Friday,MSE,MSE,Short Break,MSE,MSE,Lunch Break,MSE,MSE,MSE
14-09-24,Saturday,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY
15-09-24,Sunday,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY
16-09-24,Monday,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY
17-09-24,Tuesday,MSE,MSE,Short Break,MSE,MSE,Lunch Break,MSE,MSE,MSE
18-09-24,Wednesday,COA(HP),LE(SSR),Short Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),Lunch Break,"VP (SSR)(Day 3) (A;B:11;G:2;H:4)",IDT (KKW),IDT (KKW)
19-09-24,Thursday,,DMGT(Tut) (RSP),Short Break,DMGT(RSP),COA(HP),Lunch Break,HVPE (AB),RES(VS),IDT (KKW)
20-09-24,Friday,CC,CC,Short Break,HVPE(P) (AB),HVPE(P)(AB),Lunch Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),IDT (KKW)
21-09-24,Saturday,CC,CC,Short Break,FPTI,FPTI,Lunch Break,CEP,CEP,CEP
22-09-24,Sunday,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY
23-09-24,Monday,TL/OH,TL/OH,Short Break,TL/OH,TL/OH,Lunch Break,TL/OH,TL/OH,TL/OH
24-09-24,Tuesday,IDT (KKW),IDT (KKW),Short Break,DMGT(RSP),DS(AAP),Lunch Break,LE(DAB),IDT ,IDT (KKW)
25-09-24,Wednesday,COA(HP),LE(SSR),Short Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),Lunch Break,"VP (SSR)(Day 3) (A;B:11;G:2;H:4)",IDT (KKW),IDT (KKW)
26-09-24,Thursday,,DMGT(Tut) (RSP),Short Break,DMGT(RSP),COA(HP),Lunch Break,HVPE (AB),RES(VS),IDT (KKW)
27-09-24,Friday,CC,CC,Short Break,HVPE(P) (AB),HVPE(P)(AB),Lunch Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),IDT (KKW)
28-09-24,Saturday,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY
29-09-24,Sunday,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY
30-09-24,Monday,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),Short Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),Lunch Break,DS(AAP),"VP (SSR) (Day 1) (G:17;B:7;C;D)/ SPCF (JN)(Day 1)",IDT (KKW)
01-10-24,Tuesday,IDT (KKW),IDT (KKW),Short Break,DMGT(RSP),DS(AAP),Lunch Break,LE(DAB),IDT,IDT (KKW)
02-10-24,Wednesday,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY
03-10-24,Thursday,,DMGT(Tut) (RSP),Short Break,DMGT(RSP),COA(HP),Lunch Break,HVPE (AB),RES(VS),IDT (KKW)
04-10-24,Friday,CC,CC,Short Break,HVPE(P) (AB),HVPE(P)(AB),Lunch Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),IDT (KKW)
05-10-24,Saturday,CC,CC,Short Break,FPTI,FPTI,Lunch Break,CEP,CEP,CEP
06-10-24,Sunday,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY
07-10-24,Monday,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),Short Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),Lunch Break,DS(AAP),"VP (SSR) (Day 1) (G:17;B:7;C;D)/ SPCF (JN)(Day 1)",IDT (KKW)
08-10-24,Tuesday,IDT (KKW),IDT (KKW),Short Break,DMGT(RSP),DS(AAP),Lunch Break,LE(DAB),IDT ,IDT (KKW)
09-10-24,Wednesday,COA(HP),LE(SSR),Short Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),Lunch Break,"VP (SSR)(Day 3) (A;B:11;G:2;H:4)",IDT ,IDT (KKW)
10-10-24,Thursday,,DSGT(Tut) (RSP),Short Break,DMGT(RSP),COA(HP),Lunch Break,HVPE (AB),RES(VS),IDT (KKW)
11-10-24,Friday,CC,CC,Short Break,HVPE(P) (AB),HVPE(P)(AB),Lunch Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),IDT (KKW)
12-10-24,Saturday,HOLIDAY,HOLIDAY,Short Break,HOLIDAY,HOLIDAY,Lunch Break,HOLIDAY,HOLIDAY,HOLIDAY
13-10-24,Sunday,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY
14-10-24,Monday,LE,LE,Short Break,LE,LE,Lunch Break,LE,LE,
15-10-24,Tuesday,LE,LE,Short Break,LE,LE,Lunch Break,LE,LE,
16-10-24,Wednesday,LE,LE,Short Break,LE,LE,Lunch Break,LE,LE,
17-10-24,Thursday,FPTI,FPTI,Short Break,FPTI,FPTI,Lunch Break,FPTI,FPTI,
18-10-24,Friday,FPTI,FPTI,Short Break,FPTI,FPTI,Lunch Break,FPTI,FPTI,
19-10-24,Saturday,FPTI,FPTI,Short Break,FPTI,FPTI,Lunch Break,FPTI,FPTI,
20-10-24,Sunday,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY
21-10-24,Monday,IDT,IDT,Short Break,IDT,IDT,Lunch Break,IDT,IDT,
22-10-24,Tuesday,IDT,IDT,Short Break,IDT,IDT,Lunch Break,IDT,IDT,
23-10-24,Wednesday,IDT,IDT,Short Break,IDT,IDT,Lunch Break,IDT,IDT,
24-10-24,Thursday,CRESCENDO,CRESCENDO,Short Break,CRESCENDO,CRESCENDO,Lunch Break,CRESCENDO,CRESCENDO,CRESCENDO
25-10-24,Friday,CRESCENDO,CRESCENDO,Short Break,CRESCENDO,CRESCENDO,Lunch Break,CRESCENDO,CRESCENDO,CRESCENDO
26-10-24,Saturday,CRESCENDO,CRESCENDO,Short Break,CRESCENDO,CRESCENDO,Lunch Break,CRESCENDO,CRESCENDO,CRESCENDO
27-10-24,Sunday,CRESCENDO,CRESCENDO,Short Break,CRESCENDO,CRESCENDO,Lunch Break,CRESCENDO,CRESCENDO,CRESCENDO
28-10-24,Monday,Lab,Lab,Short Break,Lab,Lab,Lunch Break,DS(AAP),"VP (SSR) (Day 1) (G:17;B:7;C;D)/ SPCF (JN)(Day 1)",IDT (KKW)
29-10-24,Tuesday,,,Short Break,DMGT(RSP),DS(AAP),Lunch Break,LE(DAB),IDT (KKW),IDT (KKW)
30-10-24,Wednesday,COA(HP),LE(SSR),Short Break,Lab,Lab,Lunch Break,"VP (SSR)(Day 3) (A;B:11;G:2;H:4)",IDT (KKW),IDT (KKW)
31-10-24,Thursday,,DMGT(Tut) (RSP),Short Break,DMGT(RSP),COA(HP),Lunch Break,HVPE (AB),RES(VS),IDT (KKW)
01-11-24,Friday,HOLIDAY,HOLIDAY,Short Break,HOLIDAY,HOLIDAY,Lunch Break,HOLIDAY,HOLIDAY,HOLIDAY
02-11-24,Saturday,CC,CC,Short Break,FPTI,FPTI,Lunch Break,CEP,CEP,CEP
03-11-24,Sunday,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY
04-11-24,Monday,Lab,Lab,Short Break,Lab,Lab,Lunch Break,DS(AAP),"VP (SSR) (Day 1) (G:17;B:7;C;D)/ SPCF (JN)(Day 1)",IDT (KKW)
05-11-24,Tuesday,IDT (KKW),IDT (KKW),Short Break,DMGT(RSP),DS(AAP),Lunch Break,LE(DAB),IDT (KKW),IDT (KKW)
06-11-24,Wednesday,COA(HP),LE(SSR),Short Break,Lab,Lab,Lunch Break,"VP (SSR)(Day 3) (A;B:11;G:2;H:4)",IDT (KKW),IDT (KKW)
07-11-24,Thursday,,DSGT(Tut) (RSP),Short Break,DMGT(RSP),COA(HP),Lunch Break,HVPE (AB),RES(VS),IDT (KKW)
08-11-24,Friday,CC,CC,Short Break,HVPE(P) (AB),HVPE(P)(AB),Lunch Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),IDT (KKW)
09-11-24,Saturday,,,Short Break,,,Lunch Break,,,
10-11-24,Sunday,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY
11-11-24,Monday,Lab,Lab,Short Break,Lab,Lab,Lunch Break,DS(AAP),"VP (SSR) (Day 1) (G:17;B:7;C;D)/ SPCF (JN)(Day 1)",IDT (KKW)
12-11-24,Tuesday,IDT (KKW),IDT (KKW),Short Break,DMGT(RSP),DS(AAP),Lunch Break,LE(DAB),IDT (KKW),IDT (KKW)
13-11-24,Wednesday,COA(HP),LE(SSR),Short Break,Lab,Lab,Lunch Break,"VP (SSR)(Day 3) (A;B:11;G:2;H:4)",IDT (KKW),IDT (KKW)
14-11-24,Thursday,,DMGT(Tut) (RSP),Short Break,DMGT(RSP),COA(HP),Lunch Break,HVPE (AB),RES(VS),IDT (KKW)
15-11-24,Friday,HOLIDAY,HOLIDAY,Short Break,HOLIDAY,HOLIDAY,Lunch Break,HOLIDAY,HOLIDAY,HOLIDAY
16-11-24,Saturday,CC,CC,Short Break,FPTI,FPTI,Lunch Break,CEP,CEP,CEP
17-11-24,Sunday,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY
18-11-24,Monday,Lab,Lab,Short Break,Lab,Lab,Lunch Break,DS(AAP),"VP (SSR) (Day 1) (G:17;B:7;C;D)/ SPCF (JN)(Day 1)",IDT (KKW)
19-11-24,Tuesday,IDT (KKW),IDT (KKW),Short Break,DMGT(RSP),DS(AAP),Lunch Break,LE(DAB),IDT (KKW),IDT (KKW)
20-11-24,Wednesday,COA(HP),LE(SSR),Short Break,Lab,Lab,Lunch Break,"VP (SSR)(Day 3) (A;B:11;G:2;H:4)",IDT (KKW),IDT (KKW)
21-11-24,Thursday,ESE,ESE,Short Break,ESE,ESE,Lunch Break,ESE,ESE,ESE
22-11-24,Friday,ESE,ESE,Short Break,ESE,ESE,Lunch Break,ESE,ESE,ESE
23-11-24,Saturday,,,Short Break,,,Lunch Break,,,
24-11-24,Sunday,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY
25-11-24,Monday,ESE,ESE,Short Break,ESE,ESE,Lunch Break,ESE,ESE,ESE
26-11-24,Tuesday,ESE,ESE,Short Break,ESE,ESE,Lunch Break,ESE,ESE,ESE
27-11-24,Wednesday,ESE,ESE,Short Break,ESE,ESE,Lunch Break,ESE,ESE,ESE
28-11-24,Thursday,ESE,ESE,Short Break,ESE,ESE,Lunch Break,ESE,ESE,ESE
29-11-24,Friday,ESE,ESE,Short Break,ESE,ESE,Lunch Break,ESE,ESE,ESE
30-11-24,Saturday,ESE,ESE,Short Break,ESE,ESE,Lunch Break,ESE,ESE,ESE
01-12-24,Sunday,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY
02-12-24,Monday,ESE,ESE,Short Break,ESE,ESE,Lunch Break,ESE,ESE,ESE
03-12-24,Tuesday,Remedial,Remedial,Short Break,Remedial,Remedial,Lunch Break,Remedial,Remedial,Remedial
04-12-24,Wednesday,Remedial,Remedial,Short Break,Remedial,Remedial,Lunch Break,Remedial,Remedial,Remedial
05-12-24,Thursday,Remedial,Remedial,Short Break,Remedial,Remedial,Lunch Break,Remedial,Remedial,Remedial
06-12-24,Friday,Remedial,Remedial,Short Break,Remedial,Remedial,Lunch Break,Remedial,Remedial,Remedial
07-12-24,Saturday,TL/OH,TL/OH,Short Break,TL/OH,TL/OH,Lunch Break,TL/OH,TL/OH,TL/OH
08-12-24,Sunday,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY
09-12-24,Monday,Remedial,Remedial,Short Break,Remedial,Remedial,Lunch Break,Remedial,Remedial,Remedial
10-12-24,Tuesday,Remedial,Remedial,Short Break,Remedial,Remedial,Lunch Break,Remedial,Remedial,Remedial







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

function formatDateForComparison(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JS
    const year = date.getFullYear().toString().slice(-2);
    return `${day}-${month}-${year}`;
}

function loadDataForDateA(date) {
    const formattedDate = formatDateForComparison(date);
    const data = parseCSV(csvDataA);
    return data.find(row => row.Date === formattedDate);
}

function loadTimetablesA() {
    const dateInput = document.getElementById('dateInputA').value || new Date().toISOString().split('T')[0];
    const selectedDate = new Date(dateInput);

    const previousDate = new Date(selectedDate);
    previousDate.setDate(selectedDate.getDate() - 1);

    const nextDate = new Date(selectedDate);
    nextDate.setDate(selectedDate.getDate() + 1);

    const dates = [previousDate, selectedDate, nextDate];

    const tbody = document.getElementById('csvTableA').querySelector('tbody');
    tbody.innerHTML = ''; 

    dates.forEach(date => {
        const dateString = date.toISOString().split('T')[0];
        const data = loadDataForDateA(dateString);

        if (data) {
            const row = document.createElement('tr');
            Object.values(data).slice(1).forEach(value => {
                const cell = document.createElement('td');
                cell.textContent = value || 'N/A';
                row.appendChild(cell);
            });
            tbody.appendChild(row);
        } else {
            const row = document.createElement('tr');
            const cell = document.createElement('td');
            cell.textContent = `No data found for ${formatDateForComparison(dateString)}`;
            cell.colSpan = 10;
            row.appendChild(cell);
            tbody.appendChild(row);
        }
    });
}

function highlightCurrentTimeColumnA() {
    const currentTime = new Date().toTimeString().slice(0, 5); 

    const table = document.getElementById('csvTableA');
    const headerCells = table.querySelectorAll('thead th');
    const rows = table.querySelectorAll('tbody tr');

    headerCells.forEach((headerCell, index) => {
        if (headerCell.textContent.trim() === currentTime) {
            headerCell.style.backgroundColor = 'yellow'; 
            rows.forEach(row => {
                const cells = row.querySelectorAll('td');
                if (cells[index]) {
                    cells[index].style.backgroundColor = 'yellow'; 
                }
            });
        }
    });
}



window.onload = function() {
    loadTimetablesA(); 
    highlightCurrentTimeColumnA(); 
    
};


document.getElementById('dateInputA').addEventListener('change', () => {
    loadTimetablesA();
});
