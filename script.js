// Sample study materials data
const studyMaterials = [
    { title: 'Introduction to HTML', url: 'https://www.w3schools.com/' },
    { title: 'CSS Basics', url: 'https://www.w3schools.com/' },
    { title: 'JavaScript Fundamentals', url: 'https://www.w3schools.com/js/DEFAULT.asp' },
    { title: 'Python Crash Course', url: 'https://www.w3schools.com/python/python_intro.asp' }
    // Add more study materials as needed
];

// Function to display study materials
function displayMaterials() {
    const materialList = document.getElementById('materialList');
    materialList.innerHTML = ''; // Clear existing list

    studyMaterials.forEach(material => {
        const li = document.createElement('li');
        li.textContent = material.title;
        li.addEventListener('click', () => {
            window.open(material.url, '_blank'); // Open link in new tab
        });
        materialList.appendChild(li);
    });
}

// Function to search study materials
function search() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();

    const filteredMaterials = studyMaterials.filter(material =>
        material.title.toLowerCase().includes(searchTerm)
    );

    // Update display with filtered materials
    const materialList = document.getElementById('materialList');
    materialList.innerHTML = ''; // Clear existing list

    filteredMaterials.forEach(material => {
        const li = document.createElement('li');
        li.textContent = material.title;
        li.addEventListener('click', () => {
            window.open(material.url, '_blank'); // Open link in new tab
        });
        materialList.appendChild(li);
    });
}

// Initial display of materials when the page loads
displayMaterials();
