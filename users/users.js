get({ skip: 0, take: 10 });

function generateTable(users) {

    const container = document.getElementById('users');

    const rows =
        users
            .map(item =>
                `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.firstName}</td>
                    <td>${item.lastName}</td>
                    <td>${item.email}</td>
                    <td>${item.address}</td>
                    <td>${item.isActive}</td>
                    <td>
                        <a href="${item.id}">View</a>
                        <button onclick="onEdit(${item.id})">Edit</button>
                        <button onclick="onDelete(${item.id})">Delete</button>
                    </td>
                </tr>
            `)
            .join('');

    const table =
        `
        <table>
            <thead>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Is Active</th>
                <th>Actions</th>
            </thead>
            <tbody>
                ${rows}
            </tbody>
        </table>
        `;

    container.innerHTML = table;
}

function onSearch() {
    const skip = 0;
    const take = 10;
    const firstName = document.getElementById('firstName').value ?? null;
    const lastName = document.getElementById('lastName').value ?? null
    const email = document.getElementById('email').value ?? null;
    const isActive = document.getElementById('isActive').value ?? null;

    get({
        firstName,
        lastName,
        email,
        isActive,
        skip,
        take
    });
}

function onEdit(id) {
    console.log('Edit: ' + id)
}

function onDelete(id) {
    console.log('Delete: ' + id);
}

function get(data) {

    let params = { skip: data.skip, take: data.take };

    if (data.firstName) {
        params = { ...params, firstName: data.firstName };
    }

    if (data.lastName) {
        params = { ...params, lastName: data.lastName };
    }

    if (data.email) {
        params = { ...params, email: data.email };
    }

    if (data.isActive) {
        params = { ...params, isActive: data.isActive };
    }

    const queryParams = new URLSearchParams(params);

    fetch('http://localhost:3000/users?' + queryParams.toString())
        .then((response) => response.json())
        .then((data) => generateTable(data))
        .catch(err => console.log(err));
}