function showSyllabus(year) {
    const years = ['first-year', 'second-year', 'third-year', 'fourth-year'];
    years.forEach(y => {
        document.getElementById(y).style.display = 'none';
    });
    document.getElementById(year).style.display = 'block';
}

// Display the first year syllabus by default
document.addEventListener('DOMContentLoaded', (event) => {
    showSyllabus('first-year');
});
