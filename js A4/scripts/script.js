const resetForm = document.getElementById('reset-form');
const apiDataSection = document.getElementById('api-data');
const fetchButton = document.getElementById('fetch-button');

const studentIdSpan = document.getElementById('student-id');
const studentNameSpan = document.getElementById('student-name');
const studentId = '200554111';
const studentName = 'Aswin Veluthedathparambil Sajeevan';
studentIdSpan.textContent = studentId;
studentNameSpan.textContent = studentName;

function fetchRepositories(username, accessToken) {
    const apiUrl = `https://api.github.com/users/${username}/repos`;
    
    fetch(apiUrl, {
        headers: {
            'Authorization': `token ${accessToken}`
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        displayData(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function displayData(data) {
    const dataList = document.createElement('ul');
    data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item.name;
        dataList.appendChild(listItem);
    });
    apiDataSection.appendChild(dataList);
}

fetchButton.addEventListener('click', function() {
    fetchRepositories('Aswinvs2004', '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');
});

resetForm.addEventListener('submit', function(event) {
    event.preventDefault();
    fetchData();
});


