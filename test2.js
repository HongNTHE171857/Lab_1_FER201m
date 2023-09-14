
const students = [
    { id: 1, firstName: 'Bachthu', lastName: 'Ha', PE: 5, FE: 7, dateofExam: '2/4/2021' },
    { id: 2, firstName: 'Vuthi', lastName: 'Ba', PE: 8, FE: 7, dateofExam: '1/6/2020' },
    { id: 3, firstName: 'Vuthi', lastName: 'an', PE: 10, FE: 0, dateofExam: '2/4/2021' },
    { id: 4, firstName: 'Tran', lastName: 'Tuan', PE: 9, FE: 5, dateofExam: '2/4/2020' },
    { id: 5, firstName: 'NgoNam', lastName: 'Anh', PE: 4, FE: 4, dateofExam: '2/4/2020' },
];

const root = document.getElementById("root");

const createTable = (data) => {
    const table = document.createElement('table');
    table.style.border = "1px solid black";
    table.style.borderCollapse = "collapse";
    const headerRow = document.createElement('tr');
    for (const key in data[0]) {
        const th = document.createElement('th');
        th.style.border = "1px solid black";
        th.style.borderCollapse = "collapse";
        th.textContent = key;
        headerRow.appendChild(th);
    }
    const totalTh = document.createElement('th');
    totalTh.style.border = "1px solid black";
    totalTh.style.borderCollapse = "collapse";
    totalTh.textContent = "Total";
    headerRow.appendChild(totalTh);
    table.appendChild(headerRow);

    data.forEach((student) => {
        const row = document.createElement('tr');
        row.style.border = "1px solid black";
        row.style.borderCollapse = "collapse";
        for (const key in student) {
            const cell = document.createElement('td');
            cell.style.border = "1px solid black";
            cell.style.borderCollapse = "collapse";
            cell.textContent = student[key];
            row.appendChild(cell);
        }
        const totalCell = document.createElement('td');
        totalCell.style.border = "1px solid black";
        totalCell.style.borderCollapse = "collapse";
        const total = (student.PE + student.FE) / 2;
        totalCell.textContent = total.toFixed(1); 
        row.appendChild(totalCell);
        table.appendChild(row);
    });

    return table;
};

const showStudents = () => {
    root.innerHTML = ''; 

    const h2 = document.createElement('h2');
    h2.textContent = 'The list of students';
    root.appendChild(h2);

    const table = createTable(students);
    root.appendChild(table);
};

const showSearch = () => {
    const fromInput = document.getElementById("from").value;
    const toInput = document.getElementById("to").value;
    const filteredStudents = students.filter(student => {
        const total = (student.PE + student.FE) / 2;
        return total >= parseFloat(fromInput) && total <= parseFloat(toInput);
    });
    showFilteredStudents(filteredStudents);
};

const showFilteredStudents = (filteredStudents) => {
    root.innerHTML = '';
    const h2 = document.createElement('h2');
    h2.textContent = 'The list of students';
    root.appendChild(h2);
    const table = createTable(filteredStudents);
    root.appendChild(table);
};

const showSearchKey = () => {
    const keyInput = document.getElementById("key").value.toLowerCase();
    const filteredStudents = students.filter(student => {
        const fullName = (student.firstName + ' ' + student.lastName).toLowerCase();
        return fullName.includes(keyInput);
    });
    showFilteredStudents(filteredStudents);
};

const showSearchDate = () => {
    const dateInput = document.getElementById("date").value;
    const filteredStudents = students.filter(student => {
        return student.dateofExam === dateInput;
    });
    showFilteredStudents(filteredStudents);
};

const showSortMark = () => {
    const sortedStudents = [...students].sort((a, b) => {
        const totalA = (a.PE + a.FE) / 2;
        const totalB = (b.PE + b.FE) / 2;
        return totalB - totalA;
    });
    showFilteredStudents(sortedStudents);
};

const showSortName = () => {
    const sortedStudents = [...students].sort((a, b) => {
        const fullNameA = a.firstName + ' ' + a.lastName;
        const fullNameB = b.firstName + ' ' + b.lastName;
        return fullNameA.localeCompare(fullNameB);
    });
    showFilteredStudents(sortedStudents);
};