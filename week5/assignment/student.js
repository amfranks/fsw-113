// Create a class called Student whose constructor maintains all four data inputs from the HTML page.

class clsStudent {
    constructor (...args) {
        this.studentNameInput = args[0],
        this.classNameInput = args[1],
        this.studentScoresInput = args[2],
        this.possibleScoresInput = args[3]
    }

    // The class should also contain the following methods:
    // - a method that adds up all the student's scores
    // - a method that adds up all the possible scores
    // - a method that calculates the student's letter grade (divide the student's score by the possible scores and use the resulting decimal to determine grade)

    sumAllStudentScores(studentScoresInput) {
        let array = convertStringToArray(studentScoresInput);
        array = array.map(Number);
       let sum = array.reduce((a, b) => {
           return a + b;
       }, 0);
       return sum;
    }

    sumAllPossibleScores(possibleScoresInput) {
        let array = convertStringToArray(possibleScoresInput);
        array = array.map(Number);
       let sum = array.reduce((a, b) => {
           return a + b;
       }, 0);
       return sum;
    }

    calculateLetterGrade() {
        let allScores = this.sumAllStudentScores(document.getElementById('studentScores').value);
        let allPossibleScores = this.sumAllPossibleScores(document.getElementById('possibleScores').value);

        var result = (allScores / allPossibleScores);

        var finalGrade;

        if (result <= 1 && result >= .9) {
            finalGrade = 'A';
        } else if (result <= .89 && result >= .80) {
            finalGrade = 'B';
        } else if (result <= .79 && result >= .70) {
            finalGrade = 'C';
        } else if (result <= .69 && result >= .60) {
            finalGrade = 'D';
        } else if (result <= .59 && result >= .50) {
            finalGrade = 'F';
        }

        console.log(finalGrade)
        return finalGrade;
    }
}