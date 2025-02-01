const data = [
    { name: "Steave steave", email: "steave@yopmail.com", phone: "1234567890", role: "Chef", status: "Active", action: "Edit" },
    { name: "John wick", email: "johnwick@yopmail.com", phone: "0987654321", role: "User", status: "Inactive", action: "Edit" },
    { name: "john doe", email: "johnwick@yopmail.com", phone: "1122334455", role: "Admin", status: "Active", action: "Edit" },
    { name: "Messi", email: "johnwick@yopmail.com", phone: "2233445566", role: "User", status: "Inactive", action: "Edit" },
    { name: "Eve", email: "johnwick@yopmail.com", phone: "3344556677", role: "User", status: "Active", action: "Edit" },
    { name: "Fan", email: "johnwick@yopmail.com", phone: "4455667788", role: "User", status: "Inactive", action: "Edit" },
    { name: "race", email: "johnwick@yopmail.com", phone: "5566778899", role: "Admin", status: "Active", action: "Edit" },
    { name: "Hank", email: "johnwick@yopmail.com", phone: "6677889900", role: "User", status: "Inactive", action: "Edit" }
];

const rowsPerPage = 5;
let currentPage = 1;

const tableBody = document.getElementById('table-body');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const pageNumbers = document.getElementById('page-numbers');

function displayPage(page) {
    tableBody.innerHTML = '';
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    const rows = data.slice(startIndex, endIndex);
    rows.forEach(item => {
        const row = `
            <tr>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.phone}</td>
                <td>${item.role}</td>
                <td class="status">${item.status}</td>
                <td>${item.action}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });

    updatePagination();
}

function updatePagination() {
    const totalPages = Math.ceil(data.length / rowsPerPage);
    pageNumbers.textContent = `Page ${currentPage} of ${totalPages}`;
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
}

prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayPage(currentPage);
    }
});

nextButton.addEventListener('click', () => {
    const totalPages = Math.ceil(data.length / rowsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayPage(currentPage);
    }
});

displayPage(currentPage);