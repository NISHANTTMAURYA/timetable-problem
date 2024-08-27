// Sample CSV data as a string for demonstration purposes
const csvData = `
Date,Day,8:45 to 9:45 am,9:45 to 10:45 am,10:45 to 11:00 am,11:00 to 12:00 am,12:00 to 1:00 pm,1:00 to 1:30 pm,1:30 to 2:30 pm,2:30 to 3:30 pm,3:30 to 4:30 pm
21-08-24,Wednesday,DMGT(Tut)(UK)  ,COA(SN),Short Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),LunchBreak,VP (SSR)(Day 3)(A;B:11;G:2;H:4),IDT (AAP),IDT (AAP)
22-08-24,Thursday,  ,COA(SN),Short Break,HVPE(P)(AB),HVPE(P)(AB),Lunch Break,IDT (AAP),RES (VS),IDT (AAP)
23-08-24,Friday,CC  ,CC,Short Break,DMGT(UK),DS (PMD),Lunch Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),IDT (AAP)
24-08-24,Saturday,CRMD  ,,Short Break,,,Lunch Break
25-08-24,Sunday, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY
26-08-24,Monday,Lab (SECE/SEAIDS)  ,Lab (SECE/SEAIDS),Short Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),Lunch Break,LE(DAB),VP (SSR) (Day 1)(G:17;B:7;CD),IDT (AAP)
27-08-24,Tuesday,  ,LE(SSR),Short Break,DS(PMD),HVPE(AB),Lunch Break,DMGT(UK),SPCF (JN) (Day 2),IDT (AAP)
28-08-24,Wednesday,DMGT(Tut)(UK)  ,COA(SN),Short Break,Lab,Lab,Lunch Break,VP (SSR)(Day 3)(A;B:11;G:2;H:4),IDT (AAP),IDT (AAP)
29-08-24,Thursday,  ,COA(SN),Short Break,HVPE(P)(AB),HVPE(P)(AB),Lunch Break,IDT (AAP),RES (VS),IDT (AAP)
30-08-24,Friday,CC  ,CC,Short Break,DMGT(UK),DS (PMD),Lunch Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),IDT (AAP)
31-08-24,Saturday,CC  ,CC,Short Break,FPTI,FPTI,Lunch Break,CEP,CEP,CEP
01-09-24,Sunday, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY
02-09-24,Monday,Lab  ,Lab,Short Break,Lab,Lab,Lunch Break,LE(DAB),VP (SSR) (Day 1)(G:17;B:7;C;D),IDT (AAP)
03-09-24,Tuesday,  ,LE(SSR),Short Break,DS(PMD),HVPE(AB),Lunch Break,DMGT(UK),SPCF (JN) (Day 2),IDT (AAP)
04-09-24,Wednesday,DMGT(Tut)(UK)  ,COA(SN),Short Break,Lab,Lab,Lunch Break,VP (SSR)(Day 3)(A;B:11;G:2;H:4),IDT (AAP),IDT (AAP)
05-09-24,Thursday,  ,COA(SN),Short Break,HVPE(P)(AB),HVPE(P)(AB),Lunch Break,IDT (AAP),RES (VS),IDT (AAP)
06-09-24,Friday,CC  ,CC,Short Break,DMGT(UK),DS (PMD),Lunch Break,Lab,Lab,IDT (AAP)
07-09-24,Saturday,HOLIDAY  ,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY
08-09-24,Sunday, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY
09-09-24,Monday,MSE  ,MSE,MSE,MSE,MSE,MSE,MSE,MSE,MSE
10-09-24,Tuesday,MSE  ,MSE,MSE,MSE,MSE,MSE,MSE,MSE,MSE
11-09-24,Wednesday,MSE  ,MSE,MSE,MSE,MSE,MSE,MSE,MSE,MSE
12-09-24,Thursday,MSE  ,MSE,MSE,MSE,MSE,MSE,MSE,MSE,MSE
13-09-24,Friday,MSE  ,MSE,MSE,MSE,MSE,MSE,MSE,MSE,MSE
14-09-24,Saturday,  ,,Short Break,,,Lunch Break
15-09-24,Sunday, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY
16-09-24,Monday,HOLIDAY  ,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY
17-09-24,Tuesday,MSE  ,MSE,MSE,MSE,MSE,MSE,MSE,MSE,MSE
18-09-24,Wednesday,DMGT(Tut)(UK)  ,COA(SN),Short Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),Lunch Break,VP (SSR)(Day 3)(A;B:11;G:2;H:4),IDT (AAP),IDT (AAP)
19-09-24,Thursday,  ,COA(SN),Short Break,HVPE(P)(AB),HVPE(P)(AB),Lunch Break,IDT (AAP),RES (VS),IDT (AAP)
20-09-24,Friday,CC  ,CC,Short Break,DMGT(UK),DS (PMD),Lunch Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),IDT (AAP)
21-09-24,Saturday,CC  ,CC,Short Break,FPTI,FPTI,Lunch Break,CEP,CEP,CEP
22-09-24,Sunday, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY
23-09-24,Monday,TL/OH  ,TL/OH,TL/OH,TL/OH,TL/OH,TL/OH,TL/OH,TL/OH,TL/OH
24-09-24,Tuesday,  ,LE(SSR),Short Break,DS(PMD),HVPE(AB),Lunch Break,DMGT(UK),SPCF (JN) (Day 2),IDT (AAP)
25-09-24,Wednesday,DMGT(Tut)(UK)  ,COA(SN),Short Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),Lunch Break,VP (SSR)(Day 3)(A;B:11;G:2;H:4),IDT (AAP),IDT (AAP)
26-09-24,Thursday,  ,COA(SN),Short Break,HVPE(P)(AB),HVPE(P)(AB),Lunch Break,IDT (AAP),RES (VS),IDT (AAP)
27-09-24,Friday,CC  ,CC,Short Break,DMGT(UK),DS (PMD),Lunch Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),IDT (AAP)
28-09-24,Saturday,  ,,Short Break,,,Lunch Break
29-09-24,Sunday, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY
30-09-24,Monday,Lab (SECE/SEAIDS)  ,Lab (SECE/SEAIDS),Short Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),Lunch Break,LE(DAB),VP (SSR) (Day 1)(G:17;B:7;C;D)SPCF (JN) (Day 2),IDT (AAP)
01-10-24,Tuesday,  ,LE(SSR),Short Break,DS(PMD),HVPE(AB),Lunch Break,DMGT(UK),SPCF (JN) (Day 2),IDT (AAP)
02-10-24,Wednesday,HOLIDAY  ,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY
03-10-24,Thursday,  ,COA(SN),Short Break,HVPE(P)(AB),HVPE(P)(AB),Lunch Break,IDT (AAP),RES (VS),IDT (AAP)
04-10-24,Friday,CC  ,CC,Short Break,DMGT(UK),DS (PMD),Lunch Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),IDT (AAP)
05-10-24,Saturday,CC  ,CC,Short Break,FPTI,FPTI,Lunch Break,CEP,CEP,CEP
06-10-24,Sunday, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY
07-10-24,Monday,Lab (SECE/SEAIDS)  ,Lab (SECE/SEAIDS),Short Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),Lunch Break,LE(DAB),VP (SSR) (Day 1)(G:17;B:7;C;D),IDT (AAP)
08-10-24,Tuesday,  ,LE(SSR),Short Break,DS(PMD),HVPE(AB),Lunch Break,DMGT(UK),SPCF (JN) (Day 2),IDT (AAP)
09-10-24,Wednesday,DMGT(Tut)(UK)  ,COA(SN),Short Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),Lunch Break,VP (SSR)(Day 3)(A;B:11;G:2;H:4),IDT (AAP),IDT (AAP)
10-10-24,Thursday,  ,COA(SN),Short Break,HVPE(P)(AB),HVPE(P)(AB),Lunch Break,IDT (AAP),RES (VS),IDT (AAP)
11-10-24,Friday,CC  ,CC,Short Break,DMGT(UK),DS (PMD),Lunch Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),IDT (AAP)
12-10-24,Saturday,HOLIDAY  ,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY
13-10-24,Sunday, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY
14-10-24,Monday,LE  ,LE,Short Break,LE,LE,Lunch Break,LE,LE
15-10-24,Tuesday,LE  ,LE,Short Break,LE,LE,Lunch Break,LE,LE
16-10-24,Wednesday,LE  ,LE,Short Break,LE,LE,Lunch Break,LE,LE
17-10-24,Thursday,FPTI  ,FPTI,Short Break,FPTI,FPTI,Lunch Break,FPTI,FPTI
18-10-24,Friday,FPTI  ,FPTI,Short Break,FPTI,FPTI,Lunch Break,FPTI,FPTI
19-10-24,Saturday,FPTI  ,FPTI,Short Break,FPTI,FPTI,Lunch Break,FPTI,FPTI
20-10-24,Sunday, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY
21-10-24,Monday,IDT  ,IDT,Short Break,IDT,IDT,Lunch Break,IDT,IDT
22-10-24,Tuesday,IDT  ,IDT,Short Break,IDT,IDT,Lunch Break,IDT,IDT
23-10-24,Wednesday,IDT  ,IDT,Short Break,IDT,IDT,Lunch Break,IDT,IDT
24-10-24,Thursday,CRESCENDO  ,CRESCENDO,CRESCENDO,CRESCENDO,CRESCENDO,CRESCENDO,CRESCENDO,CRESCENDO,CRESCENDO
25-10-24,Friday,CRESCENDO  ,CRESCENDO,CRESCENDO,CRESCENDO,CRESCENDO,CRESCENDO,CRESCENDO,CRESCENDO,CRESCENDO
26-10-24,Saturday,CRESCENDO  ,CRESCENDO,CRESCENDO,CRESCENDO,CRESCENDO,CRESCENDO,CRESCENDO,CRESCENDO,CRESCENDO
27-10-24,Sunday,CRESCENDO ,CRESCENDO,CRESCENDO,CRESCENDO,CRESCENDO,CRESCENDO,CRESCENDO,CRESCENDO,CRESCENDO
28-10-24,Monday,Lab (SECE/SEAIDS)  ,Lab (SECE/SEAIDS),Short Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),Lunch Break,LE(DAB),VP (SSR) (Day 1)(G:17;B:7;C;D),IDT (AAP)
29-10-24,Tuesday,  ,LE(SSR),Short Break,DS(PMD),HVPE(AB),Lunch Break,DMGT(UK),SPCF (JN) (Day 2),IDT (AAP)
30-10-24,Wednesday,DMGT(Tut)(UK)  ,COA(SN),Short Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),Lunch Break,VP(SSR)(Day 3)(A;B:11;G:2;H:4),IDT (AAP),IDT (AAP)
01-11-24,Friday,HOLIDAY  ,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY
02-11-24,Saturday,CC  ,CC,Short Break,FPTI,FPTI,Lunch Break,CEP,CEP,CEP
03-11-24,Sunday, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY
04-11-24,Monday,Lab (SECE/SEAIDS)  ,Lab (SECE/SEAIDS),Short Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),Lunch Break,LE(DAB),VP (SSR) (Day 1)(G:17;B:7;;C;D),IDT (AAP)
05-11-24,Tuesday,  ,LE(SSR),Short Break,DS(PMD),HVPE(AB),Lunch Break,DMGT(UK),SPCF (JN) (Day 2),IDT (AAP)
06-11-24,Wednesday,DMGT(Tut)(UK)  ,COA(SN),Short Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),Lunch Break,VP (SSR)(Day 3)(A;B:11;G:2;H:4),IDT (AAP),IDT (AAP)
07-11-24,Thursday,  ,COA(SN),Short Break,HVPE(P)(AB),HVPE(P)(AB),Lunch Break,IDT (AAP),RES (VS),IDT (AAP)
08-11-24,Friday,CC  ,CC,Short Break,DMGT(UK),DS (PMD),Lunch Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),IDT (AAP)
09-11-24,Saturday,  ,,Short Break,,,Lunch Break
10-11-24,Sunday, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY
11-11-24,Monday,Lab (SECE/SEAIDS)  ,Lab (SECE/SEAIDS),Short Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),Lunch Break,LE(DAB),VP (SSR) (Day 1)(G:17;B:7;C;D),IDT (AAP)
12-11-24,Tuesday,  ,LE(SSR),Short Break,DS(PMD),HVPE(AB),Lunch Break,DMGT(UK),SPCF (JN) (Day 2),IDT (AAP)
13-11-24,Wednesday,DMGT(Tut)(UK)  ,COA(SN),Short Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),Lunch Break,VP (SSR)(Day 3)(A;B:11;G:2;H:4),IDT (AAP),IDT (AAP)
14-11-24,Thursday,  ,COA(SN),Short Break,HVPE(P)(AB),HVPE(P)(AB),Lunch Break,IDT (AAP),RES (VS),IDT (AAP)
15-11-24,Friday,HOLIDAY  ,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY,HOLIDAY
16-11-24,Saturday,CC  ,CC,Short Break,FPTI,FPTI,Lunch Break,CEP,CEP,CEP
17-11-24,Sunday, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY
18-11-24,Monday,Lab (SECE/SEAIDS)  ,Lab (SECE/SEAIDS),Short Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),Lunch Break,LE(DAB),VP (SSR) (Day 1)(G:17;B:7;C;D)SPCF (JN) (Day 2),IDT (AAP)
19-11-24,Tuesday,  ,LE(SSR),Short Break,DS(PMD),HVPE(AB),Lunch Break,DMGT(UK),VP (SSR) (Day 1)(G:17;B:7;C;D)SPCF (JN) (Day 2),IDT (AAP)
20-11-24,Wednesday,DMGT(Tut)(UK)  ,COA(SN),Short Break,Lab (SECE/SEAIDS),Lab (SECE/SEAIDS),Lunch Break,VP (SSR)(Day 3)(A;B:11;G:2;H:4),IDT (AAP),IDT (AAP)
21-11-24,Thursday,ESE  ,ESE,ESE,ESE,ESE,ESE,ESE,ESE,ESE
22-11-24,Friday,ESE  ,ESE,ESE,ESE,ESE,ESE,ESE,ESE,ESE
23-11-24,Saturday,  ,,Short Break,,,Lunch Break
24-11-24,Sunday, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY
25-11-24,Monday,ESE  ,ESE,ESE,ESE,ESE,ESE,ESE,ESE,ESE
26-11-24,Tuesday,ESE  ,ESE,ESE,ESE,ESE,ESE,ESE,ESE,ESE
27-11-24,Wednesday,ESE  ,ESE,ESE,ESE,ESE,ESE,ESE,ESE,ESE
28-11-24,Thursday,ESE  ,ESE,ESE,ESE,ESE,ESE,ESE,ESE,ESE
29-11-24,Friday,ESE  ,ESE,ESE,ESE,ESE,ESE,ESE,ESE,ESE
30-11-24,Saturday,ESE  ,ESE,ESE,ESE,ESE,ESE,ESE,ESE,ESE
01-12-24,Sunday, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY
02-12-24,Monday,ESE  ,ESE,ESE,ESE,ESE,ESE,ESE,ESE,ESE
03-12-24,Tuesday,Remedial  ,Remedial,Remedial,Remedial,Remedial,Remedial,Remedial,Remedial,Remedial
04-12-24,Wednesday,Remedial  ,Remedial,Remedial,Remedial,Remedial,Remedial,Remedial,Remedial,Remedial
05-12-24,Thursday,Remedial  ,Remedial,Remedial,Remedial,Remedial,Remedial,Remedial,Remedial,Remedial
06-12-24,Friday,Remedial  ,Remedial,Remedial,Remedial,Remedial,Remedial,Remedial,Remedial,Remedial
07-12-24,Saturday,TL/OH  ,TL/OH,TL/OH,TL/OH,TL/OH,TL/OH,TL/OH,TL/OH,TL/OH
08-12-24,Sunday, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY, HOLIDAY
09-12-24,Monday,Remedial  ,Remedial,Remedial Remed,Remedial,Remedial,Remedial,Remedial,Remedial,Remedial
10-12-24,Tuesday,Remedial  ,Remedial,ial,Remedial,Remedial,Remedial,Remedial,Remedial,Remedial






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
    const [year, month, day] = dateString.split('-');
    return `${day}-${month}-${year.slice(-2)}`;
}

function loadDataForDate(date) {
    const formattedDate = formatDateForComparison(date);
    const data = parseCSV(csvData);
    return data.find(row => row.Date === formattedDate);
}

function loadTimetables() {
    const dateInput = document.getElementById('dateInput').value || new Date().toISOString().split('T')[0];
    const selectedDate = new Date(dateInput);

    const previousDate = new Date(selectedDate);
    previousDate.setDate(selectedDate.getDate() - 1);

    const nextDate = new Date(selectedDate);
    nextDate.setDate(selectedDate.getDate() + 1);

    const dates = [previousDate, selectedDate, nextDate];

    const tbody = document.getElementById('csvTable').querySelector('tbody');
    tbody.innerHTML = ''; 

    dates.forEach(date => {
        const dateString = date.toISOString().split('T')[0];
        const data = loadDataForDate(dateString);

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

function highlightCurrentTimeColumn() {
    const currentTime = new Date().toTimeString().slice(0, 5); 

    const table = document.getElementById('csvTable');
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
    loadTimetables(); 
    highlightCurrentTimeColumn(); 
};

document.getElementById('dateInput').addEventListener('change', () => {
    loadTimetables();
});

