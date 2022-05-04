// Declare any necessary variables.
const resetButton = document.getElementById('reset');
const printCertificateButton = document.getElementById('print');

// Add an event listener that responds to the click of the "print" button by calling a function to instantiate
//  a new student object, and another function to print the certificate.
printCertificateButton.addEventListener('click', function() {
    instantiateStudent();
    printCertificate();
});

// Add an event listener that responds to the click of the reset button by resetting all the values
// both in the form and in the certificate.
resetButton.addEventListener('click', function() {
    document.getElementById('studentName').value = '';
    document.getElementById('className').value = '';
    document.getElementById('studentScores').value = '';
    document.getElementById('possibleScores').value = '';
});

// Create a function that instantiates a new student object with the input from the HTML form.
function instantiateStudent() {
    student = new clsStudent(document.getElementById('studentName').value, document.getElementById('className').value, document.getElementById('studentScores').value, document.getElementById('possibleScores').value);
}

// Create a function that fills in the student's name, class name, and calculated grade on the certificate.
function printCertificate() {
    document.getElementById('certStudentName').innerHTML = document.getElementById('studentName').value;
    document.getElementById('certClassName').innerHTML = document.getElementById('className').value;
    document.getElementById('certGrade').innerHTML = student.calculateLetterGrade();
}

// Create a function that converts the contents of a comma-separated text string to a numeric array.
// You can use this function when instantiating the arrays in the student object.
function convertStringToArray(string) {
    let array = string.split(',');
    return array;
}